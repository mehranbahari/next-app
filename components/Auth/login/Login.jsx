'use client'

import LayoutAuth from '@/containers/LayoutAuth/LayoutAuth'
// import { useRef } from 'react'
import { useForm } from 'react-hook-form'

export const metadata = {
  title: 'login',
  description: 'login discription',
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({})
  // const password = useRef({})

  // userName.current = watch('userName', '')
  // password.current = watch('password', '')
  // const onSubmit = async (data) => {
  //   alert(JSON.stringify(data))
  // }

  const loginSubmiter = () => {
    const formData = {
      userName: watch('userName'),
      password: watch('password'),
    }
    console.log(formData)
  }

  return (
    <LayoutAuth>
      <div className="flex flex-col items-center justify-center w-full p-10">
        <form
          onSubmit={handleSubmit(loginSubmiter)}
          className="border rounded-md flex flex-col justify-center gap-2 px-2 py-6 items-center w-[50%] "
        >
          <p>Login</p>
          <input
            className="border py-1 w-full rounded-md outline-none "
            type="text"
            placeholder="نام خود را وارد کنید"
            {...register('userName', { required: true })}
          />
          {errors.userName && (
            <p className="text-rose-500 text-sm">User name is required.</p>
          )}

          <input
            className="border py-1 w-full rounded-md outline-none"
            type="password"
            placeholder="رمز خود را وارد کنید"
            {...register('password', {
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
          />
          {errors.password && (
            <p className="text-rose-500 text-sm">{errors.password.message}</p>
          )}
          <button className="w-[25%] bg-green-400 rounded-md py-2 px-4 hover:bg-yellow-300 transition-all duration-500">
            ذخیره
          </button>
        </form>
      </div>
    </LayoutAuth>
  )
}

export default Login
