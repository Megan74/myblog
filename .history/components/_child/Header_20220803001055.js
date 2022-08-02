import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <><nav className='w-full py-4 bg-blue-800 shadow'>
          <div className='w-full container mx-auto flex flex-wrap items-center justify-between'>

              <nav>
                  <ul className='flex items-center justify-between font-bold text-sm text-white uppercase no-underline'>
                  <Link href={"/"}><li><a className='hover:text-gray-200 hover:underline px-4 social cursor-pointer'>Shop</a></li></Link>
                  <Link href={"https://megan-portfolio.netlify.app/"}><li><a className='hover:text-gray-200 hover:underline px-4 social cursor-pointer'>About Me</a></li></Link>
                  </ul>
              </nav>

              
    <div className="flex gap-6 items-center text-lg no-underline text-white pr-8">
        <Link href={'https://github.com/Megan74'}>
        <a className= "social cursor-pointer block bg-60 transform: scale(1)" ><ImGithub /></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a className= "social cursor-pointer"><ImTwitter /></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a className= "social cursor-pointer"><ImLinkedin /></a>
    </Link>
</div>
  
.social{
  display: block;
  background-size: 60px;
  transform: scale(1);
  width: 60px;
  height: 60px;
 }

.social:hover{
  transform: scale(1.2); 
  transition: all 0.3s ease-in-out;
}

          </div>

      </nav><header className='w-full container mx-auto'>
              <div className='flex flex-col items-center py-12'>
                  <a className='font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl' href='#'>
                      Welcome to my World! </a>
              </div>
          </header></>
)
}