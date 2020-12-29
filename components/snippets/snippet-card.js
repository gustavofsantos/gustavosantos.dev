import { SnippetListItem } from './snippet-list-item'

export function SnippetCard({ snippet }) {
  return (
    <div className="pr-4 pl-4 border border-gray-300 shadow-md rounded-md">
      <SnippetListItem snippet={snippet} />
    </div>
  )
}
