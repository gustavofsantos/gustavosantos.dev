import Link from 'next/link'

export function SnippetListItem({ snippet }) {
  return (
    <div className="flex flex-col w-full pt-4 pb-4">
      <Link href={snippet.href}>
        <h2 className="poppins font-semibold w-full text-xl mb-2 cursor-pointer">
          {snippet.meta.title}
        </h2>
      </Link>
      <p className="text-gray-700 mb-2">{snippet.meta.excerpt}</p>

      <div className="flex flex-wrap space-x-2">
        {snippet.meta.tags.map((tagName) => (
          <span
            key={snippet.meta.title + tagName}
            className="bg-green-200 mt-1 mb-1 pt-1 pb-1 pl-2 pr-2 text-sm"
          >
            {tagName}
          </span>
        ))}
      </div>
    </div>
  )
}
