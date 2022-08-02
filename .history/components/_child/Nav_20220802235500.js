
import Link from 'next/link';


export default function Nav() {


    return (

<nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
        <div className="block sm:hidden">
            <Link><a
                href="#"
                className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
                @click="open = !open"{">"}
                Topics <i :className="open ? 'fa-chevron-down': 'fa-chevron-up'" class="fas ml-2"></i></a></Link></div>
        <div :className="open ? 'block': 'hidden'" className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Technology</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Automotive</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Finance</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Politics</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a>
                <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a>
            </div>
        </div>
    </nav>


    <div className="container mx-auto flex flex-wrap py-6">

        )}
