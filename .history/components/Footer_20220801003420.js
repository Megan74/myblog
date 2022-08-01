import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link'


export default function footer() {



  return (
    
      <><div className="container mx-auto flex justify-center py-12">
          <div className="py-5">
              <div className="flex gap-6 justify-center">
                  <Link href={'https://github.com/Megan74'}>
                      <a className="social"><ImGithub color="888888" /></a>
                  </Link>
                  <Link href={'https://twitter.com/techiemeggy'}>
                      <a className="social"><ImTwitter color="#888888" /></a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/megan-mat/'}>
               <a className= "social"><ImLinkedin color="#888888"/></a>
              </Link>
                  <Link href={'https://megan-portfolio.netlify.app/'}>
                      <a className="social" color="#888888"> My Portfolio</a>
                  </Link>
              </div>

          </div>
      </footer><style jsx>{`
      footer {
        background: #444;
        width: auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1rem;
      }
      
      footer a{
        margin-right: 1rem;
        text-decoration: none;
        background-size: 60px;
       }
      
      
      }
    `}</style></>
  )
}
