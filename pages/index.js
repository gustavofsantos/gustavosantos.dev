import dynamic from 'next/dynamic'

const HomeHero = dynamic(() =>
  import('../components/home-hero').then((mod) => mod.HomeHero)
)

export default function HomePage() {
  return (
    <article className="flex flex-col w-full h-full justify-center items-center">
      <HomeHero />
    </article>
  )
}
