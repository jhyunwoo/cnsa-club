import { useSession, signIn, signOut } from 'next-auth/react'
export default function Admin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <div>Admin Page</div>
        <div>{session.user.email}</div>
        <button onClick={() => signOut()}>login</button>
      </div>
    )
  } else {
    return (
      <div>
        <div>Admin Page</div>
        <button onClick={() => signIn()}>login</button>
      </div>
    )
  }
}
