import { useRouter } from 'next/router'

export default function SubmitAlert({props}:String) {
  const router = useRouter()
  return (
    <div className="fixed top-0 right-0 left-0 bg-slate-100/50 flex flex-col justify-center items-center w-screen h-screen backdrop-blur-sm">
      <div className="text-2xl font-bold">✔{props.title}</div>
      <button
        className="bg-blue-400 rounded-full px-4 text-white mt-4 p-2 mx-auto"
        onClick={() => router.push('/beatus')}
      >
        Beatus 홈페이지
      </button>
    </div>
  )
}
