import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/Log.png"
            alt="logo"
            width={200}
            height={50}
          />
        </Link>

        <p>Designed and developed by Vignesh RK</p>
      </div>
    </footer>
  )
}

export default Footer