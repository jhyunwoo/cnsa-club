import { TrophyIcon } from "@heroicons/react/24/solid"
import { CalendarIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

export default function Index(){

    const HistoryCard = ({num, sDate, eDate, topic, winner}:
        {num: number, sDate: string, topic:string, eDate: string, winner: string}) => (
        <div className="mx-auto flex justify-center">
            <div className="border-2 rounded-lg border-slate-200 py-8 px-10 m-4 bg-slate-900">
                <div className="text-3xl font-bold">제{num}회</div>
                <div className="flex items-center justify-center mt-2">
                    <CalendarIcon className="h-6 w-6"/>
                    <div className="ml-1 text-lg">{sDate} ~ {eDate}</div>
                </div>
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
        <div className="p-2 mx-auto w-full md:w-5/6 lg:w-2/3 xl:w-1/2 flex flex-col justify-center text-center">
            <div className="text-xl mt-20">
                <div className="text-3xl font-bold mb-10">
                    메가톤 - 이전 대회
                </div>
                이전 대회가 없습니다.
            </div>
        </div>
    </div>
    )
}
                /*<HistoryCard num={0} sDate={"2023.9.5"} eDate={"2023.9.12"}
                    topic={"비즈쿨 예약 웹사이트 만들기"} winner={"전현우(8기)"}/>*/