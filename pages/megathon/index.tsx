import { TrophyIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

export default function Index(){
6
    const MegathonBanner = () => (
        <div className="w-full h-72 md:h-96 bg-gradient-to-bl from-blue-700 to-purple-400">
            <div className="flex h-full justify-center items-center text-white font-bold">
                <div className="text-6xl md:text-9xl">
                    <motion.div
                        initial={{ x:30, opacity: 0 }}
                        whileInView={{ x:0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className=""
                    >
                        <div className="flex items-center">
                            <span className="text-slate-300 text-opacity-50 text-5xl md:text-8xl mr-2 md:mr-4">{"{"}</span>MEGA
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x:30, opacity: 0 }}
                        whileInView={{ x:0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className=""
                    >
                    <div className="flex items-center">
                        THON<span className="text-slate-300 text-opacity-50 text-5xl md:text-8xl ml-2 md:ml-4">{"}"}</span>
                    </div>
                    </motion.div>
                </div>


                <div className="md:text-4xl ml-4 md:ml-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className=""
                    >
                        <div className="md:text-2xl mb-2 md:mb-6">Beatus 메가톤</div>
                        <div className="md:text-3xl text-blue-200">
                            <div>Challenge.</div>
                            <div>Build.</div>
                            <div>Learn.</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )

    const HistoryCard = ({num, sDate, eDate, topic, winner}:
        {num: number, sDate: string, topic:string, eDate: string, winner: string}) => (
        <div className="mx-auto flex justify-center">
            <div className="border-2 rounded-lg border-slate-200 py-8 px-10 m-4 bg-slate-900">
                <div className="text-3xl font-bold">제{num}회</div>
                <div className="text-lg">{sDate} ~ {eDate}</div>
                <div className="text-lg">주제: {topic}</div>
                <div className="flex items-center justify-center mt-4">
                    <TrophyIcon className="w-10 h-10 stroke-amber-300 fill-amber-300"/>
                    <div className="ml-2 font-bold text-2xl">{winner}</div>
                </div>
            </div>
        </div>
    )

    return (
    <div className="w-full min-h-screen bg-black text-white pb-10">
        <MegathonBanner/>
        <div className="p-2 mx-auto w-full md:w-5/6 lg:w-2/3 xl:w-1/2 flex flex-col justify-center text-center">
            <div className="text-xl my-10 px-4">
                메가톤은 부원들의 실전 코딩 능력 향상과 친목 도모를 위해, Beatus에서 정기적으로 진행하는 해커톤(Hackathon)입니다.
            </div>

            <div className="text-xl mt-20">
                <div className="text-3xl font-bold">
                    자료
                </div>
                <div>
                    asdf
                </div>
            </div>

            <div className="text-xl mt-20">
                <div className="text-3xl font-bold">
                    History
                </div>
                <HistoryCard num={0} sDate={"2023.9.5"} eDate={"2023.9.12"}
                    topic={"자기소개 웹사이트 만들기"} winner={"전현우(8기)"}/>
            </div>
        </div>
    </div>
    )
}