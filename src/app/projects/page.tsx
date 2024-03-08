import { Section } from '@/components/section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Patrick',
  description: "I'm a full-stack software engineer.",
}

export default function Links() {
  return (
    <>
      <Section>
        <div>Projects</div>
      </Section>
    </>
  )
}
