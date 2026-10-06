import Section from './Section'

export default function About() {
  return (
    <Section id="sobre" title="Sobre">
      <div className="grid gap-6 text-lg leading-relaxed text-zinc-400 md:grid-cols-3">
        <p className="md:col-span-2">
          Sou Engenheiro da Computação formado pelo{' '}
          <span className="text-zinc-200">Instituto Mauá de Tecnologia</span>{' '}
          e atuo como{' '}
          <span className="text-zinc-200">Cloud Architect Engineer</span> no
          time de Consulting da <span className="text-zinc-200">Dati</span>.
          Venho da área de projetos, onde passei a maior parte do tempo entre
          clientes e times técnicos — e hoje levo essa bagagem para o lado
          técnico, traduzindo necessidades de negócio em{' '}
          <span className="text-zinc-200">arquiteturas AWS</span> seguras,
          escaláveis e com custo otimizado.
        </p>
        <p className="md:col-span-2">
          Sou <span className="text-zinc-200">10x AWS Certified</span>{' '}
          (Foundational, Associate, Professional, Specialty e a nova AI
          Business Strategist) e{' '}
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
