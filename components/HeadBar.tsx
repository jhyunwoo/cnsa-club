import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function HeadBar() {
  const [head, setHead] = useState(false)
  const { data: session } = useSession()
  return (
    <div className="bg-slate-100 p-4 flex justify-between">
      <Link href="/" className="text-2xl font-bold">
        CNSA Club
      </Link>
      <div
        className={`w-full h-screen fixed top-0 right-0 flex ${
          head ? 'translate-x-0' : 'translate-x-full'
        } transition`}
      >
        <div className="w-0 sm:w-1/3 h-full bg-slate-300/20 backdrop-blur-sm"></div>
        <div className="w-full sm:w-2/3 h-full bg-white flex flex-col">
          <div className="ml-auto p-4">
            <button onClick={() => setHead(false)}>
              <XMarkIcon className="w-8 h-8" />
            </button>
          </div>
          <div className="p-4">
            <div className="text-xl font-semibold">
              {session ? session?.user?.name : '로그인이 필요합니다'}
            </div>
            <div className="text-lg font-medium">
              {session ? session?.user?.email : ''}
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
            <Link
              href="/append-list"
              className="border-t border-slate-500 py-4"
            >
              <div className="text-lg font-medium">지원한 동아리</div>
            </Link>
          </div>
        </div>
      </div>
      <button onClick={() => setHead(true)}>
        <Bars3Icon className="w-8 h-8" />
      </button>
    </div>
  )
}
