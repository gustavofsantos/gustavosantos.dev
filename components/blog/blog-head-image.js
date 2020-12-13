import Image from 'next/image'

export const BlogHeadImage = ({ path, alt, authorName, authorHref }) => (
  <section className="flex flex-col w-full">
    <div className="flex justify-center items-center box-content h-28 max-h-28">
      <Image src={path} alt={alt} layout="fill" className="object-cover" />
    </div>

    <div>
      Photo by <a href={authorHref} target="_blank" rel="noopener noreferer">{authorName}</a>
    </div>
  </section>
  )