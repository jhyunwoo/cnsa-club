import { TrophyIcon } from "@heroicons/react/24/solid"
import { CalendarIcon, LinkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

/** 메가톤 명예의 전당 페이지 */
export default function Index(){

    /** 검은 바탕이 사라진 후에 History 컴포넌트를 화면에 그리게 하는 state */
    const [show, setShow] = useState(false);
    /** 페이지 입장 후 2초 후에 show state 업데이트 */
    useEffect(() => {
        setTimeout(() => (setShow(true)), 2000);
    },[])

    /** 대회 한 회차의 기간, 주제, 우승자, 수상자 링크 정보를 담는 컴포넌트 */
    const HistoryCard = ({num, sDate, eDate, topic, winner, link}) => (
        <div className="w-full flex justify-center">
            <div className="w-full mx-4 border-2 rounded-lg border-slate-200 py-8 px-10 m-4 bg-slate-900">
                <div className="text-4xl font-bold">제{num}회</div>
                <div className="flex items-center justify-center mt-2">
                    <CalendarIcon className="h-6 w-6"/>
                    <div className="ml-1 text-lg">{sDate} ~ {eDate}</div>
                </div>
                <div className="text-lg">주제: {topic}</div>
                <div className="">
                    { winner.map((data, key) => (
                        <div className="md:flex justify-center" key={key}>
                        <div className="flex items-center justify-center mt-4 w-fit">
                            {key === 0 ? 
                            <TrophyIcon className="w-10 h-10 stroke-amber-300 fill-amber-300"/>
                            : <div className="font-bold lg:text-2xl mx-1 text-amber-300">{key+1}위</div>
                            }
                            <div className="ml-2 font-bold text-xl">{data}</div>
                        </div>
                            {link[key] && link[key].length > 0 ?
                            <Link href={link[key]}
                                className="flex justify-center ml-2 mt-2 p-2 items-center md:w-1/2
                                font-bold text-white rounded-xl bg-blue-400">
                                <LinkIcon className="mr-2 h-8 w-8"/>
                                <div className="">수상작 링크</div>
                            </Link>
                            : 
                            <div className="flex justify-center ml-2 mt-2 p-2 items-center
                             font-bold text-white
                                rounded-xl bg-slate-400">
                                <LinkIcon className="mr-2 h-8 w-8"/>
                                <div className="">링크 없음</div>
                            </div>
                            }
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

    /** 모든 대회의 HistoryCard를 모아 차례대로 페이드 인 시키는 컴포넌트 */
    const History = ({list}) => (
        <div>
            {list.map((data, key) => (
                <motion.div
                    key={key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3*(key)}}>
                    <HistoryCard
                        num={data.num}
                        sDate={data.sDate}
                        eDate={data.eDate}
                        topic={data.topic}
                        winner={data.winner}
                        link={data.link}/>
                </motion.div>
            ))}
        </div>
    )

    return (
    <div className="w-full min-h-screen text-white
        bg-gradient-to-r from-purple-600 via-blue-400 to-purple-600">
        {!show ? <>
        <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col absolute min-h-screen w-full bg-black z-40"/>
        <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 0, y: -100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col absolute h-full w-full bg-transparent z-50">
            <div className="mx-auto mt-auto mb-2 font-bold text-3xl">MEGATHON</div>
            <div className="mx-auto mb-auto font-bold text-5xl">명예의 전당</div>
            </motion.div>
        </> : null}

        <div className="p-2 mx-auto w-full sm:w-5/6 md:w-3/4 lg:w-1/2 flex flex-col justify-center text-center">
            <div className="text-xl mt-20">
                <div className="mt-2 mb-2 font-bold text-3xl">MEGATHON</div>
                <div className="mb-4 font-bold text-5xl">명예의 전당</div>
                {show ?
                <>
                    <History list={
                        [
                            ,{
                                num: 1,
                                sDate: "2023.9.5",
                                eDate: "2023.9.12",
                                topic: "자기소개 웹 사이트 만들기",
                                winner: ["최지우(10기)", "임현성(10기)", "박민호(10기)"],
                                link: ["https://jiwoooochoiiiii.netlify.app/", "https://imhs2007introduction.netlify.app/", "https://minhocnsa.netlify.app/"]
                            }
                        ]
                    }/>
                </> : null}
            </div>
        </div>

    </div>
    )
}