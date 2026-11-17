import Link from "next/link";
import { TripCard } from "@/components/trip-card";

const trips = [
 {title:"Encantos de Portugal",place:"Lisboa e Porto, Portugal",days:"8 dias • experiências culturais",price:"R$ 6.890",tag:"Internacional",image:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85"},
 {title:"Praias de Alagoas",place:"Maceió, Brasil",days:"6 dias • mar e descanso",price:"R$ 2.490",tag:"Brasil",image:"https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85"},
 {title:"Uma pausa em Buenos Aires",place:"Buenos Aires, Argentina",days:"5 dias • gastronomia e cultura",price:"R$ 3.250",tag:"Internacional",image:"https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=85"},
 {title:"Paisagens da Patagônia",place:"Argentina e Chile",days:"9 dias • natureza",price:"Sob consulta",tag:"Aventura",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"},
 {title:"Rio de Janeiro Essencial",place:"Rio de Janeiro, Brasil",days:"4 dias • cidade e praia",price:"Sob consulta",tag:"Brasil",image:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=85"},
 {title:"Dias nas Maldivas",place:"Maldivas",days:"7 dias • descanso",price:"Sob consulta",tag:"Internacional",image:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85"}
];

export default function ViagensPage() {
 return <div className="container py-16">
  <p className="eyebrow mb-3">Encontre sua próxima experiência</p>
  <h1 className="section-title">Explore nossas viagens</h1>
  <p className="muted mt-3 max-w-2xl leading-7">Inspire-se com algumas ideias de destinos. Valores e condições são referências ilustrativas e precisam ser confirmados em uma proposta oficial.</p>
  <div className="my-8 flex flex-wrap gap-2">{["Todas","Brasil","Internacionais","Cruzeiros","Experiências"].map(x=><span key={x} className={`rounded-full px-4 py-2 text-sm font-bold ${x==="Todas"?"bg-ink text-white":"bg-slate-100 text-slate-600"}`}>{x}</span>)}</div>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{trips.map(t=><TripCard key={t.title} trip={t}/>)}</div>
  <div className="mt-12 rounded-3xl bg-sand p-8 text-center"><h2 className="text-2xl font-extrabold">Não encontrou o que procura?</h2><p className="muted mt-2">Solicite um roteiro personalizado para o seu perfil.</p><Link href="/contato" className="btn-primary mt-5">Falar com a VIVAORA</Link></div>
 </div>;
}
