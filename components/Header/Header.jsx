import Image from 'next/image'
import image01 from '@/public/images/download.jpg'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-slate-500 ">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            alt="img"
            width={100}
            height={100}
            src={image01}
            sizes="384"
          ></Image>
        </div>
        <div className="">
          <Link
            href={'/'}
            className="border rounded-md bg-green-400 px-4 py-2 text-white mx-4"
          >
            about
          </Link>
          <Link
            href={'/'}
            className="border rounded-md bg-green-400 px-4 py-2 text-white mx-4"
          >
            home
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
