import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import DearuLogo from '../../public/dearu.ico'
import BeatusLogo from '../../public/BeatusLogo.jpg'
import Poster0 from '../../public/dearyou/0.png'
import Poster1 from '../../public/dearyou/1.png'
import Poster2 from '../../public/dearyou/2.png'
import Poster3 from '../../public/dearyou/3.png'
import Poster4 from '../../public/dearyou/4.png'
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
                <div className='mx-auto mt-5'>
                    <span className='font-bold'>드려유</span>는 우리 학교에서
                </div>
                <div className='mx-auto'>
                    교과서, 풀지 않은 문제집, 학용품 등을
                </div>
                <div className='mx-auto'>
                    쉽게 나누고 거래할 수 있는 온라인 플랫폼입니다!
                </div>
                <div className='mx-auto mt-5'>
                    2회고사 이후 4일간(7.11~7.14)
                </div>
                <div className='mx-auto mb-5'>
                    서비스를 운영할 계획입니다.
                </div>
                
                <div className='mx-auto mt-20 mb-20 font-bold'
                    onClick={()=>(
                        scrollRef?.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    )}>
                    ▼ 소개 포스터 보러 가기
                </div>
            </motion.div>

            <div ref={scrollRef} className=''>
            <Image src={Poster1} alt="Poster1" className="mx-auto w-full p-2"/>
            <Image src={Poster2} alt="Poster2" className="mx-auto w-full p-2"/>
            <Image src={Poster3} alt="Poster3" className="mx-auto w-full p-2"/>
            <Image src={Poster4} alt="Poster4" className="mx-auto w-full p-2"/>
            </div>
            
            <div className="mt-10 text-2xl">MADE BY</div>
            <div className="mt-2">충남삼성고 IT 개발 동아리</div>
            <Image src={BeatusLogo} alt="beatusLogo" className="w-64 h-64 mx-auto mb-10"/>
            <div className="mb-20 text-lg">with. 10대 자율위원단</div>
            </div>
        </div>
    )
}
