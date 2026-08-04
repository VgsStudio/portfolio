import { motion } from 'framer-motion'
import Section from './Section'
import { awsCertifications, extraCredentials } from '../data/certifications'

export default function Certifications() {
  return (
    <Section id="certificacoes" title="Certificações AWS" compact>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-6">
        {awsCertifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group flex flex-col items-center text-center"
          >
            <img
              src={cert.badge}
              alt={cert.name}
              className="h-16 w-16 transition group-hover:scale-110 sm:h-20 sm:w-20"
            />
            <p className="mt-2 text-[11px] leading-tight text-zinc-400">
              {cert.name}
            </p>
            <p className="text-[11px] font-medium text-zinc-300">
              {cert.issued}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-800 pt-6">
        {extraCredentials.map((cred) => (
          <span
            key={cred.name}
            className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] text-zinc-500"
          >
            {cred.name} · {cred.issued}
          </span>
        ))}
      </div>
    </Section>
  )
}
