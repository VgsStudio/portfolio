import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Section from './Section'
import { talks } from '../data/talks'

export default function Talks() {
  return (
    <Section id="palestras" title="Palestras & Materiais">
      <div className="grid gap-6 md:grid-cols-2">
        {talks.map((talk, i) => (
          <motion.a
            key={talk.title}
            href={talk.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
              {talk.date}
            </p>
            <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
              {talk.title}
              <ExternalLink
                size={14}
                className="text-zinc-600 transition group-hover:text-zinc-300"
              />
            </h3>
            <p className="mt-3 text-sm text-zinc-400">{talk.description}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
