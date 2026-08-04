const links = [
  { href: '#certificacoes', label: 'Certificações' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#palestras', label: 'Palestras' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur">
      <nav className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#topo"
          className="font-bold tracking-[0.2em] text-white uppercase"
        >
          Soller
        </a>
        <ul className="hidden gap-6 text-sm text-zinc-400 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
