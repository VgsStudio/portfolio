# Materiais de palestras

Cada subpasta aqui vira `https://vsoller.com.br/materiais/<slug>/` depois do próximo `cdk deploy` — sem precisar mudar nada na infra.

## Como adicionar um material novo

**Tipo HTML** (apresentação completa, tipo o `cloud.vsoller.com.br`):

```
web/materials/<slug>/
  index.html
  (css, imagens, etc. que o index.html referenciar)
```

Fica acessível em `vsoller.com.br/materiais/<slug>/`.

**Tipo arquivo** (PDF, PPTX para download):

```
web/materials/<slug>/
  arquivo.pdf
```

Fica acessível em `vsoller.com.br/materiais/<slug>/arquivo.pdf` — linke esse caminho direto no card da seção Palestras.

**Tipo link** (artigo externo — Medium, LinkedIn Pulse, etc.): não precisa de nada aqui, é só colocar a URL externa direto no `href` da entrada em `web/src/data/talks.ts` (ou `projects.ts`).

## Manual passo a passo

### Artigo / link externo (Medium, LinkedIn Pulse, etc.)

Não mexe nesta pasta. Só edita `web/src/data/talks.ts` (ou o array `smallProjects` em
`web/src/components/Projects.tsx`) e adiciona um item com a URL externa:

```ts
{
  title: 'Nome da palestra ou artigo',
  date: '10/2026',
  description: 'Resumo curto de uma linha.',
  href: 'https://medium.com/@vitorsoller/...',
},
```

### Arquivo pra download (PDF, PPTX)

```bash
mkdir "web/materials/minha-palestra"
cp caminho/do/slides.pdf "web/materials/minha-palestra/slides.pdf"
```

E na entrada de dados, aponte pro caminho publicado:

```ts
href: '/materiais/minha-palestra/slides.pdf',
```

### Apresentação HTML completa

```bash
mkdir "web/materials/minha-palestra"
cp -r caminho/da/apresentacao/* "web/materials/minha-palestra/"
# precisa ter um index.html na raiz dessa pasta
```

```ts
href: '/materiais/minha-palestra/',
```

## Publicar (mesmo comando pros 3 tipos)

```bash
cd web && npm run build
cd ../infra && npx cdk deploy --all --profile personal-vitor
```

O `npm run build` é necessário sempre que você editar `talks.ts`/`Projects.tsx`, porque esses
dados ficam embutidos no bundle do site. O `cdk deploy` sincroniza tanto o site (`web/dist`)
quanto esta pasta (`web/materials`) com o S3 — inclusive removendo do S3 o que você apagar
daqui — e invalida o cache do CloudFront automaticamente. Leva uns 3–6 minutos.
