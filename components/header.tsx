"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const links = [
  ["Destinos", "/destinos"], ["Viagens", "/viagens"], ["Cruzeiros", "/cruzeiros"],
  ["Experiências", "/experiencias"], ["Sobre", "/sobre"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="VIVAORA página inicial">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ocean text-white"><Compass size={23}/></span>
          <span className="text-[25px] font-black tracking-[-.07em] text-ink">VIVA<span className="text-coral">ORA</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-ocean">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/minha-conta" className="text-sm font-bold text-ink">Minha conta</Link>
          <Link href="/contato" className="btn-primary text-sm">Planejar viagem <span>↗</span></Link>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-xl border p-2 lg:hidden" aria-label="Abrir menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && <nav className="border-t bg-white px-5 py-4 lg:hidden">
        <div className="container flex flex-col gap-4">
          {links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="font-semibold">{label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/contato" className="btn-primary w-fit">Planejar viagem ↗</Link>
        </div>
      </nav>}
    </header>
  );
}
