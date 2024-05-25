import Image from 'next/image'
import loginImg from '@/public/images/main.png'

const LayoutAuth = ({ children }) => {
  return (
    <div className="flex flex-col  w-full my-20">
      <div className="flex flex-col items-center">
        <p className=" text-xl font-bold">NEXT APP</p>
        <div className="">
          <Image alt="" width={350} height={350} sizes="384" src={loginImg} />
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  )
}

export default LayoutAuth
