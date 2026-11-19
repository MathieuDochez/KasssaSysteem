import { Link } from 'react-router'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title="Dit glas is leeg">
      <p>
        Deze pagina bestaat niet (meer). <Link to="/">Terug naar de startpagina</Link>.
      </p>
    </PageHeader>
  )
}
