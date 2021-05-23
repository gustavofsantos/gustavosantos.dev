import Image from 'next/image'

export function ArticleCover({ url, credit }) {
  return (
    <section className="w-full space-y-1 my-8">
      <div className="relative" style={{ height: '400px' }}>
        <Image
          src={url}
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-md"
        />
      </div>

      <p className="text-gray-500 italic font-serif">{credit}</p>
    </section>
  )
}
