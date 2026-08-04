import { motion, type Variants } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import vitorHero from '../assets/vitor-hero.jpg'
import vitorBg from '../assets/vitor-bg.jpg'
import { GithubIcon, LinkedinIcon } from './icons'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Blurred photo backdrop */}
      <div className="absolute inset-0 -z-30">
        <img
          src={vitorBg}
          aria-hidden
          className="h-full w-full scale-125 object-cover opacity-45 blur-3xl"
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]" />
      </div>

      {/* Color accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(255,153,0,0.18),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.18),transparent_45%)]"
      />
      {/* Faint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 md:flex-row md:justify-between">
        <motion.div
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-sm font-medium tracking-wide text-orange-300"
          >
            <Sparkles size={14} /> Analista de Projetos · Dati
          </motion.p>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-6xl leading-[1.02] font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Vitor
            <br />
            Soller
          </motion.h1>

          <motion.p
            custom={0.25}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-lg text-zinc-400 md:mx-0"
          >
            <span className="text-zinc-200">Analista de Projetos</span> com
            paixão por Cloud, caminhando para a entrega técnica em{' '}
            <span className="text-zinc-200">
              arquitetura de soluções AWS
            </span>{' '}
            — 6x AWS Certified e Qiskit Advocate.
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="mt-9 flex items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="https://www.linkedin.com/in/vitor-soller/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/vgsstudio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-orange-500/40 via-fuchsia-500/20 to-blue-500/40 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
            <img
              src={vitorHero}
              alt="Foto de Vitor Soller"
              className="h-72 w-60 rounded-3xl object-cover object-top sm:h-80 sm:w-64 md:h-[26rem] md:w-80"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#111117] px-4 py-2 text-xs font-medium whitespace-nowrap text-zinc-300 shadow-xl"
          >
            🏆 Dati · AWS Partner of the Year LATAM 2025
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-zinc-300"
        aria-label="Rolar para a seção Sobre"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
