import HeadBar from '@/components/HeadBar'
import useUserSubmits from '@/lib/useUserSubmits'
import changeClubName from '@/lib/changeClubName'
import Link from 'next/link'

export default function AppendList() {
  const { userSubmits } = useUserSubmits()

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <HeadBar />
      <div className="p-4">
        <div className="text-2xl font-bold">지원한 동아리</div>
        <div className="mt-2 text-sm">
          지원한 동아리를 누르면 지원서 수정이 가능합니다.
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {userSubmits
            ? userSubmits.submits?.map((data: any, key: number) => (
                <Link
                  href={`/edit/${data.club}?year=${data.year}`}
                  key={key}
                  className="bg-white p-4 rounded-lg hover:bg-slate-100 transition duration-200"
                >
                  <div className="text-xl font-semibold flex justify-between">
                    <div>{changeClubName(data.club)}</div>
                    <div className="text-slate-700">{data.year}</div>
                  </div>
                </Link>
              ))
            : ''}
        </div>
      </div>
    </div>
  )
}
