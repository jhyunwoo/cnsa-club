import { TrophyIcon } from "@heroicons/react/24/solid"
import { CalendarIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Index(){
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
    const AnnounceBanner = ({num, sDate, eDate, topic, prize, samples}:
        {num: number, sDate: string, topic:string, eDate: string, prize: string, samples: any[]}) => (
        <div className="mx-auto flex justify-center font-bold">
            <div className="border-2 rounded-lg border-slate-200 py-8 px-10 m-4 bg-slate-900">
                <div className="text-3xl">제{num}회 메가톤 공지</div>
                <div className="flex items-center justify-center mt-2">
                    <CalendarIcon className="h-6 w-6 stroke-red-400"/>
                    <div className="ml-1 text-lg text-red-400">{sDate} ~ {eDate}</div>
                </div>
                <div className="mt-10 text-2xl">주제: {topic}</div>
                {samples.length > 0 ?
                <>
                <div className="mt-4 text-slate-300">*샘플*</div>
                <div className="flex flex-col">
                {
                    samples.map((data, key) => (
                        <Link href={data[1]} key={key} className="text-blue-400">
                            #{key+1}.{data[0]}
                        </Link>
                    ))
                }
                </div>
                </> : null}
                <div className="flex items-center justify-center mt-10">
                    <TrophyIcon className="w-10 h-10 stroke-amber-300 fill-amber-300"/>
                    <div className="ml-2 text-2xl">상품: {prize}</div>
                </div>
            </div>
        </div>
    )
    const CriteriaBanner = ({criteria}:{criteria:string[][]}) => (
        <div className="mx-auto px-4 my-20 justify-center font-bold">
            <div className="text-2xl">
                평가 요소
            </div>
            <div className="mt-2 text-lg font-normal">
                2,3학년 심사위원이 아래 기준에 따라, 각 요소별로 1~5점을 매깁니다.
            </div>

            <div className="mt-4 px-2 py-2 border-2 rounded-lg">
                {criteria.map((data, key) => (
                <div className="flex font-normal my-2" key={key}>
                    <div className="w-24 text-lg text-yellow-400">
                        {data[0] + " |"}
                    </div>
                    <div className="w-48 sm:w-80 text-left">
                    {data[1].split(';').map((subdata, subkey) => (
                        <div key={subkey} className="my-1">
                            {subdata}
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

        </div>
    )

    const HelpBanner = ({helpsites}:{helpsites:string[][]}) => (
        <div className="mx-auto px-4 mb-20 justify-center font-bold">
            <div className="text-2xl">
                학습 자료
            </div>
            <div className="mt-2 text-lg font-normal">
                도움이 될 웹개발 튜토리얼 모음
            </div>

            <div className="mt-4 p-4 border-2 rounded-lg">
                {helpsites.map((data, key) => (
                <Link href={data[1]} className="flex my-2 text-blue-400" key={key}>
                    {key+1}. {data[0]}
                </Link>
                ))}
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

            <AnnounceBanner num={1} sDate={"2023.9.5"} eDate={"2023.9.12"}
                    topic={"자기 소개 웹사이트 만들기"} prize={"???"}
                    samples={[
                        ["오상혁 소개 사이트", "https://wkrlthrovpdlwl-git-main-blankinmyhead.vercel.app/"],
                        ["전현우 소개 사이트", "https://hyunwoo.moveto.kr/"],
                        ["이도엽 소개 사이트", "https://friendly-manatee-9a394e.netlify.app/#section4"]
                    ]}/>

            <CriteriaBanner criteria={[
                ["심미성", "결과물이 얼마나 예쁜가?;결과물이 얼마나 세련됐는가?;결과물이 얼마나 cool한가?"],
                ["기술성", "HTML 태그를 얼마나 적절하게 사용했는가?;CSS를 적절하게 사용했는가?;코드에 대해 이해하고 있는가?(평가자가 질문할 예정)"],
                ["콘텐츠", "결과물이 얼마나 유용한 정보를 담고 있는가?;콘텐츠 구성이 적절한가?"]
            ]}/>

            <HelpBanner helpsites={[
                ["ofcourse.kr", "https://ofcourse.kr/"],
                ["생활코딩", "https://opentutorials.org/course/3083"],
                ["MDN", "https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web"]
            ]}/>

            <Link
                href="/megathon/history"
                className="bg-gradient-to-bl from-blue-500 to-purple-500
                 text-white text-xl font-bold mx-auto p-4 rounded-lg">
                이전 대회 보기
            </Link>
        </div>
    </div>
    )
}