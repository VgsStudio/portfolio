import { motion } from 'framer-motion'
import Section from './Section'
import { awsCertifications, certLevels, credlyProfile, extraCredentials } from '../data/certifications'

export default function Certifications() {
  return (
    <Section id="certificacoes" title={`Certificações AWS · ${awsCertifications.length}x`} compact>
      <div className="flex flex-col gap-8">
        {certLevels.map((level) => (
          <div key={level}>
            <p className="mb-3 text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
              {level}
            </p>
            <div className="grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-6">
              {awsCertifications
                .filter((cert) => cert.level === level)
                .map((cert, i) => (
                  <motion.a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
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
                  </motion.a>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-zinc-800 pt-6">
        {extraCredentials.map((cred) => (
          <span
            key={cred.name}
            className="rounded-full border border-zinc-700 px-3 py-1 text-[11px] text-zinc-500"
          >
            {cred.name} · {cred.issued}
          </span>
        ))}
        <a
          href={credlyProfile}
          target="_blank"
          rel="noreferrer"
          className="ml-auto text-[11px] font-medium text-zinc-300 underline-offset-4 hover:underline"
        >
          Verificar no Credly →
        </a>
      </div>
    </Section>
  )
}
