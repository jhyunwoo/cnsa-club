import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex flex-col">
      <div className="bg-slate-100 p-4">
        <div className="text-2xl font-bold">CNSA Club</div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        <Link
          href={'/beatus'}
          className={
            'bg-slate-100 p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-slate-200 transition duration-200'
          }
        >
          <div className="text-xl font-semibold">Beatus</div>
          <div className="text-sm text-slate-700">개발 동아리</div>
        </Link>
      </div>
    </div>
  )
}
