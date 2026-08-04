import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Section({
  id,
  title,
  compact,
  children,
}: {
  id: string
  title: string
  compact?: boolean
  children?: ReactNode
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl px-6 ${compact ? 'pt-4 pb-16' : 'py-24'}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold text-white"
      >
        {title}
      </motion.h2>
      {children ?? (
        <p className="text-zinc-500">Conteúdo em construção.</p>
      )}
    </section>
  )
}
