-- VIVAORA initial schema. Apply only to a dedicated VIVAORA Supabase project.
create extension if not exists pgcrypto;

create type public.booking_status as enum ('inquiry','quoted','pending_payment','confirmed','cancelled','completed');
create type public.payment_status as enum ('pending','paid','partially_paid','refunded','failed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role text not null default 'customer' check (role in ('customer','agent','admin','superadmin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text,
  destination text,
  category text not null default 'package',
  country text,
  duration_days integer check (duration_days is null or duration_days > 0),
  price_from numeric(12,2),
  currency char(3) not null default 'BRL',
  status text not null default 'draft' check (status in ('draft','published','archived')),
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_code text unique not null,
  customer_id uuid not null references public.profiles(id),
  product_id uuid references public.products(id),
  status public.booking_status not null default 'inquiry',
  departure_date date,
  return_date date,
  travelers integer not null default 1 check (travelers > 0),
  total_amount numeric(12,2),
  deposit_amount numeric(12,2),
  balance_due_at date,
  supplier_confirmation text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id),
  amount numeric(12,2) not null check (amount > 0),
  status public.payment_status not null default 'pending',
  provider text,
  provider_reference text unique,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  contact_email text,
  contact_phone text,
  contract_notes text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  destination text,
  message text not null,
  consent_at timestamptz,
  status text not null default 'new' check (status in ('new','in_progress','answered','closed')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;
alter table public.suppliers enable row level security;
alter table public.inquiries enable row level security;

create policy "profiles read own" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "profiles update own" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "published products visible" on public.products for select to anon, authenticated using (status = 'published');
create policy "customers read own bookings" on public.bookings for select to authenticated using (customer_id = (select auth.uid()));
create policy "customers read own payments" on public.payments for select to authenticated using (exists (select 1 from public.bookings b where b.id = booking_id and b.customer_id = (select auth.uid())));

-- No public INSERT policies: inquiries, bookings, and payments must be created by
-- validated server-side endpoints after rate limiting and anti-spam checks.
-- Staff policies are intentionally deferred until trusted app_metadata roles exist.
