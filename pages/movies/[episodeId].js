import Table from "@/components/Table"

export async function getStaticProps(context) {
      const { params } = context
      const response = await fetch(`https://swapi.dev/api/films/${params.episodeId}`)
      const data = await response.json()

      return {
            props: {
                  films: data
            }
      }

}

export async function getStaticPaths() {
      const response = await fetch("https://swapi.dev/api/films")
      const data = await response.json()

      const paths = data.results.map(movie => {
            return {
                  params: {
                        episodeId: `${movie.episode_id}`
                  }
            }
      })

      return {
            // paths: [
            //       {
            //             params: { episodeId: '4'}
            //       }
            // ],
            paths,
            fallback: false
      }
}


const EpisodeDetail = ({ films }) => {

      console.log(films.opening_crawl)
      
      return <>
            <div className="bg-black pt-4 container p-2 h-[100vh] md:container text-white">
                  <h1 className="text-center text-white uppercase text-3xl font-bold">{films.title}</h1>
                  <div className="crawl_container crawling yellow  text-center font-bold text-xl">
                        <div className="credits">
                              <p className="justify-center">
                                    {films.opening_crawl}
                              </p>
                        </div>
                  </div>
                  <div className="mt-2 yellow">
                        <Table props={films}/>
                  </div>
            </div>

      </>
}

export default EpisodeDetail;