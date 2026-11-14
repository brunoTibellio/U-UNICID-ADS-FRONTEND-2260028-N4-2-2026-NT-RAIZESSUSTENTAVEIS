# Evidências de testes — Raízes Sustentáveis

**Data da verificação estática:** 14/11/2026  
**Escopo analisado:** 12 arquivos HTML do repositório na branch principal.

Este documento separa os resultados que puderam ser conferidos diretamente no código dos testes que ainda dependem de execução em navegador ou ferramenta externa. Não foram criadas capturas de tela fictícias nem resultados de ferramentas que não foram executadas.

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

**Resultado:** todos os critérios estáticos listados foram encontrados nos 12 arquivos analisados. Isso confirma a presença da marcação no código, não o funcionamento visual ou comportamental em todos os navegadores.

## 2. Arquivos incluídos

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

## 3. Evidências documentais disponíveis

- [Revisão página por página](revisao-pagina-a-pagina.md): registra a revisão estática e as correções descritas para cada página.
- [Plano e registro de testes](testes.md): apresenta os cenários funcionais, de acessibilidade e publicação.
- [Relatório Lighthouse](relatorio-lighthouse.md): registra os resultados apresentados na captura do relatório de 31/10/2026.
- [Repositório](https://github.com/brunoTibellio/U-UNICID-ADS-FRONTEND-2260028-N4-2-2026-NT-RAIZESSUSTENTAVEIS): permite consultar os arquivos e o histórico de versões.

## 4. Testes que ainda precisam de evidência de execução

| Teste | Evidência recomendada | Situação |
| --- | --- | --- |
| Navegação entre páginas | Capturas ou gravação dos links principais funcionando | A executar |
| Menu em celular | Captura do menu aberto e fechado em viewport móvel | A executar |
| Formulário inválido | Captura das mensagens e campos destacados | A executar |
| Formulário e rascunho local | Captura dos campos preenchidos antes e depois de atualizar a página | A executar |
| Busca e filtro de notícias | Captura do termo pesquisado e dos resultados filtrados | A executar |
| Alto contraste | Capturas antes e depois de ativar o recurso | A executar |
| Teclado | Registro da navegação por Tab, Shift+Tab, Enter e Espaço | A executar |
| Responsividade | Capturas em celular, tablet e desktop | A executar |
| W3C Nu HTML Checker | Relatório ou capturas dos resultados de cada página | A executar |
| Contraste WCAG | Resultado da ferramenta de contraste para as combinações utilizadas | A executar |
| Publicação | Abertura do endereço publicado e teste dos links e recursos | A executar |

## 5. Como anexar novas evidências

Quando os testes forem realizados, salvar as capturas nesta pasta, por exemplo:

```text
docs/
└── evidencias/
    ├── menu-mobile.png
    ├── formulario-validacao.png
    ├── rascunho-localstorage.png
    ├── filtro-noticias.png
    ├── alto-contraste.png
    ├── responsividade-desktop.png
    ├── responsividade-mobile.png
    └── validacao-w3c/
```

Usar nomes objetivos e registrar no arquivo `testes.md` a data, o navegador ou ferramenta utilizada e o resultado observado. Só alterar o status para **Concluído** depois de guardar a evidência correspondente.

## 6. Limites desta verificação

- A checagem foi feita sobre a marcação dos arquivos, sem simular cliques ou executar o site em navegador.
- O relatório Lighthouse registrado separadamente é uma evidência visual fornecida para documentação; não representa uma validação W3C.
- Não foi realizada validação externa W3C Nu HTML Checker nesta etapa.
- Não foi feita medição de contraste WCAG nesta etapa.
- A disponibilidade atual das plataformas de publicação precisa ser conferida separadamente.
- A presença de um recurso no código não comprova, sozinha, que ele funciona corretamente em todos os dispositivos.
