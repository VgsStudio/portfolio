import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="grid gap-6 text-lg leading-relaxed text-zinc-400 md:grid-cols-3">
        <p className="md:col-span-2">
          Sou Engenheiro da Computação formado pelo{' '}
          <span className="text-zinc-200">Instituto Mauá de Tecnologia</span>{' '}
          e atuo como{' '}
          <span className="text-zinc-200">Cloud Architect Engineer</span> na{' '}
          <span className="text-zinc-200">Dati</span>, com foco em{' '}
          <span className="text-zinc-200">arquitetura de soluções AWS</span>{' '}
          — do desenho da solução à entrega, sempre perto de clientes e times
          técnicos.
        </p>
        <p className="md:col-span-2">
          Sou <span className="text-zinc-200">12x AWS Certified</span>{' '}
          (trilha completa: Foundational, Associate, Professional e
          Specialty) e{' '}
          <span className="text-zinc-200">Qiskit Advocate</span> — defendi o
          primeiro TCC sobre Computação Quântica da história do IMT Mauá,
          unindo hardware real da IBM Quantum a experimentos com Raspberry
          Pi.
        </p>
        <p className="md:col-span-2">
          Passei 4 anos como voluntário na{' '}
          <span className="text-zinc-200">Dev. Community Mauá</span>,
          entidade estudantil onde cresci de desenvolvedor front-end a{' '}
          <span className="text-zinc-200">Presidente</span> — hoje sigo como
          Advisor, apoiando a nova diretoria.
        </p>
      </div>
    </Section>
  )
}
