import { BlogPage } from "../../../components/blog/blog-page";
import { BlogParagraph } from "../../../components/blog/blog-paragraph";
import { BlogResume } from "../../../components/blog/blog-resume";
import { BlogTitle } from "../../../components/blog/blog-title";

export const metadata = {
  title: "Configurando Jest, Testing Library e Mirage em um projeto Next.js",
  resume: `Resumo maroto em portugues`
};

export default function Post() {
  return (
    <BlogPage title={metadata.title}>
      <BlogTitle>{metadata.title}</BlogTitle>

      <BlogResume>{metadata.resume}</BlogResume>

      <BlogParagraph>
        This is an blog paragraph. bla bla bla bla bla bla This is an blog
        paragraph. bla bla bla bla bla bla This is an blog paragraph. bla bla
        bla bla bla bla This is an blog paragraph. bla bla bla bla bla bla This
        is an blog paragraph. bla bla bla bla bla bla This is an blog paragraph.
        bla bla bla bla bla bla This is an blog paragraph. bla bla bla bla bla
        bla
      </BlogParagraph>

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
