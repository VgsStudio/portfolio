import { motion } from 'framer-motion'
import Section from './Section'
import { professional, community, type ExperienceItem } from '../data/experience'

function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="space-y-8 border-l border-zinc-800 pl-6">
      {items.map((item, i) => (
        <motion.li
          key={`${item.org}-${item.role}-${item.period}`}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="relative"
        >
          <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-400" />
          <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
            {item.period}
          </p>
          <div className="mt-1 flex items-center gap-2">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.org}
                className="h-5 w-auto object-contain"
              />
            )}
            <h4 className="text-lg font-semibold text-white">
              {item.role} <span className="text-zinc-500">· {item.org}</span>
            </h4>
          </div>
          {item.bullets.length > 0 && (
            <ul className="mt-2 space-y-1 text-sm text-zinc-400">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </motion.li>
      ))}
    </ol>
  )
}

export default function Experience() {
  return (
    <Section id="experiencia" title="Experiência">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Profissional
          </h3>
          <Timeline items={professional} />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Liderança & Comunidade
          </h3>
          <Timeline items={community} />
        </div>
      </div>
    </Section>
  )
}
