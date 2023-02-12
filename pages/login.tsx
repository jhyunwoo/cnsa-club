import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Login() {
  const { data: session } = useSession()
  const router = useRouter()
  function redirect() {
    if (session) {
      router.push('/')
    }
  }

  useEffect(() => {
    redirect()
  }, [session])

  if (!session) {
    return (
      <div className="w-full h-screen bg-slate-50 flex justify-center items-center">
        <div className="bg-white shadow-sm p-8 rounded-xl flex justify-center items-center flex-col">
          <div>로그인</div>
          <button onClick={() => signIn('github')}>github</button>
        </div>
      </div>
    )
  }
}
