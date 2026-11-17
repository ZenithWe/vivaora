"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AuthForm() {
  const [mode,setMode] = useState<"login"|"signup">("login");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  const [busy,setBusy] = useState(false);
  const router = useRouter();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setBusy(true);
    try {
      const supabase = createClient();
      if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email,password });
        if (error) throw error;
        router.push("/minha-conta");
        router.refresh();
      } else {
        const { error } = await supabase.auth.signUp({
          email,password,
          options:{ data:{ full_name:name }, emailRedirectTo:`${window.location.origin}/auth/callback` }
        });
        if (error) throw error;
        setMessage("Cadastro iniciado. Verifique seu e-mail para confirmar a conta.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Não foi possível concluir. Verifique a configuração do Supabase.");
    } finally { setBusy(false); }
  }

  return <div className="card p-7">
    <div className="mb-6 flex gap-2 rounded-full bg-slate-100 p-1">
      <button type="button" onClick={()=>setMode("login")} className={`flex-1 rounded-full py-2 text-sm font-bold ${mode==="login"?"bg-white shadow":"text-slate-500"}`}>Entrar</button>
      <button type="button" onClick={()=>setMode("signup")} className={`flex-1 rounded-full py-2 text-sm font-bold ${mode==="signup"?"bg-white shadow":"text-slate-500"}`}>Criar conta</button>
    </div>
    <form onSubmit={submit} className="space-y-4">
      {mode==="signup" && <label className="block text-sm font-bold">Nome completo<input required value={name} onChange={e=>setName(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" autoComplete="name"/></label>}
      <label className="block text-sm font-bold">E-mail<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" autoComplete="email"/></label>
      <label className="block text-sm font-bold">Senha<input required minLength={8} type="password" value={password} onChange={e=>setPassword(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" autoComplete={mode==="login"?"current-password":"new-password"}/></label>
      <button disabled={busy} className="btn-primary w-full disabled:opacity-50">{busy?"Aguarde...":mode==="login"?"Entrar na minha conta":"Criar minha conta"}</button>
    </form>
    {message && <p role="status" className="mt-4 rounded-xl bg-sand p-3 text-sm text-slate-700">{message}</p>}
    <p className="mt-5 text-xs leading-5 text-slate-500">Ao continuar, você concorda em receber comunicações necessárias à sua conta. Consulte nossas <Link className="font-bold text-ocean" href="/politicas">políticas</Link>.</p>
  </div>;
}
