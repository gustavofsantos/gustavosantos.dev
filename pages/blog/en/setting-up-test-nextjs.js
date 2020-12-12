import Link from "next/link";
import Gist from "react-gist";
import { BlogPage } from "../../../components/blog/blog-page";
import { BlogParagraph } from "../../../components/blog/blog-paragraph";
import { BlogResume } from "../../../components/blog/blog-resume";
import { BlogTitle } from "../../../components/blog/blog-title";

export const metadata = {
  title: "Setting up Jest, Testing Library and Mirage in Next.js project",
  resume: `the resume of the article the resume of the article the resume of the
        article the resume of the article the resume of the article the resume
        of the article the resume of the article the resume of the article`,
};

export default function Post() {
  return (
    <BlogPage title={metadata.title}>
      <BlogTitle>{metadata.title}</BlogTitle>

      <BlogResume>{metadata.resume}</BlogResume>

      <section>
        Also read in{" "}
        <Link href="/blog/pt-br/setting-up-test-nextjs">português</Link>.
      </section>

      <BlogParagraph>
        This is an blog paragraph. bla bla bla bla bla bla This is an blog
        paragraph. bla bla bla bla bla bla This is an blog paragraph. bla bla
        bla bla bla bla This is an blog paragraph. <code>const x = () => 0</code> bla bla bla bla bla bla This
        is an blog paragraph. bla bla bla bla bla bla This is an blog paragraph.
        bla bla bla bla bla bla This is an blog paragraph. bla bla bla bla bla
        bla
      </BlogParagraph>

      <Gist id="cb2080538ec7d58c9d33ae33d76c7466" />

      <BlogParagraph>
        This is an blog paragraph. bla bla bla bla bla bla This is an blog
        paragraph. bla bla bla bla bla bla This is an blog paragraph. bla bla
        bla bla bla bla This is an blog paragraph. bla bla bla bla bla bla This
        is an blog paragraph. bla bla bla bla bla bla This is an blog paragraph.
        bla bla bla bla bla bla This is an blog paragraph. bla bla bla bla bla
        bla
      </BlogParagraph>

      <BlogParagraph>this is another blog paragraph.</BlogParagraph>
    </BlogPage>
  );
}
