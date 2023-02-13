import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SubmitAlert from '@/components/SubmitAlert'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import useUserSubmits from '@/lib/useUserSubmits'
import Submitted from '@/components/Submitted'

type FormValues = {
  name: string
  studentId: number
  email: string
  question1: string
}

export default function Submit() {
  const { data: session } = useSession()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const [submitAlert, setSubmitAlert] = useState('')
  const [submited, setSubmited] = useState(false)
  const { userSubmits } = useUserSubmits()
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await axios.post('/api/submits', {
      data: {
        email: data.email,
        studentId: data.studentId,
        answers: [
          {
            question: '1. 비터스에 지원하게 된 동기가 무엇입니까?',
            answer: data.question1,
          },
        ],
        year: 2023,
        club: 'beatus',
      },
    })

    if (result.status === 200) {
      setSubmitAlert('Create')
    } else if (result.status === 201) {
      setSubmitAlert('Update')
    }
  }

  function redirect() {
    if (!session) {
      router.push('/beatus/login')
    }
  }
  function checkSubmited() {
    let data = new Date()
    let year = data.getFullYear()
    if (userSubmits) {
      userSubmits.submits?.map((data) => {
        if (data.club === 'beatus' && data.year === year) {
          setSubmited(true)
        }
      })
    }
  }

  useEffect(() => {
    redirect()
  }, [session])

  useEffect(() => {
    checkSubmited()
  }, [userSubmits])

  if (session) {
    return (
      <div className="w-full min-h-screen bg-slate-50">
        {submited ? <Submitted /> : ''}
        {submitAlert === 'Create' ? <SubmitAlert title="접수 완료" /> : ''}
        {submitAlert === 'Update' ? (
          <SubmitAlert title="지원서 수정 완료" />
        ) : (
          ''
        )}
        <div className="p-4 flex flex-col">
          <div className="mx-auto text-2xl font-bold m-4">
            2023 Beatus 신입부원 모집
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <div className="ml-2 font-semibold text-lg">학번 (6자리)</div>

              <input
                {...register('studentId', {
                  required: { value: true, message: '학번을 입력하세요' },
                  min: { value: 210000, message: '올바른 학번을 입력하세요' },
                })}
                placeholder="학번 (6자리)"
                className="p-2 rounded-lg my-2 w-48"
              />

              <div className="bg-emerald-500 text-white p-2 rounded-lg my-2 font-semibold">
                주의! 지원서 제출 후 지원서 내용을 가지고 올 수 없습니다.
                지원서를 수정하기 위해선 처음부터 새로 작성해야하니 지원서
                내용을 다른 곳에 저장해두는 것을 추천합니다.
              </div>
              <div className="font-semibold text-md ml-1">
                1. 비터스에 지원하게 된 동기가 무엇입니까?
              </div>
              <textarea
                {...register('question1', {
                  required: { value: true, message: '질문 1 미작성' },
                })}
                placeholder="300자 내외"
                className="p-2 rounded-lg my-2 h-48"
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <p className="bg-red-400 text-white p-2 rounded-full text-center my-1 text-sm">
                    {message}
                  </p>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="studentId"
                render={({ message }) => (
                  <p className="bg-red-400 text-white p-2 rounded-full text-center my-1 text-sm">
                    {message}
                  </p>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className="bg-red-400 text-white p-2 rounded-full text-center my-1 text-sm">
                    {message}
                  </p>
                )}
              />
              <ErrorMessage
                errors={errors}
                name="question1"
                render={({ message }) => (
                  <p className="bg-red-400 text-white p-2 rounded-full text-center my-1 text-sm">
                    {message}
                  </p>
                )}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded=full hover:bg-blue-600 m-2 rounded-full mx-auto px-12 transition duration-200"
              >
                제출
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
