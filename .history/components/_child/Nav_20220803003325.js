import { allArticles } from '../../.contentlayer/generated'
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { SingleArticle} from '../SingleArticle'
import { select } from '../../utils/select';



export default function Nav({
    category,
    slug,
  }) {
    return (

        <><nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
    
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <Link href={`/article/${slug}`}><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{category}</a></Link>
                    <Link href={`/article/${slug}`}><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">{description}</a></Link>
                    <Link href={`/article/${slug}`}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Fashion</a></Link>
                    <Link href={`/article/${slug}`}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a></Link>
                    <Link href={`/article/${slug}`}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a></Link>
                    <Link href={`/article/${slug}`}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a></Link>
                </div> 
    </nav>
    </>
        )}


