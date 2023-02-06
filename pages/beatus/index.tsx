import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import HtmlLogo from '../../public/html-logo.svg'
import CssLogo from '../../public/css-logo.svg'
import NodejsLogo from '../../public/nodejs-logo.svg'
import ReactLogo from '../../public/react-logo.svg'
import ExpoLogo from '../../public/expo-logo.svg'
import MySQLLogo from '../../public/mysql-logo.svg'
import PythonLogo from '../../public/python-logo.svg'
import JavascriptLogo from '../../public/javascript-logo.svg'
import TensorflowLogo from '../../public/tensorflow-logo.svg'
import KerasLogo from '../../public/keras-logo.svg'
import { useState } from 'react'

export default function Club() {
  const router = useRouter()
  const [front, setFront] = useState(false)
  const [back, setBack] = useState(false)
  const [app, setApp] = useState(false)
  const [ai, setAi] = useState(false)

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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="text-6xl font-extrabold"
          >
            활동 계획
          </motion.p>
        </div>
        <div className="flex flex-col my-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
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

        <div className="py-8 transition duration-200">
          {!front ? (
            <div className="rounded-xl bg-amber-400 text-white">
              <div className="text-4xl font-semibold p-4 ml-2">Front End</div>
              <div className=" p-4 flex flex-col">
                <div className="flex items-center my-2">
                  <HtmlLogo className="w-20 h-20 " />
                  <div className="text-2xl font-semibold text-center mx-auto">
                    HTML
                  </div>
                </div>
                <div className="flex items-center my-2">
                  <CssLogo className="w-20 h-20 " />
                  <div className="text-2xl font-semibold text-center mx-auto">
                    CSS
                  </div>
                </div>
                <div className="flex items-center my-2">
                  <JavascriptLogo className="w-16 ml-2 h-16 m-2 " />
                  <div className="text-2xl font-semibold text-center mx-auto">
                    JavaScript
                  </div>
                </div>

                <button className="ml-auto" onClick={() => setFront(true)}>
                  <PlusCircleIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-amber-400 text-white">
              <div className="text-4xl font-semibold p-4 ml-2">Front End</div>
              <div className=" p-4 flex flex-col">
                <div className="w-full h-72 font-semibold text-lg bg-white rounded-lg text-slate-800 p-4 flex justify-center items-center">
                  HTML, CSS, JavaScript 등의 기술을 활용하여 우리 눈에 보여지는
                  부분을 디자인하고 코드로 구현합니다.
                </div>

                <button className="ml-auto" onClick={() => setFront(false)}>
                  <XCircleIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="py-8 transition duration-200">
          {!back ? (
            <div className="rounded-xl bg-lime-400 text-white">
              <div className="text-4xl font-semibold p-4 ml-2">Back End</div>
              <div className=" p-4 flex flex-col">
                <div className="flex items-center my-2">
                  <JavascriptLogo className="w-16 ml-2 h-16 m-2 " />
                  <div className="text-2xl font-semibold text-center mx-auto">
                    JavaScript
                  </div>
                </div>
                <div className="flex items-center my-2">
                  <NodejsLogo className="w-20 h-20 " />
                  <div className="text-2xl font-semibold text-center mx-auto">
                    Node JS
                  </div>
                </div>
                <div className="flex items-center my-2">
                  <MySQLLogo className="w-20 h-20 " />
                  <div className="text-2xl font-semibold text-center mx-auto">
                    MySQL
                  </div>
                </div>

                <button className="ml-auto" onClick={() => setBack(true)}>
                  <PlusCircleIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-lime-400 text-white">
              <div className="text-4xl font-semibold p-4 ml-2">Back End</div>
              <div className=" p-4 flex flex-col">
                <div className="w-full h-72 font-semibold text-lg bg-white rounded-lg text-slate-800 p-4 flex justify-center items-center">
                  우리 눈에는 보이지 않지만 웹페이지를 구성하는데 중요한 서버를
                  담당합니다. 웹페이지 구성에 필요한 HTML, CSS등의 기초 지식을
                  배우고 MySQL을 사용하여 백엔드를 개발합니다.
                </div>

                <button className="ml-auto" onClick={() => setBack(false)}>
                  <XCircleIcon className="w-8 h-8" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col bg-slate-50 pt-12">
          <div className="text-4xl font-extrabold">앱 개발팀</div>

          <div className="py-8 transition duration-200">
            {!app ? (
              <div className="rounded-xl bg-blue-400 text-white">
                <div className="text-4xl font-semibold p-4 ml-2">
                  Application
                </div>
                <div className=" p-4 flex flex-col">
                  <div className="flex items-center my-2">
                    <JavascriptLogo className="w-16 ml-2 h-16 m-2 " />
                    <div className="text-2xl font-semibold text-center mx-auto">
                      JavaScript
                    </div>
                  </div>
                  <div className="flex items-center my-2">
                    <ReactLogo className="w-20 h-20 hover:animate-spin" />
                    <div className="text-2xl font-semibold text-center mx-auto">
                      React Native
                    </div>
                  </div>
                  <div className="flex items-center my-2">
                    <ExpoLogo className="w-20 h-20 " />
                    <div className="text-2xl font-semibold text-center mx-auto">
                      Expo
                    </div>
                  </div>

                  <button className="ml-auto" onClick={() => setApp(true)}>
                    <PlusCircleIcon className="w-8 h-8" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl bg-blue-400 text-white">
                <div className="text-4xl font-semibold p-4 ml-2">
                  Application
                </div>
                <div className=" p-4 flex flex-col">
                  <div className="w-full h-72 font-semibold text-lg bg-white rounded-lg text-slate-800 p-4 flex justify-center items-center">
                    앱 개발팀은 앱 구상 및 개발을 담당하게 되며 iOS와 안드로이드
                    운영체제에서 실행 가능한 앱을 개발합니다. Javascript,
                    ReactJS, React Native를 활용하여 크로스 플랫폼 앱을
                    개발합니다.
                  </div>

                  <button className="ml-auto" onClick={() => setApp(false)}>
                    <XCircleIcon className="w-8 h-8" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col bg-slate-50 pt-12">
          <div className="text-4xl font-extrabold">인공지능 개발팀</div>

          <div className="py-8 transition duration-200">
            {!ai ? (
              <div className="rounded-xl bg-red-500 text-white">
                <div className="text-4xl font-semibold p-4 ml-2">
                  Artificial Intelligence
                </div>
                <div className=" p-4 flex flex-col">
                  <div className="flex items-center my-2">
                    <PythonLogo className="w-16 ml-2 h-16 m-2 " />
                    <div className="text-2xl font-semibold text-center mx-auto">
                      Python
                    </div>
                  </div>
                  <div className="flex items-center my-2">
                    <TensorflowLogo className="w-20 h-20 hover:animate-spin" />
                    <div className="text-2xl font-semibold text-center mx-auto">
                      Tensorflow
                    </div>
                  </div>
                  <div className="flex items-center my-2">
                    <KerasLogo className="w-20 h-20 " />
                    <div className="text-2xl font-semibold text-center mx-auto">
                      Keras
                    </div>
                  </div>

                  <button className="ml-auto" onClick={() => setAi(true)}>
                    <PlusCircleIcon className="w-8 h-8" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl bg-red-500 text-white">
                <div className="text-4xl font-semibold p-4 ml-2">
                  Artificial Intelligence
                </div>
                <div className=" p-4 flex flex-col">
                  <div className="w-full h-72 font-semibold text-lg bg-white rounded-lg text-slate-800 p-4 flex justify-center items-center">
                    인공지능 개발팀은 인공지능 학습 및 인공지능 개발을 합니다.
                    인공지능의 기초적인 개념을 학습하고 다양한 분야를
                    탐색합니다. Python과 Tensorflow, Keras를 활용하여 이미지
                    객체 인식, 자연어 처리 등의 활동을 진행합니다.
                  </div>

                  <button className="ml-auto" onClick={() => setAi(false)}>
                    <XCircleIcon className="w-8 h-8" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-slate-50 flex justify-center items-center">
        <div className="bg-white p-4 w-full mx-4 rounded-xl flex flex-col">
          <div className="text-3xl font-bold mx-auto my-4">Beatus 동아리</div>
          <button className="bg-blue-600 hover:bg-blue-700 transition duration-150 text-white p-2 px-6 rounded-full mx-auto mb-4">
            지원하기
          </button>
        </div>
      </div>
    </div>
  )
}
