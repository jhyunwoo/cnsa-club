import { useForm, SubmitHandler } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import axios from 'axios'

type FormValues = {
  name: string
  studentId: number
  email: string
  question1: string
}

export default function Submit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await axios.post('/api/submits', {
      data: {
        email: data.email,
        name: data.name,
        studentId: data.studentId,
        answers: {
          q1: data.question1,
        },
        year: 2023,
      },
    })
    console.log(result)
  }

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="p-4 flex flex-col">
        <div className="mx-auto text-2xl font-bold m-4">
          2023 Beatus 동아리 지원
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
              {...register('name', {
                required: { value: true, message: '이름을 입력하세요.' },
                minLength: { value: 2, message: '올바른 이름을 입력하세요.' },
                maxLength: { value: 4, message: '올바른 이름을 입력하세요.' },
              })}
              placeholder="이름"
            />
            <input
              {...register('studentId', {
                required: { value: true, message: '학번을 입력하세요.' },
                min: { value: 210000, message: '올바른 학번을 입력하세요.' },
              })}
              placeholder="학번 (6자리)"
            />
            <input
              type={'email'}
              {...register('email', { required: true })}
              placeholder="이메일"
            />
            <div>1. 비터스에 지원하게 된 동기가 무엇입니까?</div>
            <textarea
              {...register('question1', { required: true })}
              placeholder="300자 내외"
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <p>{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="studentId"
              render={({ message }) => <p>{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p>{message}</p>}
            />
            <ErrorMessage
              errors={errors}
              name="question1"
              render={({ message }) => <p>{message}</p>}
            />
            <button type="submit">제출</button>
          </form>
        </div>
      </div>
    </div>
  )
}
