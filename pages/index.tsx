import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const [head, setHead] = useState(false)
  const { data: session } = useSession()
  return (
    <div className="bg-slate-50 w-full min-h-screen flex flex-col">
      <div className="bg-slate-100 p-4 flex justify-between">
        <div className="text-2xl font-bold">CNSA Club</div>
        <div
          className={`w-full h-screen fixed top-0 right-0 flex ${
            head ? 'translate-x-0' : 'translate-x-full'
          } transition`}
        >
          <div className="w-0 h-full backdrop-blur-md"></div>
          <div className="w-full h-full bg-white flex flex-col">
            <div className="ml-auto p-4">
              <button onClick={() => setHead(false)}>
                <XMarkIcon className="w-8 h-8" />
              </button>
            </div>
            <div className="p-4">
              <div className="text-xl font-semibold">
                {session ? session?.user?.name : '로그인이 필요합니다'}
              </div>
              {session ? (
                <button
                  className="text-lg font-medium my-2"
                  onClick={() => signOut()}
                >
                  로그아웃
                </button>
              ) : (
                <button
                  className="text-lg font-medium my-2"
                  onClick={() => signIn()}
                >
                  로그인
                </button>
              )}
            </div>
          </div>
        </div>
        <button onClick={() => setHead(true)}>
          <Bars3Icon className="w-8 h-8" />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        <Link
          href={'/beatus'}
          className={
            'bg-slate-100 p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-slate-200 transition duration-200'
          }
        >
          <div className="text-xl font-semibold">Beatus</div>
          <div className="text-sm text-slate-700">IT 개발 동아리</div>
        </Link>
      </div>
    </div>
  )
}
