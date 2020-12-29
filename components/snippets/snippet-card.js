import { SnippetListItem } from './snippet-list-item'

export function SnippetCard(snippet) {
  return (
    <div className="border border-gray-400 shadow-md rounded-md">
      <SnippetListItem snippet={snippet} />
    </div>
  )
}
