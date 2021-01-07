import { SnippetListItem } from './snippet-list-item'

export function SnippetCard({ snippet }) {
  return (
    <div className="pr-4 pl-4 mt-4 mb-4 border-2 border-gray-800 shadow-md">
      <SnippetListItem snippet={snippet} />
    </div>
  )
}
