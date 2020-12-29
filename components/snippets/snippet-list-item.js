import Link from 'next/link'

export function SnippetListItem({ snippet }) {
  return (
    <div className="flex flex-col w-full pt-4 pb-4">
      <Link href={snippet.href}>
        <h2 className="poppins font-semibold text-xl mb-2 w-min cursor-pointer">
          {snippet.meta.title}
        </h2>
      </Link>
      <p className="text-gray-700 mb-2">{snippet.meta.excerpt}</p>

      <div className="flex flex-wrap space-x-2">
        {snippet.meta.tags.map((tagName) => (
          <span className="bg-green-300 mt-1 mb-1 pl-4 pr-4 rounded-full">
            {tagName}
          </span>
        ))}
      </div>
    </div>
  )
}
