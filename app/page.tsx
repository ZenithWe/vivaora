import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe2, ShieldCheck, Headphones, Sparkles, Search, MapPin, CalendarDays, Users } from "lucide-react";
import { TripCard } from "@/components/trip-card";

const trips = [
 {title:"Encantos de Portugal",place:"Lisboa e Porto, Portugal",days:"8 dias • experiências culturais",price:"R$ 6.890",tag:"Internacional",image:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85"},
 {title:"Praias de Alagoas",place:"Maceió, Brasil",days:"6 dias • mar e descanso",price:"R$ 2.490",tag:"Brasil",image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85"},
 {title:"Uma pausa em Buenos Aires",place:"Buenos Aires, Argentina",days:"5 dias • gastronomia e cultura",price:"R$ 3.250",tag:"Internacional",image:"https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=85"}
];

const destinations = [
 ["Rio de Janeiro","Brasil","https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=85"],
 ["Paris","França","https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85"],
 ["Maldivas","Oceano Índico","https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85"],
 ["Fernando de Noronha","Brasil","https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=85"]
];

export default function Home() {
 return <>
  <section className="relative isolate overflow-hidden bg-ink">
   <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-45" style={{backgroundImage:"url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2200&q=90)"}}/>
   <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/10"/>
   <div className="container grid min-h-[650px] items-center py-20 lg:grid-cols-[1.1fr_.9fr]">
    <div className="max-w-2xl text-white">
     <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide"><Sparkles size={14} className="text-coral"/> O mundo é maior do que a rotina</span>
     <h1 className="text-5xl font-black leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-[70px]">Sua próxima história começa <span className="text-coral">aqui.</span></h1>
     <p className="mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg">Viagens nacionais e internacionais pensadas para transformar lugares em memórias inesquecíveis.</p>
     <div className="mt-9 flex flex-wrap gap-3"><Link href="/viagens" className="btn-primary">Explorar viagens <ArrowUpRight size={17}/></Link><Link href="/contato" className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">Planejar do meu jeito</Link></div>
    </div>
    <div className="hidden justify-end lg:flex">
     <div className="w-[330px] rounded-[28px] border border-white/25 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between"><span className="text-sm font-bold">Encontre sua viagem</span><Globe2 className="text-coral"/></div>
      <form action="/viagens" className="space-y-3">
       <label className="block rounded-2xl bg-white p-3 text-ink"><span className="mb-1 flex items-center gap-2 text-[11px] font-bold text-slate-500"><MapPin size={13}/> DESTINO</span><input name="q" placeholder="Para onde vamos?" className="w-full text-sm outline-none"/></label>
       <label className="block rounded-2xl bg-white p-3 text-ink"><span className="mb-1 flex items-center gap-2 text-[11px] font-bold text-slate-500"><CalendarDays size={13}/> QUANDO</span><input name="data" placeholder="Escolha suas datas" className="w-full text-sm outline-none"/></label>
       <label className="block rounded-2xl bg-white p-3 text-ink"><span className="mb-1 flex items-center gap-2 text-[11px] font-bold text-slate-500"><Users size={13}/> VIAJANTES</span><select name="pessoas" className="w-full bg-transparent text-sm outline-none"><option>2 pessoas</option><option>1 pessoa</option><option>3 pessoas</option><option>4 ou mais</option></select></label>
       <button className="flex w-full items-center justify-center gap-2 rounded-full bg-coral py-3.5 text-sm font-extrabold text-white">Buscar viagens <Search size={16}/></button>
      </form>
      <p className="mt-3 text-center text-[10px] text-white/70">Pesquisa inicial — disponibilidade será confirmada pela equipe.</p>
     </div>
    </div>
   </div>
  </section>
  <section className="container -mt-8 relative z-10 grid gap-4 rounded-3xl bg-white p-6 shadow-soft sm:grid-cols-3">
   {[ ["Atendimento próximo","Suporte humano em cada etapa",Headphones], ["Planejamento cuidadoso","Opções alinhadas ao seu perfil",Sparkles], ["Compra com segurança","Informações claras em cada etapa",ShieldCheck] ].map(([title,desc,Icon]:any)=><div key={title} className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-ocean"><Icon size={21}/></span><div><h3 className="text-sm font-extrabold">{title}</h3><p className="text-xs text-slate-500">{desc}</p></div></div>)}
  </section>
  <section className="container py-24">
   <div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow mb-3">Inspire-se e descubra</p><h2 className="section-title">Viagens em destaque</h2><p className="mt-3 text-sm text-slate-500">Ideias para começar a imaginar sua próxima viagem.</p></div><Link href="/viagens" className="inline-flex items-center gap-2 text-sm font-extrabold text-ocean">Ver todas <ArrowRight size={16}/></Link></div>
   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{trips.map(t=><TripCard key={t.title} trip={t}/>)}</div>
  </section>
  <section className="bg-sand py-24"><div className="container"><div className="mb-9"><p className="eyebrow mb-3">O mundo espera por você</p><h2 className="section-title">Destinos para se apaixonar</h2><p className="mt-3 text-sm text-slate-500">Do pertinho ao outro lado do mundo.</p></div>
   <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{destinations.map(([name,country,img])=><Link href="/destinos" key={name} className="group relative h-64 overflow-hidden rounded-3xl sm:h-80"><div className="image-cover absolute inset-0 transition duration-500 group-hover:scale-105" style={{backgroundImage:`url(${img})`}}/><div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"/><div className="absolute bottom-5 left-5 text-white"><p className="text-xs text-white/75">{country}</p><h3 className="text-xl font-extrabold">{name}</h3></div></Link>)}</div></div></section>
  <section className="container py-24"><div className="grid items-center gap-10 rounded-[32px] bg-mint p-8 sm:p-12 lg:grid-cols-[1fr_.8fr]"><div><p className="eyebrow mb-3">Sua viagem, suas escolhas</p><h2 className="section-title">Tem um destino em mente?</h2><p className="mt-4 max-w-lg leading-7 text-slate-600">Conte o que você imagina. Nossa equipe pode ajudar a organizar uma proposta com roteiro, hospedagem e experiências adequadas ao seu plano.</p><Link href="/contato" className="btn-primary mt-7">Criar viagem personalizada <ArrowUpRight size={17}/></Link></div><div className="relative h-64 overflow-hidden rounded-3xl sm:h-80"><div className="image-cover absolute inset-0" style={{backgroundImage:"url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85)"}}/></div></div></section>
 </>;
}
