import Link from 'next/link'

type Props = {
  link: string
  label: string
}

export function Anchor(props: Props) {
  return (
    <li className="hover:bg-accent rounded transition-colors duration-200">
      <Link href={`/${props.link}`} className="inline-block px-4 py-1.5">
        {props.label}
      </Link>
    </li>
  )
}
