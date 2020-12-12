import Link from "next/link";

export const BlogPostCard = ({ title, resume, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col cursor-pointer pt-4 pb-4">
        <h2 className="text-gray-900 serif pb-2">{title}</h2>
        <p className="serif text-sm italic text-gray-700">{resume}</p>
      </div>
    </Link>
  );
};
