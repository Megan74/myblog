import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link'


export default function footer() {

  const bg = {
    backgroundImage : "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
              <Link href={'https://github.com/Megan74'}>
        <a className= "social" ><ImGithub color="888888"/></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a className= "social"><ImTwitter color="#888888"/></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a className= "social"><ImLinkedin color="#888888"/></a>
    </Link>
              </div>

          </div>
      </div>

    </footer>
  )
}
