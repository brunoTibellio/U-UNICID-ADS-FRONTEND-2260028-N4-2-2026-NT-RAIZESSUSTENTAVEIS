# 🍃 Raízes Sustentáveis

Um projeto acadêmico desenvolvido para a disciplina de **Front-End para Web**, na UNICID. O site reúne informações, orientações e conteúdos educativos para aproximar a sustentabilidade das escolhas do dia a dia.

A proposta é simples: mostrar que atitudes cotidianas — como separar resíduos, economizar água e consumir com consciência — também fazem parte da preservação ambiental.

## 🌐 Acesse o projeto

- **Site publicado (GitHub Pages, endereço principal):** https://brunotibellio.github.io/U-UNICID-ADS-FRONTEND-2260028-N4-2-2026-NT-RAIZESSUSTENTAVEIS/
- **Endereço alternativo (Railway):** https://raizes-sustentaveis-production-cafe.up.railway.app
- **Repositório:** https://github.com/brunoTibellio/U-UNICID-ADS-FRONTEND-2260028-N4-2-2026-NT-RAIZESSUSTENTAVEIS

## 📌 Situação atual

Versão final da 2ª entrega: site publicado com HTTPS, JavaScript integrado, documentação atualizada na pasta [`docs/`](docs/README.md) e apresentação para a turma.

Em **14/11/2026** os arquivos foram reorganizados em pastas (as páginas internas estão em `paginas/` e todos os estilos em `css/`). O conteúdo das páginas não mudou, e o endereço principal do site continua o mesmo.

## 🌱 Sobre o projeto

O Raízes Sustentáveis aborda questões como descarte incorreto de resíduos, desperdício de recursos naturais e falta de informação sobre práticas sustentáveis. O objetivo é oferecer conteúdo acessível e incentivar mudanças possíveis na rotina.

O projeto foi construído em equipe, passando por etapas de planejamento, desenvolvimento das páginas, criação de conteúdo, identidade visual, revisão e documentação.

## Páginas do site

| Página | Arquivo | O que você encontra |
| --- | --- | --- |
| Início | `index.html` | Apresentação, carrossel, missão e acesso às demais áreas |
| Quem somos | `paginas/quemsomos.html` | História, propósito e equipe |
| Serviços | `paginas/servicos.html` | Conteúdos e orientações do projeto |
| Sustentabilidade | `paginas/sustentabilidade.html` | Conceitos e pilares da sustentabilidade |
| Dicas | `paginas/dicas.html` | Hábitos sustentáveis para o cotidiano |
| Reciclagem | `paginas/reciclagem.html` | Separação e destinação de resíduos |
| Projetos | `paginas/projetos.html` | Ideias de ações comunitárias e educativas |
| Conteúdos | `paginas/noticias.html` | Notícias com busca e filtro por categoria |
| Mídia | `paginas/midia.html` | Conteúdo audiovisual e materiais externos |
| Contato | `paginas/contatos.html` | Formulário demonstrativo com validação |

**Páginas de apoio:** `paginas/orcamento_hospedagem.html` apresenta a comparação de hospedagem e `paginas/obrigado.html` exibe a confirmação após a interação com o formulário. `Faleconosco.html`, na raiz, apenas redireciona endereços antigos para a página de contato. Essas páginas não entram na contagem das dez páginas principais.

## O que o site oferece

- Navegação entre as dez páginas principais e menu adaptado a telas menores.
- Recurso de alto contraste, com preferência salva no navegador.
- Audiodescrição e recursos de apoio à navegação.
- Formulário demonstrativo com validação em JavaScript.
- Salvamento e recuperação local do rascunho do formulário por `localStorage`.
- Busca e filtro de conteúdos na página de notícias.
- Carrossel na página inicial.
- Foco visível e suporte a navegação por teclado.

**Sobre o formulário:** é uma demonstração acadêmica. Os dados ficam salvos apenas no navegador de quem preenche e não são enviados a nenhum servidor.

## Tecnologias e ferramentas

- **HTML5** — estrutura das páginas.
- **CSS3** — identidade visual, layout e responsividade.
- **JavaScript** — validações, filtros e interações.
- **Git e GitHub** — versionamento e colaboração.
- **Visual Studio Code** — ambiente de desenvolvimento.
- **GitHub Pages** — publicação principal do site; **Railway** — endereço alternativo e comparação de custos.

## ▶️ Como rodar

**Online:** basta abrir o endereço do GitHub Pages acima. Não é preciso login.

**No computador:**

1. Baixe o repositório (botão **Code › Download ZIP**) ou clone com `git clone https://github.com/brunoTibellio/U-UNICID-ADS-FRONTEND-2260028-N4-2-2026-NT-RAIZESSUSTENTAVEIS.git`.
2. Abra o arquivo `index.html` no navegador.
3. Opcional: no Visual Studio Code, use a extensão **Live Server** (clique com o botão direito em `index.html` › *Open with Live Server*) para ver as alterações atualizarem automaticamente.

O site não precisa de instalação, servidor ou banco de dados: é feito só com HTML, CSS e JavaScript.

## Estrutura do repositório

```text
.
├── index.html               ← página inicial (endereço principal do site)
├── Faleconosco.html         ← redireciona endereços antigos para o contato
├── paginas/
│   ├── quemsomos.html
│   ├── servicos.html
│   ├── sustentabilidade.html
│   ├── dicas.html
│   ├── reciclagem.html
│   ├── projetos.html
│   ├── noticias.html
│   ├── midia.html
│   ├── contatos.html
│   ├── orcamento_hospedagem.html
│   └── obrigado.html
├── css/
│   ├── style.css
│   ├── paginas.css
│   └── carrossel.css
├── js/
│   └── script.js
├── img/
├── docs/
│   ├── README.md
│   ├── diario-de-bordo.md
│   ├── escopo.md
│   ├── orcamento.md
│   ├── testes.md
│   ├── evidencias-testes.md
│   ├── relatorio-lighthouse.md
│   ├── revisao-pagina-a-pagina.md
│   ├── diario-ia.md
│   └── melhorias-mvp.md
└── README.md
```

## Documentação

A documentação foi organizada na pasta [`docs/`](docs/README.md), para que o planejamento e o histórico do projeto fiquem junto com o código.

| Documento | Conteúdo |
| --- | --- |
| [Diário de bordo](docs/diario-de-bordo.md) | Registro das etapas e decisões do desenvolvimento |
| [Escopo do projeto](docs/escopo.md) | Objetivos, público, funcionalidades e limites da entrega |
| [Orçamento](docs/orcamento.md) | Comparação de hospedagem e estimativa de custos |
| [Plano de testes](docs/testes.md) | Cenários, procedimentos e situação dos testes |
| [Evidências de testes](docs/evidencias-testes.md) | Verificações realizadas, resultados estáticos e itens pendentes |
| [Relatório Lighthouse](docs/relatorio-lighthouse.md) | Pontuações de desempenho, acessibilidade, boas práticas e SEO |
| [Revisão página por página](docs/revisao-pagina-a-pagina.md) | Registro técnico das páginas e melhorias aplicadas |
| [Diário de uso de IA](docs/diario-ia.md) | Apoios utilizados, sugestões incorporadas e limites |
| [Melhorias do MVP](docs/melhorias-mvp.md) | Comparação entre a versão anterior e a versão de finalização |

> Os documentos da pasta `docs/` foram escritos antes da reorganização das pastas e citam os arquivos pelo nome (por exemplo, `contatos.html`). Na estrutura atual, essas páginas estão dentro de `paginas/`.

## Equipe

| Integrante | Participação registrada |
| --- | --- |
| Bruno Gomes Tibellio | Desenvolvimento das páginas e criação de conteúdo |
| Mateus Lima Monteiro | Desenvolvimento das páginas e criação de conteúdo |
| Gabriel Marques Lopes | Criação de conteúdo e identidade visual |
| Murilo Domingues Saes | Criação de conteúdo e identidade visual |
| Erick Andrade de Péder | Testes, documentação e identidade visual |

## Sobre os testes

- **Verificação estática (14/11/2026):** os 12 arquivos HTML analisados apresentaram idioma `pt-BR`, link para pular ao conteúdo, elemento principal, carregamento do JavaScript e identificação da página atual.
- **W3C Nu HTML Checker:** validação registrada como sem erros ou avisos, conforme [Plano de testes](docs/testes.md).
- **Lighthouse (PageSpeed Insights), 14/11/2026, versão computador, no endereço do GitHub Pages:** Desempenho 100 · Acessibilidade 96 · Práticas recomendadas 100 · SEO 100. O registro anterior, de 31/10/2026 no endereço Railway, está em [Relatório Lighthouse](docs/relatorio-lighthouse.md).
- **Reorganização das pastas (14/11/2026):** depois da mudança, as 11 páginas acessíveis pelo menu foram abertas uma a uma; todos os links internos, estilos, scripts e imagens carregaram, e a aparência das páginas ficou igual à anterior. Menu do celular, menu "Mais", alto contraste, filtro de notícias, validação do formulário, rascunho salvo e redirecionamento para a página de confirmação continuaram funcionando.

Os resultados detalhados e o que ainda precisa ser executado estão em [Evidências de testes](docs/evidencias-testes.md).

## Dados acadêmicos

- **Instituição:** UNICID
- **Disciplina:** Front-End para Web
- **Professor:** Paulo Fratta
- **Atividade:** AV A1 — 2ª entrega (versão final)
- **Ano:** 2026
