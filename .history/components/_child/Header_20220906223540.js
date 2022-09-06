import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <><nav className=' lg:h-48 md:h-36 w-full="true"  m-auto  py-4 bg-blue-800 shadow'>
          <div className='w-full container mx-auto flex flex-wrap items-center justify-between'>

              <nav>
                  <ul className='flex items-center justify-between font-bold text-sm text-white uppercase no-underline'>
                  </ul>
                  <Link href={"mailto:matandamegan@gmail.com"}><a className='hover:text-gray-200 hover:underline cursor-pointer flex gap-6  text-white pr-8'>Projects to build? Contact me! 😀</a></Link>
              </nav>

              
    <div className="flex gap-6 items-center text-lg no-underline text-white pr-8">
    <ul className='flex items-center justify-between font-bold text-sm text-white uppercase no-underline'>
                  <Link href={"https://megan-portfolio.netlify.app/"}><li><a className='hover:text-gray-200 hover:underline px-4 cursor-pointer'>About Me</a></li></Link>
                  </ul>
        <Link href={'https://github.com/Megan74'}>
        <a className= "social cursor-pointer" ><ImGithub /></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a className= "social cursor-pointer"><ImTwitter /></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a className= "social cursor-pointer"><ImLinkedin /></a>
    </Link>
</div>
  
  

          </div>

      </nav><header className='w-full container mx-auto'>
              <div className='flex flex-col items-center py-12'>
                  <a className='font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl' href={'/'}>
                      Welcome to my World! </a>
              </div>
          </header></>
)
}