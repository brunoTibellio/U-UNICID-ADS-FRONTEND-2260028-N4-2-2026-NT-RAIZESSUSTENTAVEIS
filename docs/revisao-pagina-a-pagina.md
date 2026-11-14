# Revisão página por página — Raízes Sustentáveis

**Revisão estática do código:** 07/11/2026  
**Branch revisada:** `feat/finalizacao-a1`

A revisão foi feita nos arquivos HTML e conferiu os caminhos de navegação e as referências aos arquivos CSS e JavaScript. Essa análise do código não substitui a conferência visual no navegador nem a validação feita pelo W3C.

## Resultado por página

| Página | Conteúdo mantido / finalidade | Correções aplicadas nesta revisão |
| --- | --- | --- |
| Início — `index.html` | Hero com GIF original, carrossel de cinco temas, missão, cards e chamada final | Link de salto, estrutura principal única, menu/rodapé com destinos completos, item atual, idioma e carregamento do JavaScript |
| Quem somos — `quemsomos.html` | Apresentação do projeto e da equipe | Link de salto, identificação do conteúdo principal, navegação completa e item atual |
| Serviços — `servicos.html` | Serviços e orientações do projeto | Link de salto, identificação do conteúdo principal, navegação completa e item atual |
| Sustentabilidade — `sustentabilidade.html` | Conceitos e práticas sustentáveis | Link de salto, identificação do conteúdo principal, navegação completa e item atual |
| Dicas — `dicas.html` | Dicas de hábitos sustentáveis | Link de salto, identificação do conteúdo principal, navegação completa e item atual |
| Reciclagem — `reciclagem.html` | Cores da coleta seletiva e boas práticas | Link de salto, identificação do conteúdo principal, navegação completa e item atual |
| Projetos — `projetos.html` | Ideias de ações comunitárias e educativas | Navegação completa, item atual, link de salto e simplificação da chamada de participação para evitar repetição |
| Conteúdos — `noticias.html` | Notícias ambientais, busca e filtro por categoria | Navegação completa, item atual, link de salto e preservação dos controles de filtro |
| Mídia — `midia.html` | Vídeo e links de educação ambiental | Navegação completa, item atual, link de salto e conteúdo principal identificado |
| Contato — `contatos.html` | Formulário demonstrativo | Mensagens de erro associadas aos campos por `aria-describedby`, navegação completa, link de salto e item atual |
| Hospedagem — `orcamento_hospedagem.html` | Comparação GitHub Pages/Railway e justificativa | Navegação completa, item atual, link de salto e conteúdo principal identificado |
| Confirmação — `obrigado.html` | Confirmação de salvamento local | Link de salto com destino válido, item Contato marcado como atual e navegação/rodapé completos |

## Correções feitas em várias páginas

- O idioma foi padronizado como `pt-BR` nos arquivos HTML revisados.
- Padronizados os 11 destinos do menu e do rodapé: dez páginas de conteúdo e a página complementar de hospedagem.
- Adicionado link "Pular para o conteúdo" nas páginas que ainda não tinham esse recurso.
- Identificado o conteúdo principal com `id="conteudo-principal"`.
- Ajustado o menu para recolher em larguras menores, evitando que os 11 destinos fiquem comprimidos na mesma linha.
- Melhorados os estados de foco e o modo de alto contraste também na página inicial.
- Corrigida a validação de nome e telefone no JavaScript; agora as expressões regulares verificam espaços e dígitos corretamente.
- Adicionado tratamento para falhas ou dados inválidos no `localStorage`, sem impedir o restante da página de funcionar.
- Associadas as mensagens de erro do formulário aos respectivos campos.

## O que foi conferido diretamente no código

- As 12 páginas listadas acima carregam `js/script.js`.
- As páginas internas têm um elemento principal identificado; a página inicial também possui um único elemento `main`.
- Menu e rodapé apresentam os mesmos 11 destinos.
- Cada página tem um único item atual no menu, incluindo a página de confirmação, que aponta para Contato.
- Os links HTML internos examinados apontam para arquivos previstos no projeto.

## Verificações que dependem do navegador ou de ferramentas externas

- Validar cada página no W3C Nu HTML Checker e corrigir os erros que forem reportados.
- Conferir visualmente desktop, tablet e celular, especialmente o menu no ponto de quebra de 1250 px.
- Testar Tab, Shift+Tab, Enter e Espaço.
- Medir contraste AA; o modo de alto contraste é um recurso adicional e não substitui a verificação AA do tema padrão.
- Testar envio inválido/válido, recuperação do rascunho e preferência de contraste em navegador real.
- Conferir reprodução do vídeo externo e disponibilidade da publicação depois da integração do Pull Request.

## O que foi mantido

Nenhum arquivo da pasta `img/` foi alterado nesta revisão. O carrossel, os textos principais e a identidade visual foram preservados. As mudanças registradas ficaram concentradas na navegação, acessibilidade, responsividade, validação e documentação.


## Atualização de Conteúdo, Imagens, Menu e Acessibilidade (AV A1 2-2026)

- **Menu Superior Otimizado (`.nav-dropdown`)**: Os 11 itens de navegação foram organizados em 5 links principais visíveis + menu suspenso acessível **"Mais ▾"** (com ponte de hover invisível `.nav-dropdown-menu::before`, atraso de fechamento de `350ms` e fixação por clique/teclado), evitando quebra de layout no topo.
- **Modo de Alto Contraste WCAG AAA (`.alto-contraste`)**: Fundo preto absoluto (`#000000`), textos e bordas de `2px` em branco puro (`#ffffff`), destaques, links e foco visível em amarelo de alto contraste (`#ffff00`), com persistência em `localStorage` e atalho `Alt + C`.
- **Audiodescrição em Português (`Web Speech API`)**: Botão global `🔊 Audiodescrição` no topo (atalho `Alt + A`), botões dedicados `.btn-audiodescricao-item[data-narra]` nas imagens, ilustrações, carrossel e vídeo, além de leitura automática das descrições visuais (`alt`) de todas as imagens.
- **Novas Ilustrações SVG Autoria Própria em `img/`**:
  - `img/equipe-comunidade.svg` (Quem Somos e Contatos)
  - `img/servicos-educacao.svg` (Serviços)
  - `img/pilares-sustentabilidade.svg` (Sustentabilidade)
  - `img/energia-solar-agua.svg` (Dicas Sustentáveis)
  - `img/coleta-seletiva.svg` (Reciclagem)
  - `img/horta-comunitaria.svg` (Projetos e Iniciativas)
  - `img/hospedagem-verde.svg` (Orçamento de Hospedagem)
- **Expansão de Conteúdo em Todas as Páginas**: Inclusão de blocos ilustrados (`.destaque-ilustrado`), cartões com miniaturas (`.card-pagina__img`), tabelas comparativas acessíveis (`.tabela-sustentavel`), seções de **Atitudes que Transformam** e **Dicas Rápidas** na `index.html`, e novas matérias categorizadas em `noticias.html` (incluindo a categoria *Consumo consciente*).
