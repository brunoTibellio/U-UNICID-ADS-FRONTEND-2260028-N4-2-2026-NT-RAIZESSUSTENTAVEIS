# 🍃 Raízes Sustentáveis

Site informativo sobre sustentabilidade, feito em **HTML e CSS** para a disciplina de **Front-End para Web** (UNICID).

🌐 **Acesse o site:**

- [Versão publicada no Railway](https://raizes-sustentaveis-production-cafe.up.railway.app)
- [Versão publicada no GitHub Pages](https://brunotibellio.github.io/U-UNICID-ADS-FRONTEND-2260028-N4-2-2026-NT-RAIZESSUSTENTAVEIS/)

<!-- Quando tivermos um print da página inicial, salvar em docs/img/print-home.png e tirar os comentários da linha abaixo -->
<!-- ![Página inicial do site Raízes Sustentáveis](docs/img/print-home.png) -->

---

## Sobre o projeto

O Raízes Sustentáveis é o nosso trabalho da atividade A2 de Front-End para Web.

Escolhemos falar sobre três problemas que vemos no dia a dia: o **descarte incorreto de resíduos**, o **desperdício de recursos naturais** e a **falta de informação** sobre práticas sustentáveis. A ideia do site é mostrar que pequenas atitudes, como reciclar, economizar água e consumir com consciência, ajudam a preservar o meio ambiente e trazem impacto positivo para a sociedade.

## Objetivos

**Objetivo geral:** criar um site informativo e acessível que incentive práticas sustentáveis e mostre a importância de preservar o meio ambiente.

**Objetivos específicos:**

- divulgar informações sobre sustentabilidade;
- apresentar formas simples de preservar o meio ambiente;
- incentivar a reciclagem e o consumo consciente;
- divulgar projetos e iniciativas sustentáveis;
- garantir que o conteúdo seja acessível para pessoas com deficiência.

## Público-alvo

Pessoas interessadas em sustentabilidade, principalmente jovens e adultos a partir de 14 anos, de todo o Brasil. Pensamos em um site com informações simples de achar e de entender, e que também seja possível de usar por pessoas com deficiência.

## Páginas do site

| Página | Arquivo | O que tem |
| --- | --- | --- |
| Início | `index.html` | Apresentação do projeto, carrossel com 5 temas, nossa missão, cards "Como podemos ajudar?" e chamada final |
| Quem somos | `quemsomos.html` | Apresentação do projeto e da equipe |
| Serviços | `servicos.html` | O que o projeto oferece |
| Sustentabilidade | `sustentabilidade.html` | Conteúdo sobre sustentabilidade |
| Dicas | `dicas.html` | Dicas práticas para o dia a dia |
| Reciclagem | `reciclagem.html` | Como separar e descartar corretamente os resíduos |
| Contato | `contatos.html` | Informações e formulário de contato |

> **Observação:** durante o desenvolvimento, a quantidade e os nomes das páginas ficaram diferentes do que estava previsto no escopo inicial. A estrutura final é a da tabela acima. O escopo original está em [`docs/escopo.md`](docs/escopo.md).

## O que o site tem

- **Carrossel** de temas de sustentabilidade na página inicial, feito só com HTML e CSS (sem JavaScript).
- **Menu para celular** (hambúrguer) na página inicial, também só com HTML e CSS.
- **HTML semântico**, com `header`, `nav`, `section` e `footer`.
- **Acessibilidade:** texto alternativo (`alt`) nas imagens, `aria-label` no carrossel e nos botões, `aria-current` na página atual do menu e idioma da página definido como português do Brasil.
- Ilustrações em **SVG**, que carregam rápido e não perdem qualidade.

## Tecnologias e ferramentas

- HTML5
- CSS3
- Visual Studio Code
- Git e GitHub (versionamento do código)
- Railway e GitHub Pages (publicação do site)
- Trello (organização das tarefas)

## Estrutura de pastas

```text
.
├── css/
│   └── carrossel.css
├── docs/
│   └── escopo.md
├── img/
├── index.html
├── quemsomos.html
├── servicos.html
├── sustentabilidade.html
├── dicas.html
├── reciclagem.html
├── contatos.html
├── style.css
└── README.md
```

## Como rodar no seu computador

1. Clone o repositório:

   ```bash
   git clone https://github.com/brunoTibellio/U-UNICID-ADS-FRONTEND-2260028-N4-2-2026-NT-RAIZESSUSTENTAVEIS.git
   ```

2. Entre na pasta do projeto.
3. Abra o arquivo `index.html` no navegador (ou use a extensão **Live Server** do VS Code).

Não precisa instalar nada, porque o projeto usa só HTML e CSS.

## Equipe

| Integrante | O que fez |
| --- | --- |
| Bruno Gomes Tibellio | Desenvolvimento das páginas e criação do conteúdo |
| Mateus Lima Monteiro | Desenvolvimento das páginas e criação do conteúdo |
| Gabriel Marques Lopes | Criação do conteúdo e identidade visual |
| Murilo Domingues Saes | Criação do conteúdo e identidade visual |
| Erick Andrade de Péder | Testes e documentação |

## Documentação

- [Escopo do projeto](docs/escopo.md)

## Dados da disciplina

- **Disciplina:** Front-End para Web
- **Professor:** Paulo Fratta
- **Instituição:** UNICID
- **Atividade:** A2
- **Ano:** 2026
