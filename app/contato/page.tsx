import { Mail, MessageCircle, MapPin } from "lucide-react";
export default function ContactPage() {
 return <div className="container grid gap-12 py-16 lg:grid-cols-[.9fr_1.1fr]">
  <div><p className="eyebrow mb-3">Vamos conversar</p><h1 className="section-title">Conte para onde você quer ir.</h1><p className="muted mt-4 leading-7">Compartilhe uma ideia de viagem. A equipe VIVAORA poderá entender suas preferências e preparar os próximos passos.</p>
   <div className="mt-9 space-y-5 text-sm"><p className="flex items-center gap-3"><MessageCircle className="text-ocean"/> Atendimento via WhatsApp (canal a configurar)</p><p className="flex items-center gap-3"><Mail className="text-ocean"/> contato@vivaora.com.br (endereço provisório)</p><p className="flex items-center gap-3"><MapPin className="text-ocean"/> Belo Horizonte e região — atendimento a viajantes de todo o Brasil</p></div>
  </div>
  <form className="card space-y-4 p-7" action="mailto:contato@vivaora.com.br" method="post" encType="text/plain">
   <h2 className="text-xl font-extrabold">Solicitar atendimento</h2>
   <p className="text-xs text-slate-500">Formulário demonstrativo. O envio integrado será configurado no backend.</p>
   <label className="block text-sm font-bold">Nome<input required name="nome" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-ocean" placeholder="Seu nome"/></label>
   <label className="block text-sm font-bold">E-mail<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-ocean" placeholder="voce@email.com"/></label>
   <label className="block text-sm font-bold">Destino de interesse<input name="destino" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-ocean" placeholder="Ex.: Chile, Nordeste, Europa..."/></label>
   <label className="block text-sm font-bold">Conte um pouco sobre sua viagem<textarea required name="mensagem" rows={4} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-ocean" placeholder="Datas aproximadas, quantidade de viajantes e o que gostaria de viver..."/></label>
   <button className="btn-primary w-full">Enviar solicitação</button>
  </form>
 </div>;
}
