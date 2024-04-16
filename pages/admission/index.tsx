import { LinkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import {ChevronDoubleLeftIcon} from "@heroicons/react/24/outline";

export default function Index(){
    return (
    <div className={'w-full bg-black text-white min-h-screen p-8 flex items-center justify-center'}>
        <div className={'flex flex-col items-center justify-center'}>
            <div className={'text-lg p-12 font-semibold'}>동아리 지원기간이 아닙니다.</div>
            <Link href={'/'} className={'font-semibold'}>홈으로 이동</Link>
        </div>
        {/*<Link href={'/'} className={'fixed top-4 left-4 flex space-x-2 items-center justify-center'}>*/}
        {/*    <ChevronDoubleLeftIcon className={'size-6'}/><div className={'hover:underline'}>Beatus 홈</div>*/}
        {/*</Link>*/}
        {/*<div className={'w-full max-w-2xl flex flex-col'}>*/}
        {/*    <div className={'text-2xl font-bold mx-auto p-8'}>*/}
        {/*        2024 Beatus 신입부원 모집*/}
        {/*    </div>*/}
        {/*    <div className={'p-2'}>*/}
        {/*        <div className={'text-lg font-semibold'}>모집기간</div>*/}
        {/*        <div>~2024년 3월 12일</div>*/}
        {/*    </div>*/}
        {/*    <div className={'p-2'}>*/}
        {/*        <div className={'text-lg font-semibold'}>모집인원</div>*/}
        {/*        <div>11기: 15~20명</div>*/}
        {/*        <div>10기: 15~20명</div>*/}
        {/*    </div>*/}
        {/*    <div className={'p-2'}>*/}
        {/*        <div className={'text-lg font-semibold'}>모집절차</div>*/}
        {/*        <div>1. 서류 제출</div>*/}
        {/*        <div>2. 면접</div>*/}
        {/*    </div>*/}
        {/*    <div className={'p-2'}>*/}
        {/*        <div className={'text-lg font-semibold'}>문의</div>*/}
        {/*        <div className={'flex space-x-2 items-center'}>*/}
        {/*            <div>Beatus 공식 인스트그램</div>*/}
        {/*            <Link*/}
        {/*                className={'p-1 rounded-full px-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500'}*/}
        {/*                href={'https://www.instagram.com/cnsa_beatus/'}>Instagram</Link>*/}

        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <Link*/}
        {/*        className={'text-center text-xl mt-8 font-bold w-full bg-gradient-to-r from-green-500 via-orange-500 to-red-500 p-2 rounded-full'}*/}
        {/*        href={'https://forms.gle/xDAa8RNHqz5EY9MBA'}>지원하러가기</Link>*/}
        {/*</div>*/}
    </div>
    )
}