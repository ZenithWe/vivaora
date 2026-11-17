import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

type Trip = { title:string; place:string; days:string; price:string; image:string; tag:string; };
export function TripCard({ trip }: { trip: Trip }) {
  return <article className="card group">
    <div className="image-cover relative h-56" style={{backgroundImage:`url(${trip.image})`}}>
      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-extrabold text-ocean">{trip.tag}</span>
    </div>
    <div className="p-5">
      <div className="mb-2 flex items-center gap-1 text-xs font-semibold text-slate-500"><MapPin size={13}/>{trip.place}</div>
      <h3 className="text-xl font-extrabold tracking-tight">{trip.title}</h3>
      <p className="mt-1 text-sm text-slate-500">{trip.days}</p>
      <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
        <div><span className="block text-[11px] text-slate-500">A partir de</span><strong className="text-xl">{trip.price}</strong><span className="text-xs text-slate-500"> / pessoa</span></div>
        <Link href="/contato" aria-label={`Consultar ${trip.title}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-ocean transition group-hover:bg-ocean group-hover:text-white"><ArrowUpRight size={19}/></Link>
      </div>
    </div>
  </article>;
}
