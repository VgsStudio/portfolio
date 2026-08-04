import { Mail } from 'lucide-react'
import Section from './Section'
import { GithubIcon, LinkedinIcon } from './icons'

const links = [
  {
    label: 'vgsoller@gmail.com',
    href: 'mailto:vgsoller@gmail.com',
    icon: Mail,
  },
  {
    label: 'linkedin.com/in/vitor-soller',
    href: 'https://www.linkedin.com/in/vitor-soller/',
    icon: LinkedinIcon,
  },
  {
    label: 'github.com/vgsstudio',
    href: 'https://github.com/vgsstudio',
    icon: GithubIcon,
  },
]

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 text-zinc-300 transition hover:border-zinc-700 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
      <p className="mt-16 text-sm text-zinc-600">
        © {new Date().getFullYear()} Vitor Soller.
      </p>
    </Section>
  )
}
