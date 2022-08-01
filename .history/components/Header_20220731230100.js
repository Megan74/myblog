import Link from "next/link";
import { ImGithub, ImTwitter, ImLinkedin, BsFillFilePersonFill } from "react-icons/im";


export default function Header() {
  return (
    <nav>
      <h1>Welcome to my Universe!</h1>
     
    <div className="container mx-auto flex justify-center py-12">
      <div className="py-5">
         <div className="flex gap-6 justify-center">
         <Link href={'https://github.com/Megan74'}>
        <a className= "social"><ImGithub color="888888"/></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a className= "social"><ImTwitter color="#888888"/></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a className= "social"><ImLinkedin color="#888888"/></a>
    </Link>
    <Link href={'https://megan-portfolio.netlify.app/'}>
    <a className= "social"><BsFillFilePersonFill color="#888888"/></a>
    </Link>
     
      </div>

    </div>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        
        nav a{
          margin-right: 1rem;
          text-decoration: none;
          background-size: 60px;
          transform: scale(1);
          width: 60px;
          height: 60px;
         }
        
         nav a:hover{
          transform: scale(1.2); 
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </nav>
  );
}
