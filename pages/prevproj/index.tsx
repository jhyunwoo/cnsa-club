import Link from 'next/link'
export default function Index(){
    return (
    <div className="w-full min-h-screen">
        <div className="p-2 w-full md:w-5/6 lg:w-2/3 xl:w-1/2 flex flex-col justify-center text-center">
            <div className="font-bold text-3xl my-10">
                선배들의 프로젝트
            </div>

            <Link href={'/prevproj/project-dearyou'}>
                드려유
            </Link>
        </div>
    </div>
    )
}