import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = {
  link: string
  label: string
  isActive: boolean
}

export function Anchor(props: Props) {
  return (
    <li
      className={cn(
        'rounded transition-colors duration-200 hover:bg-accent',
        props.isActive && 'bg-accent',
      )}
    >
      <Link href={`/${props.link}`} className="inline-block px-4 py-1.5">
        {props.label}
      </Link>
    </li>
  )
}
