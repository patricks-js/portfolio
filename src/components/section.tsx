import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Section(props: Props) {
  return <div className="">{props.children}</div>
}
