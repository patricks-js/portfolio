import { ArrowTopRight } from '@/components/icons/arrow-top-right'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ConnectLinks } from '@/utils/connect-links'
import { Metadata } from 'next'
import Link from 'next/link'
import { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'Links | Patrick',
  description: "I'm a full-stack software engineer.",
}

export default function Links() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://github.com/patricks-js.png" />
          <AvatarFallback>Patrick</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold tracking-tight mt-5">
          Lucas Patrick
        </h1>
        <p className="text-ring text-center max-w-96 mt-1">
          Um futuro engenheiro de software que adora codar e fazer coisas
          legais. Além disto, gosto muito de motos e música. Vamos nos conectar?
        </p>
      </div>
      <ul
        className="space-y-3 animated-list "
        style={{ '--index': 3 } as CSSProperties}
      >
        {ConnectLinks.map((link, idx) => (
          <li className="rounded-lg transition-opacity" key={idx}>
            <Link
              target="_blank"
              href={link.href}
              className="inline-flex w-full rounded-lg bg-accent/80 p-4 transition-opacity"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  {link.label}
                </div>
                <ArrowTopRight />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
