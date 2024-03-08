import { ReactNode } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

type ConnectLink = {
  label: string
  href: string
  icon: ReactNode
}

export const ConnectLinks: ConnectLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/patricks-js',
    icon: <FaGithub />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_patrick.js/',
    icon: <FaInstagram />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/patrick-lsilva/',
    icon: <FaLinkedin />,
  },
]
