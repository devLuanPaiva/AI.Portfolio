import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
interface ContentMDProps {
    markdown: string
}
export default function ContentMD(props: Readonly<ContentMDProps>) {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
        >
            {props.markdown}
        </Markdown>
    )
}