import Link from "next/link";
import { Compass, Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2"><Compass className="text-coral"/><span className="text-2xl font-black tracking-tight">VIVAORA</span></div>
          <p className="max-w-xs text-sm leading-6 text-slate-300">Viagens que conectam você ao mundo. Descubra novos lugares e viva histórias que ficam.</p>
        </div>
        <div><h3 className="mb-4 font-bold">Explore</h3><div className="flex flex-col gap-3 text-sm text-slate-300"><Link href="/destinos">Destinos</Link><Link href="/viagens">Pacotes de viagem</Link><Link href="/cruzeiros">Cruzeiros</Link><Link href="/experiencias">Experiências</Link></div></div>
        <div><h3 className="mb-4 font-bold">A VIVAORA</h3><div className="flex flex-col gap-3 text-sm text-slate-300"><Link href="/sobre">Quem somos</Link><Link href="/contato">Fale conosco</Link><Link href="/politicas">Políticas</Link></div></div>
        <div><h3 className="mb-4 font-bold">Atendimento</h3><div className="flex flex-col gap-3 text-sm text-slate-300"><span className="flex items-center gap-2"><MessageCircle size={16}/> WhatsApp</span><span className="flex items-center gap-2"><Mail size={16}/> contato@vivaora.com.br</span><span className="flex items-center gap-2"><Instagram size={16}/> @vivaora</span></div></div>
      </div>
      <div className="border-t border-white/10"><div className="container flex flex-col justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row"><span>© {new Date().getFullYear()} VIVAORA. Todos os direitos reservados.</span><span>Viaje com propósito. Viva novas histórias.</span></div></div>
    </footer>
  );
}
