import { Section } from '@/components/section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links | Patrick',
  description: "I'm a full-stack software engineer.",
}

export default function Links() {
  return (
    <>
      <Section>
        <div>Link</div>
      </Section>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  )
}
