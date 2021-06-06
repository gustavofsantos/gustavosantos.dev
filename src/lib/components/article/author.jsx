export function ArticleAuthor({ message }) {
  return (
    <div className="flex space-x-4 justify-start items-start">
      <img
        src="/images/profile.jpg"
        className="rounded-full"
        style={{ width: '4rem', height: '4rem' }}
      />
      <div className="flex flex-col w-full">
        <span className="font-bold text-lg">Gustavo Santos</span>
        <span className="">{message}</span>
      </div>
    </div>
  )
}

ArticleAuthor.defaultProps = {
  message:
    "I'm a developer, engineer, leader and learner. This web site is opionated. Be nice."
}
