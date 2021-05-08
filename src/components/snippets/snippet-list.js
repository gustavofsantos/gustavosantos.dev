import { When } from '../when'
import { SnippetListItem } from './snippet-list-item'

export function SnippetList({ snippets }) {
  return (
    <When value={snippets && snippets.length > 0}>
      {() => (
        <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
          {snippets.map((snippet) => (
            <li key={snippet.slug}>
              <SnippetListItem snippet={snippet} />
            </li>
          ))}
        </ul>
      )}
    </When>
  )
}
