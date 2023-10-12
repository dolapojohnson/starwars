import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
      const response = await fetch("https://swapi.dev/api/films")
      const data = await response.json()
      // console.log(data.results[0].title)

      return {
            props: {
                  films: data
            }
      }
}

const MovieList = ({ films }) => {
      return(
            <div className="container text-white text-center pt-20 bg-black container h-[100vh] md:container">
                  <Image
                        src="/starwars.png"
                        alt="Starwars Image"
                        quality={100} 
                        placeholder="empty" 
                        width={300}
                        height={300}
                        className="center-img"
                  />

                  <div className="dropdown mt-6">
                        <button className="dropbtn font-bold">View StarWars Episodes </button>
                        <div className="dropdown-content mt-2 divide-y divide-blue-200 font-medium">
                              {films.results.map((movie, index) => <Link
                               href={`movies/${index + 1}`} key={movie.episode_id} passHref>{movie.title}</Link>)
                              }
                        </div>
                  </div>
            </div>
      );
}

export default  MovieList;