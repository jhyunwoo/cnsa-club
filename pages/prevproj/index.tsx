import { LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from 'public/github-logo.svg'
export default function Index(){

    const HistoryCard = ({name, year, members, link, github, desc}:
        {name: string, year: number, members: string, link: string, github: string, desc: string}) => (
        <div className='p-4 mx-20 my-4 border-2 rounded-lg'>
            <div className='font-bold text-2xl my-2'>
                {name}
            </div>
            <div className='texl-xl mb-2'>
                {year}년, 인원: {members}
            </div>
            <div className='mb-2'>
                {desc}
            </div>
            <div className='flex mb-2 justify-center items-center'>
                {
                    link.length > 0 ?
                    <Link href={link} className='p-2 bg-blue-400 rounded-lg m-2'>
                        <LinkIcon className='h-6 w-6 mx-2'/>
                    </Link> : "링크 없음"
                }
                {
                    github.length > 0 ?
                    <Link href={github} className='p-2 bg-slate-300 rounded-lg m-2'>
                        <GithubLogo className='h-6 w-6 mx-2'/>
                    </Link> : "GitHub 비공개"
                }
            </div>

        </div>
    )

    return (
    <div className="w-full min-h-screen text-white bg-black">
        <div className="p-2 w-full md:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto flex flex-col justify-center text-center">
            <div className="font-bold text-3xl my-10">
                Beatus의 과거 프로젝트
            </div>
            <HistoryCard name='드려유' year={2023} members='8기' 
                link='/prevproj/project-dearyou' github=''
                desc='온라인 교내 중고 거래 플랫폼'/>
        </div>
    </div>
    )
}