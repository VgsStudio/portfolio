import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'
import Section from './Section'
import tccPhoto from '../assets/tcc-defesa.jpg'
import dartcannonPhoto from '../assets/dartcannon.jpg'
import devInTheDarkPhoto from '../assets/dev-in-the-dark.webp'

// Ordenado do mais novo para o mais antigo.
const smallProjects = [
  {
    date: 'out/2025',
    tag: 'Infra Cloud · ECM517',
    title: 'AWS Capstone — Web App HA & Escalável',
    description:
      'Prova de conceito de uma aplicação web altamente disponível e escalável na AWS, com Auto Scaling e dashboard de CloudWatch, com toda a infra entregue via Terraform.',
    tags: ['Terraform', 'Auto Scaling', 'CloudWatch'],
    href: 'https://github.com/VgsStudio/ecm517_aws_caspstone_project_web_app',
  },
  {
    date: '20/02/2025',
    tag: 'Artigo técnico',
    title: 'Alemão, Telegram, Serverless e AWS',
    description:
      'Bot de Telegram serverless (API Gateway + Lambda) que busca e envia PDFs de aulas de alemão sob demanda — um hobby de estudo de idiomas virando projeto AWS de custo quase zero.',
    tags: ['AWS Lambda', 'API Gateway', 'Telegram Bot'],
    href: 'https://medium.com/@vitorsoller/alem%C3%A3o-telegram-serverless-e-aws-o-que-tudo-isso-tem-a-ver-46785f503164',
  },
  {
    date: '07/01/2025',
    tag: 'Artigo técnico · IoT',
    title: 'DartCannon — lançador com reconhecimento facial',
    description:
      'Canhão de bolinhas de ping pong com peças impressas em 3D (SolidWorks) e Raspberry Pi, que só dispara quando reconhece o rosto do professor via AWS Rekognition.',
    tags: ['AWS Rekognition', 'Raspberry Pi', 'S3'],
    href: 'https://medium.com/@vitorsoller/lan%C3%A7ador-de-bolinha-com-reconhecimento-facial-aws-rekognition-ecd2df8d2bb0',
    image: dartcannonPhoto,
    imagePosition: 'object-bottom',
  },
  {
    date: '29/06/2024',
    tag: 'Artigo técnico',
    title: 'Dev In The Dark',
    description:
      'Competição de frontend "às cegas" (HTML/CSS sem ver o resultado) que co-organizei no Instituto Mauá — infra publicada com S3 + CloudFront + Route 53 em tempo real.',
    tags: ['S3', 'CloudFront', 'Route 53'],
    href: 'https://medium.com/@vitorsoller/dev-in-the-dark-frontend-no-escuro-literalmente-dc2798f075aa',
    image: devInTheDarkPhoto,
  },
  {
    date: '03/08/2023',
    tag: 'Artigo técnico',
    title: 'API Serverless para o Campeonato Battlesnake',
    description:
      'Backend serverless em Python + FastAPI para o Campeonato Battlesnake que eu mesmo criei e organizei na Dev. Community Mauá — a IA que joga (busca A*) é só uma parte da história, contada em detalhes no artigo.',
    tags: ['Python', 'FastAPI', 'A*'],
    href: 'https://www.linkedin.com/pulse/api-serverless-em-python-e-fastapi-para-campeonato-vitor-soller/',
    secondary: {
      label: 'Repositório da IA',
      href: 'https://github.com/VgsStudio/ecm502_battlesnake_ia',
    },
  },
]

export default function Projects() {
  return (
    <Section id="projetos" title="Projetos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:grid-cols-2 md:p-8"
      >
        <img
          src={tccPhoto}
          alt="Defesa do TCC sobre Computação Quântica no IMT Mauá"
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-xs font-semibold tracking-widest text-orange-400 uppercase">
            04/12/2025 · TCC · Engenharia da Computação
          </p>
          <h3 className="text-2xl font-bold text-white">
            Introdução prática à Computação Quântica com Raspberry Pi
          </h3>
          <p className="mt-4 text-zinc-400">
            Primeiro TCC sobre Computação Quântica da história do IMT Mauá.
            Estudo teórico do algoritmo de Shor, uso de hardware real da{' '}
            <span className="text-zinc-200">IBM Quantum</span> e experimentos
            práticos com <span className="text-zinc-200">Qiskit</span> em
            Raspberry Pi — LED com porta Hadamard, calculadora OLED e porta
            Toffoli quântica.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Defendido em 04/12/2025 com João Vitor Choueri Branco, sob
            orientação do Prof. Dr. Sandro Martini. Apresentado também na
            feira de TCCs Eureka 2025.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Qiskit', 'Python', 'IBM Quantum', 'Raspberry Pi'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/vgsstudio/cmd01_tcc"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-200 transition hover:text-white"
            >
              <GithubIcon className="h-4 w-4" /> Repositório
            </a>
            <a
              href="https://quantumbros.com.br"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-200 transition hover:text-white"
            >
              <ExternalLink className="h-4 w-4" /> quantumbros.com.br
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {smallProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition hover:border-zinc-700 hover:bg-zinc-900"
          >
            {project.image && (
              <a href={project.href} target="_blank" rel="noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-56 w-full object-cover ${project.imagePosition ?? 'object-center'}`}
                />
              </a>
            )}
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="px-6 pt-6"
            >
              <p className="text-xs font-semibold tracking-widest text-orange-400 uppercase">
                {project.date} · {project.tag}
              </p>
              <h3 className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
                {project.title}
                <ExternalLink className="h-4 w-4 text-zinc-600 transition group-hover:text-zinc-300" />
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                {project.description}
              </p>
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-2 px-6 pb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
              {project.secondary && (
                <a
                  href={project.secondary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto flex items-center gap-1 text-xs font-medium text-zinc-500 transition hover:text-zinc-300"
                >
                  <GithubIcon className="h-3.5 w-3.5" /> {project.secondary.label}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
