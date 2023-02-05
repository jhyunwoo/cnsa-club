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
      <div className="w-full bg-gradient-to-b from-teal-900 via-teal-900 to-black h-80 -mt-40"></div>
      <div className=" bg-black w-full h-screen flex justify-center items-center flex-col p-4 text-white">
        <div className="h-4/5 p-4  flex flex-col justify-center">
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
        <div className="text-white text-xl font-semibold h-4/5 p-4  flex flex-col justify-center">
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
      <div className="w-full min-h-screen text-white bg-black flex flex-col p-4 items-center">
        <div className="overflow-x-scroll p-2 scrollbar-hide flex">
          <motion.p
            initial={{ x: 100, opacity: 0, y: 0 }}
            whileInView={{ x: 0, opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-6xl font-extrabold"
          >
            활동 계획
          </motion.p>
        </div>
        <div className="flex flex-col my-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="my-4"
          >
            <div className="text-4xl font-bold">3월</div>
            <div className="text-2xl font-semibold text-slate-400 my-2">
              동아리 편성 및 자기소개
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="my-4"
          >
            <div className="text-4xl font-bold">4월</div>
            <div className="text-2xl font-semibold text-slate-400 my-2">
              부서 편성 및 신입생 멘토링 진행
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="my-4"
          >
            <div className="text-4xl font-bold">5월~7월</div>
            <div className="text-2xl font-semibold text-slate-400 my-2">
              각 부서별 멘토링 진행 & IT 관련 주제 토론
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="my-4"
          >
            <div className="text-4xl font-bold">8월~11월</div>
            <div className="text-2xl font-semibold text-slate-400 my-2">
              부서별 프로젝트 구상 및 개발 진행
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="my-4"
          >
            <div className="text-4xl font-bold">12월</div>
            <div className="text-2xl font-semibold text-slate-400 my-2">
              프로젝트 발표
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-black to-slate-50 h-40"></div>
      <div className="w-full p-4 py-12 bg-slate-50">
        <div className="text-6xl font-bold">부서 소개</div>
      </div>
      <div className="w-full min-h-screen p-4 flex flex-col bg-slate-50 pt-12">
        <div className="text-4xl font-extrabold">웹 개발팀</div>
        <div className="py-8">
          <div className="p-4 rounded-xl shadow-sm bg-white">
            <div className="text-xl font-semibold mb-4">프론트엔드</div>
            <div>
              HTML, CSS, React 등의 기술을 활용하여 우리 눈에 보여지는 부분을
              디자인하고 코드로 구현합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
