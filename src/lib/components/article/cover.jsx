import Image from 'next/image'

export function ArticleCover({ url, credit, width, height }) {
  return (
    <section className="flex flex-col w-full space-y-1 my-8">
      <Image
        src={url}
        height={height}
        width={width}
        layout="responsive"
        className="rounded-md shadow-sm"
      />
      <p className="text-gray-500 italic font-serif">{credit}</p>
    </section>
  )
}
