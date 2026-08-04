import datiLogo from '../assets/logos/dati.png'
import claroLogo from '../assets/logos/claro.svg'

export type ExperienceItem = {
  org: string
  role: string
  period: string
  bullets: string[]
  logo?: string
}

export const professional: ExperienceItem[] = [
  {
    org: 'Dati',
    role: 'Analista de Projetos',
    period: 'fev/2026 — atual',
    logo: datiLogo,
    bullets: [
      'Organização e gestão de demandas técnicas no ClickUp: fluxos, prioridades, dependências, cronogramas e métricas de risco/performance.',
      'Automações com API, AWS e Python (Lambda, S3) para reduzir tarefas manuais e ganhar eficiência operacional.',
      'Participação em discussões de arquitetura de soluções e serviços AWS, apoiando decisões técnicas.',
      'Ponto focal entre clientes, stakeholders e times técnicos.',
    ],
  },
  {
    org: 'Dati',
    role: 'Assistente de Projetos',
    period: 'jul/2025 — fev/2026',
    logo: datiLogo,
    bullets: ['Suporte à operação de projetos e primeiros passos em gestão técnica na Dati.'],
  },
  {
    org: 'Claro Brasil',
    role: 'Estagiário — Claro Flex',
    period: 'nov/2023 — jul/2025',
    logo: claroLogo,
    bullets: [
      'Organização de regras de negócio para novas funcionalidades do plano digital Claro Flex.',
      'Fluxo constante com UX/UI, desenvolvimento, atendimento e logística.',
      'Gestão de bugs via Jira, apoio à coordenação de deploys e análise de dados (data driven).',
    ],
  },
]

export const community: ExperienceItem[] = [
  {
    org: 'Dev. Community Mauá',
    role: 'Advisor',
    period: 'dez/2025 — atual',
    bullets: [],
  },
  {
    org: 'Dev. Community Mauá',
    role: 'Presidente',
    period: 'dez/2024 — dez/2025',
    bullets: ['Liderança da entidade — discussões externas (clientes) e internas (diretoria/negócio).'],
  },
  {
    org: 'Dev. Community Mauá',
    role: 'Diretor de Desenvolvimento',
    period: 'jan/2024 — dez/2024',
    bullets: ['Organização do time de dev e onboarding de novos membros; diagramas de infraestrutura AWS para projetos da entidade.'],
  },
  {
    org: 'Dev. Community Mauá',
    role: 'Head Backend',
    period: 'jun/2023 — jan/2024',
    bullets: [
      'Organizou os projetos Smile Mauá, Portal Interno, MauáFood e DevMédias.',
      'Criou programa de capacitação com templates de CI/CD para estudo.',
    ],
  },
  {
    org: 'Dev. Community Mauá',
    role: 'Desenvolvedor Back-end',
    period: 'out/2022 — jun/2023',
    bullets: [
      'Pipelines CI/CD (GitHub Actions), IaC (CloudFormation, SAM, CDK).',
      'Stack full AWS: CloudFront, S3, Lambda, DynamoDB, API Gateway, Cognito.',
      'APIs serverless em Python.',
    ],
  },
  {
    org: 'Dev. Community Mauá',
    role: 'Desenvolvedor Front-end',
    period: 'out/2021 — out/2022',
    bullets: ['Projeto "Portfólio" em React.'],
  },
]
