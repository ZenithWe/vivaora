import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function MinhaContaPage(){
  const supabase = await createClient();
  if (!supabase) return <div className="container max-w-xl py-20"><div className="card p-8"><p className="eyebrow mb-3">Área do viajante</p><h1 className="section-title">Minha conta</h1><p className="muted mt-3 leading-7">A autenticação ainda não está configurada. A equipe precisa conectar o projeto Supabase exclusivo da VIVAORA.</p><Link href="/login" className="btn-primary mt-6">Ir para entrar</Link></div></div>;
  const { data:{ user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return <div className="container max-w-3xl py-16"><p className="eyebrow mb-3">Área do viajante</p><h1 className="section-title">Olá, {user.user_metadata?.full_name || user.email}</h1><p className="muted mt-3">Sua conta está autenticada. Os módulos de reservas e documentos serão habilitados após a configuração do banco e das integrações.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="card p-6"><h2 className="font-extrabold">Minhas solicitações</h2><p className="muted mt-2 text-sm">Suas cotações e reservas aparecerão aqui quando o fluxo estiver conectado.</p></div><div className="card p-6"><h2 className="font-extrabold">Meus documentos</h2><p className="muted mt-2 text-sm">Documentos e vouchers serão disponibilizados após confirmação.</p></div></div><form action="/auth/signout" method="post" className="mt-7"><button className="btn-outline">Sair da conta</button></form></div>
}
