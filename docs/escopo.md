# Escopo do Projeto — Raízes Sustentáveis

**Atividade:** A2 — Front-End para Web  
**Instituição:** UNICID  
**Professor:** Paulo Fratta  
**Data do escopo inicial registrada:** 26/09/2026  
**Atualização documental:** 14/11/2026

## 1. Identificação

**Projeto:** Raízes Sustentáveis

**Integrantes:**
- Murilo Domingues Saes
- Bruno Gomes Tibellio
- Gabriel Marques Lopes
- Mateus Lima Monteiro
- Erick Andrade de Péder

## 2. Contexto e justificativa

O site aborda problemas relacionados ao descarte incorreto de resíduos, ao desperdício de recursos naturais e à falta de informação sobre práticas sustentáveis no dia a dia.

A proposta é reunir informações acessíveis e incentivar atitudes como reciclar, economizar água, reduzir o desperdício e consumir de forma consciente. O projeto tem caráter educativo e busca aproximar o tema da rotina das pessoas.

## 3. Objetivos

**Objetivo geral:** desenvolver um site informativo e educativo que incentive práticas sustentáveis e conscientize sobre a preservação ambiental.

**Objetivos específicos:**
- Divulgar informações sobre sustentabilidade.
- Apresentar atitudes simples que podem ser aplicadas no cotidiano.
- Incentivar a reciclagem e o consumo consciente.
- Reunir projetos, notícias e materiais educativos.
- Considerar acessibilidade e navegação em diferentes dispositivos.

## 4. Público-alvo

Pessoas interessadas em sustentabilidade e preservação ambiental, com foco em jovens e adultos. O conteúdo é destinado ao público brasileiro e utiliza linguagem direta e acessível.

## 5. Escopo funcional — versão implementada

| Página | Arquivo | Finalidade |
| --- | --- | --- |
| Início | `index.html` | Apresentação do projeto, carrossel, missão e atalhos |
| Quem somos | `quemsomos.html` | História, propósito e equipe |
| Serviços | `servicos.html` | Conteúdos e orientações oferecidos |
| Sustentabilidade | `sustentabilidade.html` | Conceitos e pilares da sustentabilidade |
| Dicas | `dicas.html` | Hábitos sustentáveis no cotidiano |
| Reciclagem | `reciclagem.html` | Separação e destinação de resíduos |
| Projetos | `projetos.html` | Ideias de ações comunitárias e educativas |
| Conteúdos | `noticias.html` | Notícias com busca e filtro por categoria |
| Mídia | `midia.html` | Conteúdo audiovisual e materiais externos |
| Contato | `contatos.html` | Formulário demonstrativo com validação |

**Páginas auxiliares:** `orcamento_hospedagem.html` documenta a comparação de hospedagem; `obrigado.html` apresenta a confirmação da interação com o formulário. Essas páginas não entram na contagem das dez páginas principais.

## 6. Funcionalidades previstas e implementadas no código

- Navegação entre as dez páginas principais.
- Menu adaptado para telas menores.
- Recurso de alto contraste com preferência armazenada no navegador.
- Recursos de audiodescrição.
- Formulário demonstrativo com validação em JavaScript.
- Salvamento e recuperação local do rascunho do formulário por `localStorage`.
- Busca e filtro de conteúdos na página de notícias.
- Carrossel na página inicial.
- Link para pular ao conteúdo, foco visível e estrutura semântica.

**Limite importante:** o formulário é demonstrativo. Os dados são armazenados localmente no navegador e não são enviados para servidor, e-mail ou para a equipe.

## 7. Requisitos não funcionais

- **Acessibilidade:** textos alternativos, estrutura semântica, foco visível, navegação por teclado e recursos de contraste/audiodescrição.
- **Responsividade:** adaptação para computadores, tablets e celulares.
- **Desempenho:** organização de arquivos e uso de imagens adequadas à experiência do site.
- **Usabilidade:** menus e conteúdos organizados de forma clara.
- **SEO básico:** títulos, idioma e descrições adequadas nas páginas.

A presença desses recursos no código deve ser complementada pelos testes descritos em [testes.md](testes.md); não representa, por si só, aprovação de acessibilidade ou validação externa.

## 8. Identidade visual e conteúdo

- **Tom de voz:** educativo, simples, positivo e informativo.
- **Cores:** tons de verde e branco, associados à natureza.
- **Conteúdo:** sustentabilidade, reciclagem, consumo consciente, preservação e iniciativas comunitárias.
- **Imagens:** materiais relacionados ao tema, com textos alternativos quando aplicável.

## 9. Tecnologias e ferramentas

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git e GitHub
- W3C Nu HTML Checker (previsto para validação externa)
- GitHub Pages e Railway como opções de publicação registradas

## 10. Divisão de tarefas registrada

| Integrante(s) | Participação registrada |
| --- | --- |
| Bruno Gomes Tibellio e Mateus Lima Monteiro | Desenvolvimento das páginas |
| Bruno, Mateus, Gabriel e Murilo | Criação de conteúdo |
| Murilo Domingues Saes e Gabriel Marques Lopes | Identidade visual |
| Erick Andrade de Péder | Testes, documentação e identidade visual |

A divisão acima reproduz o registro de participação disponível no documento do projeto; não substitui um histórico individual de commits ou entregas.

## 11. Cronograma de referência

O planejamento inicial registrou as seguintes datas:

| Data | Etapa prevista |
| --- | --- |
| 01/10/2026 | Desenvolvimento |
| 08/10/2026 | Criação do conteúdo |
| 15/10/2026 | Identidade visual |
| 17/10/2026 | Testes e documentação |

As datas representam o cronograma planejado, não uma comprovação isolada da conclusão de cada atividade.

## 12. Riscos e restrições

- Prazo acadêmico limitado.
- Necessidade de conciliar as tarefas da equipe.
- Compatibilidade entre diferentes dispositivos e navegadores.
- Limites de acessibilidade que precisam de avaliação prática.
- Dependência de serviços externos para conteúdo audiovisual e publicação.
- O formulário não possui backend nem transmissão de dados.

## 13. Critérios de aceitação

- Dez páginas principais disponíveis e interligadas.
- Menu e links internos com destinos corretos.
- Formulário demonstrativo com validação e indicação clara de seu limite.
- Recursos de acessibilidade presentes e testados.
- Layout utilizável em diferentes tamanhos de tela.
- Imagens com textos alternativos quando necessário.
- Validação HTML externa realizada e resultados registrados.
- Documentação organizada na pasta `docs/`.

## 14. Histórico do planejamento e ajustes

O escopo inicial de 26/09/2026 previa páginas com nomes como Sobre, Impacto, Acessibilidade e Galeria. Durante a implementação, a organização foi ajustada para a estrutura de dez páginas descrita na seção 5. O registro inicial foi consolidado nesta versão para evitar que o planejamento antigo seja confundido com a estrutura efetivamente presente no repositório.

A página `projetos.html` apresenta formas de participação e apoio por compartilhamento de conteúdo, sugestões e interesse em voluntariado. O site não processa doações financeiras.

## 15. Documentos relacionados

- [Diário de bordo](diario-de-bordo.md)
- [Orçamento de hospedagem](orcamento.md)
- [Plano e registro de testes](testes.md)
- [Evidências de testes](evidencias-testes.md)
- [Revisão página por página](revisao-pagina-a-pagina.md)
- [Diário de uso de IA](diario-ia.md)
