import Link from "next/link";
const destinations = [
  ["Brasil","Rio de Janeiro, Nordeste, Amazônia e mais","https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=85"],
  ["Europa","Portugal, França, Itália e roteiros combinados","https://images.unsplash.com/photo-149.9856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85"],
  ["América do Sul","Argentina, Chile, Peru e experiências culturais","https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"],
  ["Ásia e ilhas","Japão, Tailândia e destinos de praia","https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85"],
];
export default function DestinosPage(){return <div className="container py-16"><p className="eyebrow mb-3">Inspire sua próxima jornada</p><h1 className="section-title">Destinos pelo mundo</h1><p className="muted mt-3 max-w-2xl leading-7">Explore regiões e peça uma proposta sob medida. A oferta final depende de datas, disponibilidade e confirmação dos fornecedores.</p><div className="mt-9 grid gap-6 sm:grid-cols-2">{destinations.map(([name,desc,img])=><article key={name} className="card"><div className="image-cover h-64" style={{backgroundImage:`url(${img})`}}/><div className="p-6"><h2 className="text-2xl font-extrabold">{name}</h2><p className="muted mt-2">{desc}</p><Link className="btn-primary mt-5" href="/contato">Planejar viagem</Link></div></article>)}</div></div>}
