import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
const modules=[["Viagens e produtos","Cadastro de pacotes, roteiros e saídas"],["Reservas","Solicitações, confirmações e status"],["Clientes","Cadastro e histórico de atendimento"],["Financeiro","Sinais, saldos, comissões e repasses"],["Parceiros","Fornecedores, contatos e contratos"],["Conteúdo","Destinos, banners e páginas"]];
export default async function AdminPage(){
  const supabase=await createClient();
  if(!supabase) return <div className="container py-16"><h1 className="section-title">Painel VIVAORA</h1><p className="muted mt-3">Configure o Supabase para habilitar o painel protegido.</p><Link href="/login" className="btn-primary mt-6">Entrar</Link></div>;
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) redirect("/login");
  const role=user.app_metadata?.role;
  if(!["admin","superadmin","agent"].includes(role)) redirect("/minha-conta");
  return <div className="container py-14"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow mb-3">Painel operacional</p><h1 className="section-title">Administração VIVAORA</h1><p className="muted mt-3">Olá, {user.email}. Estrutura inicial para operação interna.</p></div><Link href="/minha-conta" className="btn-outline">Área do cliente</Link></div><div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">O acesso é filtrado por app_metadata.role. Os módulos ainda não consultam nem alteram dados comerciais.</div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{modules.map(([a,b])=><article key={a} className="card p-6"><h2 className="text-xl font-extrabold">{a}</h2><p className="muted mt-2 text-sm leading-6">{b}</p><span className="mt-5 inline-block text-xs font-bold text-slate-400">Módulo em estruturação</span></article>)}</div></div>
}
