# Evidências de testes — Raízes Sustentáveis

**Data dos registros:** 14/11/2026  
**Escopo da verificação estática:** 12 arquivos HTML do repositório na branch principal.

Este documento reúne somente as verificações realizadas e os resultados informados para o projeto.

## 1. Verificação estática dos arquivos HTML

Foram analisados os dez arquivos das páginas principais e duas páginas auxiliares.

| Verificação no código | Resultado | Critério |
| --- | ---: | --- |
| Idioma declarado como `pt-BR` | 12/12 | Presença de `lang="pt-BR"` no elemento HTML |
| Link para pular ao conteúdo | 12/12 | Presença do link de salto |
| Elemento principal | 12/12 | Um elemento `main` identificado por página |
| Carregamento do JavaScript | 12/12 | Referência a `js/script.js` |
| Página atual identificada | 12/12 | Um `aria-current="page"` por arquivo |
| Meta viewport | 12/12 | Configuração de viewport para dispositivos |

**Resultado:** todos os critérios estáticos listados foram encontrados nos 12 arquivos analisados.

## 2. Arquivos incluídos na verificação estática

**Páginas principais:**
- `index.html`
- `quemsomos.html`
- `servicos.html`
- `sustentabilidade.html`
- `dicas.html`
- `reciclagem.html`
- `projetos.html`
- `noticias.html`
- `midia.html`
- `contatos.html`

**Páginas auxiliares:**
- `orcamento_hospedagem.html`
- `obrigado.html`

## 3. Testes funcionais

Os testes funcionais do projeto foram executados e apresentaram resultados satisfatórios, conforme informado pelo responsável pelo projeto.

| Teste | Resultado |
| --- | --- |
| Navegação entre páginas | Executado — aprovado |
| Menu em celular | Executado — aprovado |
| Validação de formulário inválido | Executado — aprovado |
| Envio de formulário válido | Executado — aprovado |
| Salvamento e recuperação de rascunho local | Executado — aprovado |
| Busca e filtro de notícias | Executado — aprovado |
| Recurso de alto contraste | Executado — aprovado |
| Navegação por teclado | Executado — aprovado |
| Responsividade em celular, tablet e desktop | Executado — aprovado |
| Conteúdo audiovisual da página Mídia | Executado — aprovado |
| Links da página Projetos | Executado — aprovado |
| Links e informações da página de Orçamento | Executado — aprovado |

## 4. Validação W3C Nu HTML Checker

**Data do registro:** 14/11/2026  
**Resultado informado:** nenhum erro ou aviso a exibir.

A validação foi realizada no [W3C Nu HTML Checker](https://validator.w3.org/nu/). Conforme informado pelo responsável pelo projeto, o validador apresentou o resultado de que não havia erros ou avisos.

O relatório ou a captura da validação não foi disponibilizado para anexação. Por isso, este registro documenta o resultado informado, sem afirmar que todos os 12 arquivos HTML foram submetidos individualmente.

## 5. Relatório Lighthouse

O relatório Lighthouse está documentado em [relatorio-lighthouse.md](relatorio-lighthouse.md), com as pontuações apresentadas na captura fornecida:

- Desempenho: 100
- Acessibilidade: 94
- Práticas recomendadas: 100
- SEO: 100

## 6. Referências do projeto

- [Diário de bordo](diario-de-bordo.md)
- [Escopo do projeto](escopo.md)
- [Plano e registro de testes](testes.md)
- [Revisão página por página](revisao-pagina-a-pagina.md)
- [Repositório Raízes Sustentáveis](https://github.com/brunoTibellio/U-UNICID-ADS-FRONTEND-2260028-N4-2-2026-NT-RAIZESSUSTENTAVEIS)
