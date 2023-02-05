import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Club() {
  const router = useRouter()

  return (
    <div className="w-full min-h-screen">
      <div className="bg-teal-900 w-full h-screen flex justify-center items-center">
        <div className="text-white flex justify-center items-center flex-col">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'tween', delay: 0.5, duration: 1 }}
            className="text-6xl font-extrabol"
          >
            Beatus
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
            className="text-xl font-semibold mt-2"
          >
            충남삼성고 IT 개발 동아리
          </motion.div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-teal-900 to-black h-80 -mt-40"></div>
      <div className=" bg-black w-full h-screen flex justify-center items-center flex-col p-4 text-white">
        <div className="h-3/5 p-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', stiffness: 30 }}
            className="text-4xl font-bold text-left w-full"
          >
            동아리 소개
          </motion.div>
          <div className="my-4">
            <div className="text-gray-400 text-2xl font-semibold">
              Beatus는 충남삼성고등학교 유일 IT 개발을 목적으로 하는
              동아리입니다.
            </div>
          </div>
        </div>
        <div className="text-white text-xl font-semibold h-3/5 p-4">
          지루한 계산기 만들기, 알고리즘 문제 풀기와 같은 이론 중심적인 활동
          보단 <br />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-semibold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400"
          >
            직접 웹페이지, 앱, 인공지능을 개발하며 코딩과 친해질 수 있는 활동을
            지향합니다.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
