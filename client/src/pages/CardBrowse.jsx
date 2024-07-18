import { Link } from "react-router-dom"

export default function CardBrowse() {
  return (
<main className='grid grid-cols-2 [&>*]:border-[1px] [&>*]:px-5'>
<h1 className="text-center">Question</h1>
<h1 className="text-center">Réponses</h1>
<Link to="/" >
<p>test</p>
<p>testtest</p>
</Link>
</main>
  )
}
