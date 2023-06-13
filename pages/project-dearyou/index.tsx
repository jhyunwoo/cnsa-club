import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import DearuLogo from '../../public/dearu.ico'
import BeatusLogo from '../../public/BeatusLogo.jpg'
import Poster0 from '../../public/dearyou/0.png'
import Poster1 from '../../public/dearyou/1.png'
import Poster2 from '../../public/dearyou/2.png'
import Poster3 from '../../public/dearyou/3.png'
import Link from 'next/link'
import Image from 'next/image'


export default function Dearyou() {
    return (
        <div className="">
        <div className='sm:w-1/2 sm:mx-auto text-center mt-32'>
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
                    쉽게 나누고 거래할 수 있는 플랫폼입니다!
                </div>
                <div className='mx-auto mt-5'>
                    2회고사 이후 4일간(7.11~7.14)
                </div>
                <div className='mx-auto mb-5'>
                    서비스를 운영할 계획입니다.
                </div>
                
                <div className='mx-auto mt-20    mb-20 font-bold'>
                    ▼ 포스터 보러 가기
                </div>
            </motion.div>

                
            <Image src={Poster0} alt="Poster0" className="mx-auto"/>
            <Image src={Poster1} alt="Poster1" className="mx-auto"/>
            <Image src={Poster2} alt="Poster2" className="mx-auto"/>
            <Image src={Poster3} alt="Poster3" className="mx-auto"/>


            
            <div className="mt-4 text-2xl">MADE BY</div>
            <div className="mt-4 font-bold">충남삼성고 IT 개발 동아리</div>
            <Image src={BeatusLogo} alt="beatusLogo" className="w-32 h-32 mx-auto mb-10"/>
            </div>
        </div>
    )
}
