import Link from 'next/link'

export const BlogPostCard = ({ title, resume, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col cursor-pointer pt-4 pb-4">
        <h2 className="text-gray-900 font-bold text-xl pb-2 dark:text-gray-200">
          {title}
        </h2>
        <p className="pb-3 text-gray-700 dark:text-gray-400">{resume}</p>

        <span className="pt-1 pb-1 pl-4 pr-4 w-max font-bold text-black bg-green-300 rounded-full text-sm capitalize">
          Ler mais
        </span>
      </div>
    </Link>
  )
}
