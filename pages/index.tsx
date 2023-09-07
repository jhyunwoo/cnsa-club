import { motion } from 'framer-motion'
import DearuLogo from '../public/dearu.ico'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Club() {
  const router = useRouter();
  const [typing, setTyping] = useState(0);
  const {ref, inView, entry} = useInView();
  const typeText = `console.log("지루한 계산기 만들기, 알고리즘 문제 풀기와 같은 이론 중심 활동보단 직접 웹페이지, 애플리케이션 등을 개발하며 코딩과 친해질 수 있는 활동을 지향합니다.\\n");`

  useEffect(() => {
    if(!inView || typing > typeText.length) return;
    setTimeout(() => {setTyping(typing+1)}, 40);
  }, [inView, typing])

  const MegathonLink = () => (
    <Link className='m-4 p-1 rounded-lg bg-gradient-to-bl from-blue-400 to-purple-400'
      href={'/megathon'}>
      <div className='bg-slate-900 rounded-lg text-center text-white py-12 px-4'>
        <div className='text-3xl'>MEGATHON</div>
        <div className=''>동아리 내부 해커톤</div>
      </div>
    </Link>
  )
  const CurriculumLink = () => (
    <Link className='m-4 p-1 rounded-lg bg-gradient-to-bl from-violet-400 to-purple-300'
      href={'/curriculum'}>
      <div className='bg-slate-900 rounded-lg text-center text-white py-12 px-4'>
        <div className='text-3xl'>Curriculum</div>
        <div className=''>신입 부원 멘토링 과정</div>
      </div>
    </Link>
  )
  const PrevProjLink = () => (
    <Link className='m-4 p-1 rounded-lg bg-gradient-to-bl from-orange-400 to-amber-300'
      href={'/prevproj'}>
      <div className='bg-slate-900 rounded-lg text-center text-white py-12 px-4'>
        <div className='text-3xl'>Projects</div>
        <div className=''>선배들의 프로젝트</div>
      </div>
    </Link>
  )
  const AdmissionLink = () => (
    <Link className='m-4 p-1 rounded-lg bg-gradient-to-bl from-green-400 to-lime-300'
      href={'/admission'}>
      <div className='bg-slate-900 rounded-lg text-center text-white py-12 px-4'>
        <div className='text-3xl'>Admission</div>
        <div className=''>부원 모집 안내</div>
      </div>
    </Link>
  )

  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Beatus</title>
      </Head>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'tween', delay: 0.5, duration: 1 }}
            className="text-6xl font-extrabol"
          >
            <Image
              src={"/BeatusLogoMini.jpg"}
              alt="BeatusLogo"
              width={233}
              height={233}/>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 30,
              delay: 1,
              duration: 1,
            }}
            className="font-semibold mt-2 text-teal-900  text-center"
          >
            <div className='text-xl'>충남삼성고 IT 개발 동아리</div>
            <div className='mb-20'>SINCE 2017</div>

            <ChevronDownIcon className='w-16 h-16 stroke-slate-300 mx-auto'/>
            <div className='mt-2 text-slate-300'>아래로 스크롤</div>
          </motion.div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-white to-black h-80"></div>
      <div className="bg-black w-full p-4 text-white flex items-center flex-col">

        <div className="p-4 md:w-5/6 lg:w-2/3 xl:w-1/2">

          <motion.div
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 30 }}
            className="text-5xl font-bold text-left w-full mb-4 mt-12"
          >
            Beatus는
          </motion.div>
          <div className="my-4">
            <div className="text-white text-xl font-semibold p-4">
              <div className="text-2xl font-semibold">
                충남삼성고 유일 IT 개발을 목적으로 하는 동아리입니다.
              </div>
              <div
                ref={ref}
                className="mt-2 h-48 font-semibold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
              >
                {typeText.slice(0,typing) + (typing >= typeText.length ? '' : '_')}
              </div>
            </div>
          </div>


          <motion.div
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 30 }}
            className="text-5xl font-bold text-left w-full mb-4 mt-12"
          >
            둘러보기
          </motion.div>
          <div className="my-4">
            <div className="text-white text-xl font-semibold p-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-2 font-semibold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
              >
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  <MegathonLink/>
                  <CurriculumLink/>
                  <PrevProjLink/>
                  <AdmissionLink/>
                </div>
              </motion.div>
            </div>
          </div>
          

        </div>
      </div>
      

      <div className='py-10 bg-black text-lg text-slate-400 text-center'>
          Beatus 2023
      </div>
    </div>
  )
}
