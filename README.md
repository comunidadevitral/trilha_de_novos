# Trilha de Novos - Astro 6 + Tailwind 3

Este é o repositório do site da Trilha de Novos da Comunidade Vitral, migrado para o stack Astro 6 + TypeScript + Tailwind 3.

## 📋 Visão geral do projeto

- **Tecnologias utilizadas**: Astro 6, TypeScript, Tailwind CSS 3
- **Estrutura de conteúdo**: Todo o conteúdo original (HTML, estilos, scripts) foi preservado exatamente, apenas migrado para componentes Astro.
- **Build estático**: O site gera arquivos estáticos otimizados para deploy em plataformas como Cloudflare Pages, Vercel, Netlify, etc.
- **Dark mode**: Toggle de tema claro/escuro com persistência via `localStorage`.

## 🗂️ Estrutura de pastas

```
/
├── public/                 # Arquivos estáticos servidos na raiz
│   ├── dados/
│   │   └── passos.json     # Dados dos passos (título, descrição, etc.)
│   ├── favicon.svg
│   └── og-image.svg
├── src/                    # Código fonte
│   ├── assets/             # Imagens e ícones (astro.svg, background.svg)
│   ├── components/         # Componentes reutilizáveis (Welcome.astro)
│   ├── layouts/            # Layouts (Layout.astro - estrutura comum)
│   ├── pages/              # Páginas do site
│   │   ├── raw/            # HTML original importado como texto bruto
│   │   │   ├── 404.html
│   │   │   ├── index.html
│   │   │   ├── mapa.html
│   │   │   ├── material-de-apoio.html
│   │   │   └── passo-1.html ... passo-9.html
│   │   ├── 404.astro       # Página 404
│   │   ├── index.astro     # Homepage
│   │   ├── mapa.astro
│   │   ├── material-de-apoio.astro
│   │   └── passo-*.astro   # Páginas dos passos
│   ├── styles/             # Estilos e configuracao do Tailwind
│   │   └── global.css      # Tokens de design, variáveis dark mode, utilitários Tailwind
│   └── tsconfig.json       # Configuração TypeScript
├── astro.config.mjs        # Configuração do Astro
├── tailwind.config.js      # Configuração do Tailwind (se necessário, embora grande parte esteja em global.css)
├── package.json            # Dependências e scripts
└── README.md
```

## 🧩 Como o conteúdo é organizado

Cada página em `src/pages/` (exceto as em `raw/`) é um componente Astro que:

1. Importa o HTML original de `src/pages/raw/[nome].html?raw`
2. Remove as tags `<header>` e `<footer>` do HTML bruto (para evitar duplicação com o layout)
3. Passa o conteúdo limpo para o `<slot />` do `Layout.astro`

O `Layout.astro` fornece:
- Cabeçalho fixo com logotipo, navegação e botão de dark‑mode
- Rodapé com informações da Comunidade Vitral
- Script de alternância de tema (adiciona/remove a classe `.dark` no `<html>`)

## 🎨 Temas e estilos

- Os tokens de design (cores, espaçamento, raios, sombras, fontes) estão definidos em `src/styles/global.css` como variáveis CSS (`--color-bg`, `--space-md`, etc.).
- O modo escuro é definido dentro do seletor `.dark` no mesmo arquivo, sobrescrevendo as variáveis para uma paleta escura.
- As classes utilitárias do Tailwind (`bg-bg`, `text-text`, `border-border`, etc.) são criadas via `@layer utilities` e referenciam as variáveis CSS, respeitando automaticamente o modo escuro quando a classe `.dark` está presente no `<html>`.
- O arquivo `tailwind.config.js` está configurado para escanear os arquivos `.astro` em busca de classes Tailwind.

## 📝 Como modificar o conteúdo

### Alterar textos, imagens ou estrutura de uma página existente
1. Edite o arquivo correspondente em `src/pages/raw/` (ex: `src/pages/raw/index.html`).
2. O HTML bruto será importado automaticamente nas próximas builds.
3. Se precisar alterar a estrutura do componente Astro (ex: adicionar um novo slot, mudar o título da página), edite o arquivo em `src/pages/` (ex: `src/pages/index.astro`).

### Atualizar os dados dos passos (títulos, descrições)
- Edite `public/dados/passos.json`. O formato é um array de objetos com `id`, `titulo` e `descricao`.
- O script nas páginas (`fetch('dados/passos.json')`) buscará os dados atualizados.

### Adicionar um novo passo
1. Crie o arquivo HTML bruto em `src/pages/raw/passo-X.html` (seguindo o padrão existente).
2. Crie o componente Astro em `src/pages/passo-X.astro` (copie e adapte de outro passo).
3. Adicione o novo objeto ao array em `public/dados/passos.json`.
4. (Opcional) Adicione links para o novo passo no cabeçalho ou em outras páginas, se desejado.

## 🛠️ Como desenvolver localmente

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento (http://localhost:4321)
npm run dev

# O servidor recarrega automaticamente ao alterar arquivos
```

## 🏗️ Construir para produção

```bash
# Gerar arquivos estáticos na pasta dist/
npm run build

# Visualizar a build localmente antes de deploy
npm run preview
```

## ☁️ Deploy

O conteúdo da pasta `dist/` é o que deve ser enviado para o serviço de hospedagem estática.

### Cloudflare Pages
1. Conecte seu repositório Git ao Cloudflare Pages.
2. Defina o comando de build: `npm install && npm run build`
3. Defina a pasta de saída: `dist`
4. O Cloudflare Pages irá publicar automaticamente.

### Outros serviços (Vercel, Netlify, etc.)
Consulte a documentação específica, mas geralmente basta apontar para a pasta `dist/` como saída do build.

## 🔧 Manutenção e boas práticas

- Sempre teste alterações localmente com `npm run dev` antes de fazer commit.
- Após o build, verifique se não há erros no console e se o dark mode funciona corretamente.
- Mantenha as dependências atualizadas periodicamente com `npm update`.
- Se precisar atualizar o Astro ou o Tailwind, ajuste as versões no `package.json` e teste thoroughly.

## 📜 Licença

Este projeto é licenciado sob a [LICENSE](LICENSE) - veja o arquivo para detalhes.

---

*Desenvolvido com Astro e Tailwind CSS. Conteúdo original preservado exatamente conforme o site da Comunidade Vitral.*
