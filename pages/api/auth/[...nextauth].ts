import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import NaverProvider from 'next-auth/providers/naver'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    NaverProvider({
      // @ts-ignore
      clientId: process.env.NAVER_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      let userData = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      })
      session.user = userData
      return session
    },
  },
}

export default NextAuth(authOptions)
