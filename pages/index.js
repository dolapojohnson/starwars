import Link from 'next/link';
import  { logo } from '../public/starwars.png'
import Image from 'next/image'


const Home = () => {
  return (
    <div className="container text-white text-center pt-6 bg-black container h-[100vh] md:container">
      <header className='pl-8'>
        <Image 
          src="/starwars.png"
          alt="Starwars Logo" 
          quality={100} 
          placeholder="empty" 
          width={150}
          height={150}
        />
      </header>
      <h1 className="text-2xl mt-10 pt-20 text-white mb-4 font-black">Catch the latest on the epic galaxy series</h1>

        <button className="p-4 explore-btn text-xl font-bold">
          <Link href="/movies">
            Explore our collection
          </Link>
        </button>
        
        <div className="text-sm">
          {/* Last Rendered: {new Date().toLocaleTimeString()} */}
        </div>
    </div>
  );
}

export default Home
