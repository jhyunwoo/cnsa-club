import { useRouter } from 'next/router'

export default function Submitted() {
  const router = useRouter()
  return (
    <div className="fixed top-0 right-0 left-0 bg-slate-100/50 flex flex-col justify-center items-center w-screen h-screen backdrop-blur-sm">
      <div className="text-2xl font-bold">이미 지원한 동아리입니다</div>
      <button
        className="bg-blue-400 rounded-full px-4 text-white mt-4 p-2 mx-auto"
        onClick={() => router.push('/append-list')}
      >
        지원한 동아리 보기
      </button>
    </div>
  )
}
