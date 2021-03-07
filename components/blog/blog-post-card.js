import Link from 'next/link'

export const BlogPostCard = ({ title, resume, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col cursor-pointer pt-4 pb-4">
        <h2 className="text-coolGray-900 dark:text-coolGray-200 font-bold text-xl pb-2">
          {title}
        </h2>
        <p className="pb-3 text-coolGray-700 dark:text-coolGray-400">
          {resume}
        </p>

        <span className="pt-1 pb-1 pl-4 pr-4 w-max font-bold text-black bg-pink-200  text-sm lowercase">
          read article
        </span>
      </div>
    </Link>
  )
}
