import HeadBar from '@/components/HeadBar'
import useUserSubmits from '@/lib/useUserSubmits'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function EditSubmit() {
  const router = useRouter()
  const { year, clubId } = router.query
  const [submit, setSubmit] = useState([])
  const { userSubmits } = useUserSubmits()
  useEffect(() => {
    if (userSubmits) {
      userSubmits.submits.map((data: any) => {
        if (data.year === Number(year) && data.club === clubId) {
          setSubmit(data.answers)
        }
      })
    }
    console.log(submit)
  }, [clubId, userSubmits, year, submit])

  return (
    <div className="w-full min-h-screen bg-slate">
      <HeadBar />
      <div>
        {submit
          ? submit.map((data: any, key: number) => (
              <div key={key}>
                <div>{data.question}</div>
                <div>{data.answer}</div>
              </div>
            ))
          : ''}
      </div>
    </div>
  )
}
