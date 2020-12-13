import Link from "next/link";
import Gist from "react-gist";
import { BlogPage } from "../../../../components/blog/blog-page";
import { BlogParagraph } from "../../../../components/blog/blog-paragraph";
import { BlogSubtitle } from "../../../../components/blog/blog-subtitle";
import { BlogResume } from "../../../../components/blog/blog-resume";
import { BlogTitle } from "../../../../components/blog/blog-title";

export const metadata = {
  title: "Tip: Bind the class context when pass method reference",
  resume: `
    You can use the .bind method to attach the current object scope to the method reference
    that you are passing around.`,
  href: "/blog/en/js-class-tip-bind",
};

export default function Post() {
  return (
    <BlogPage
      title={metadata.title}
      // imgPath="/images/blog/js-class-tip-bind/image.jpg"
      // imgAlt="Blog landing image"
      // imgAuthorName="Hello I'm Nik"
      // imgAuthorHref="https://unsplash.com/@helloimnik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
    >
      <BlogTitle>{metadata.title}</BlogTitle>
      <BlogResume>{metadata.resume}</BlogResume>

      <BlogSubtitle>Let's face the problem</BlogSubtitle>

      <Gist id="8f27b6ea47fbfbd1b9c53dd2857d0afd" file="bind-example-a.js" />


      <Gist id="8f27b6ea47fbfbd1b9c53dd2857d0afd" file="bind-example-b.js" />
    </BlogPage>
  );
}
