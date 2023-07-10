import { motion } from 'framer-motion'
import {
  ArrowRightIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import DearuLogo from '../../public/dearu.ico'
import BeatusLogo from '../../public/BeatusLogoMini.jpg'
import CscLogo from '../../public/dearyou/csc.png'
import Poster0 from '../../public/dearyou/0.png'
import Poster1 from '../../public/dearyou/1.png'
import Poster2 from '../../public/dearyou/2.png'
import Poster3 from '../../public/dearyou/3.png'
import Poster4 from '../../public/dearyou/4.png'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import va from '@vercel/analytics'

interface Info {
  title: string
  desc: Array<string>
}
type InfoProps = {
  info: Info
}

export default function Dearyou() {
  const scrollRef = useRef<null | HTMLDivElement>(null)

  const currentDate = new Date()
  const openDate = new Date(2023, 6, 11, 16, 0)

  function Description({ info }: InfoProps) {
    const { title, desc } = info
    return (
      <div>
        <div className="flex pt-5 px-5 items-center mx-auto">
          <ChevronRightIcon className="w-6 h-6 stroke-cyan-800" />
          <div className="text-cyan-800 font-bold text-lg">{title}</div>
        </div>
        <div className="text-slate-800 text-left pt-2 px-8 pb-8">
          {desc.map((data, key) => (
            <div key={key}>{data}</div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="">
      <div className="md:w-2/5 md:mx-auto text-center mt-32">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', delay: 0.5, duration: 1 }}
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
          transition={{ type: 'tween', delay: 1, duration: 1 }}
          className="mx-auto p-2"
        >
          <div className="mx-auto mt-5">
            <span className="font-bold">드려유</span>는 우리
            <span className="font-bold text-blue-800"> 충남삼성고</span>에서
          </div>
          <div className="mx-auto">교과서, 풀지 않은 문제집, 학용품 등을</div>
          <div className="mx-auto mb-5">
            쉽게 나누고 교환할 수 있는 온라인 플랫폼입니다!
          </div>

          <div className="flex">
            {currentDate > openDate ? (
              <Link
                className="mx-auto rounded-lg border-2 p-4 font-bold
              border-amber-400 bg-amber-400 hover:bg-amber-500 transition duration-200 text-white "
                href={'https://dearyou.moveto.kr'}
                onClick={() => va.track('Dearyou')}
              >
                드려유 접속
              </Link>
            ) : (
              <div
                className="mx-auto rounded-lg border-2 p-4 font-bold
                    border-slate-300 bg-slate-200 text-slate-500"
              >
                드려유 접속
              </div>
            )}
          </div>
          <div className="mx-auto text-slate-500 mt-2 mb-5">
            공개 시간: 7월 11일(화) 16:00
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', delay: 1.5, duration: 1 }}
          className="mx-auto p-2"
        >
          <button
            className="mx-auto mt-10 mb-80 font-bold"
            onClick={() =>
              scrollRef?.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            ▼ 소개 영상 & 포스터 보러 가기
          </button>
        </motion.div>

        <div ref={scrollRef} className="">
          <div className="flex">
            <iframe
              width={1000}
              height={200}
              src="https://www.youtube.com/embed/tFniFh78k1g"
              title="YouTube video player"
              allow="fullscreen"
              className="mx-auto"
            ></iframe>
          </div>
          <Description
            info={{ title: '소개 영상', desc: ['드려유 홍보 영상입니다.'] }}
          />

          <Image src={Poster0} alt="Poster0" className="mx-auto w-full p-2" />
          <Description
            info={{
              title: '드려유가 뭐유?',
              desc: [
                '드려유는 Beatus 동아리에서 제작한 온라인 나눔 플랫폼입니다.',
                '드려유 웹 사이트(7월 11일 오픈)에서',
                '나누고 싶은 물건들을 등록하고,',
                '우리 학교 학생들이 올린 물건을 온라인으로 조회하며',
                '채팅을 통해 나눔(혹은 교환)을 성사시킬 수 있도록 하는 기능을 제공합니다.',
              ],
            }}
          />

          <Image src={Poster1} alt="Poster1" className="mx-auto w-full p-2" />
          <Description
            info={{
              title: '기능 소개 1',
              desc: [
                '메인 페이지에선 우리 학교에서 이루어지는 물건 나눔을 한눈에 확인할 수 있습니다.',
                '또, 원하는 물건이 올라와 있는지 검색할 수 있습니다.',
              ],
            }}
          />
          <Image src={Poster2} alt="Poster2" className="mx-auto w-full p-2" />
          <Description
            info={{
              title: '기능 소개 2',
              desc: [
                '물건 상세정보 페이지에서',
                '물건을 나눔받거나 교환하기 위한 채팅 창으로 넘어갈 수 있습니다.',
              ],
            }}
          />
          <Image src={Poster3} alt="Poster3" className="mx-auto w-full p-2" />
          <Description
            info={{
              title: '기능 소개 3',
              desc: [
                '나눔할 물건을 직접 등록할 수 있습니다.',
                '등록된 물건은 관리자의 승인을 받으면 정보가 메인 페이지에서 보이게 되며,',
                '프로필 페이지에서 내가 등록한 물건과 위시리스트를 볼 수 있습니다.',
              ],
            }}
          />
          <Image src={Poster4} alt="Poster4" className="mx-auto w-full p-2" />
        </div>

        <div className="mt-10 text-2xl">MADE BY</div>

        <div className="flex px-10 my-5 items-center text-cyan-900">
          <div className="mx-auto">
            <div className="font-bold">
              <div>IT 개발 동아리</div>
              <div>Beatus</div>
            </div>
            <Image
              src={BeatusLogo}
              alt="beatusLogo"
              className="w-24 h-24 my-2 mx-auto"
            />
          </div>
          <XMarkIcon className="w-6 h-8 mx-2 mt-10" />
          <div className="mx-auto">
            <div className="font-bold">
              <div>충남삼성고</div>
              <div>10대 자율위원단</div>
            </div>
            <Image
              src={CscLogo}
              alt="CscLogo"
              className="w-24 h-24 my-2 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
