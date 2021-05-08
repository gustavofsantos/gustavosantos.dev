import Link from 'next/link'

export function SnippetListItem({ snippet }) {
  return (
    <div className="flex flex-col w-full pt-4 pb-4">
      <Link href={snippet.href}>
        <h2 className="style-display font-semibold w-full text-xl mb-2 cursor-pointer text-coolGray-900 dark:text-coolGray-200">
          {snippet.meta.title}
        </h2>
      </Link>
      <p className="text-coolGray-700 dark:text-coolGray-400 mb-2">
        {snippet.meta.excerpt}
      </p>
    </div>
  )
}
