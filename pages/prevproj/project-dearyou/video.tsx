import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import DearuLogo from './dearu.ico'
import BeatusLogo from './BeatusLogo.jpg'
import Poster0 from './dearyou/0.png'
import Poster1 from './dearyou/1.png'
import Poster2 from './dearyou/2.png'
import Poster3 from './dearyou/3.png'
import Poster4 from './dearyou/4.png'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'


export default function Dearyou() {
    const scrollRef = useRef<null | HTMLDivElement>(null); 
    return (
        <div className="">
        <div className='sm:w-2/5 sm:mx-auto text-center mt-32'>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                type: 'tween',
                delay: 0.5,
                duration: 1,
                }}
                className="mx-auto text-center"
            >
                <div className="mt-4 text-2xl">Coming Soon!</div>
                <div className="my-2 text-2xl font-bold">드려유 (DearYou)</div>
                <Image 
                    src={DearuLogo}
                    alt="dearyou"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                />
            </motion.div>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                type: 'tween',
                delay: 1,
                duration: 1,
                }}
                className="mx-auto p-2"
            >
                <div className='mx-auto mt-4 mb-8'>
                    홍보 영상은 7월 7일 공개됩니다.
                </div>
                <Link href={`/project-dearyou`}
                    className='mx-auto p-3 bg-amber-200 rounded-xl'>
                        소개 페이지로 이동
                </Link>
            </motion.div>
            </div>
        </div>
    )
}
