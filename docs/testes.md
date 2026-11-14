# Plano e registro de testes — Raízes Sustentáveis

**Última atualização documental:** 14/11/2026

Este documento organiza os cenários de teste e deixa separado o que foi conferido no código do que ainda precisa ser executado em navegador. A presença de uma função no código não é tratada como aprovação automática do comportamento.

## 1. Verificação estática registrada

Em 14/11/2026, foram analisados os dez arquivos das páginas principais e duas páginas auxiliares.

| Critério | Resultado | Situação |
| --- | ---: | --- |
| Idioma `pt-BR` | 12/12 arquivos | Verificado no código |
| Link para pular ao conteúdo | 12/12 arquivos | Verificado no código |
| Um elemento `main` | 12/12 arquivos | Verificado no código |
| Referência a `js/script.js` | 12/12 arquivos | Verificado no código |
| Identificação da página atual | 12/12 arquivos | Verificado no código |
| Meta viewport | 12/12 arquivos | Verificado no código |

O detalhamento está em [evidencias-testes.md](evidencias-testes.md).

## 2. Testes funcionais — ainda precisam de execução manual

| Item | Como verificar | Situação |
| --- | --- | --- |
| Navegação entre páginas | Abrir cada item do menu e conferir o destino | A executar |
| Menu em celular | Reduzir a janela para largura móvel e abrir/fechar o menu | A executar |
| Formulário inválido | Enviar sem preencher e conferir mensagens e campos destacados | A executar |
| Formulário válido | Preencher os campos e observar o fluxo de confirmação | A executar |
| Rascunho local | Digitar no formulário, atualizar a página e conferir a recuperação | A executar |
| Filtro de conteúdos | Pesquisar um termo e alternar a categoria em `noticias.html` | A executar |
| Alto contraste | Ativar o controle, navegar e atualizar a página | A executar |
| Teclado | Usar Tab, Shift+Tab, Enter e Espaço sem mouse | A executar |
| Responsividade | Conferir celular, tablet e desktop | A executar |
| Mídia | Abrir `midia.html` e testar o conteúdo audiovisual externo | A executar |
| Projetos | Abrir `projetos.html` e conferir os links de participação/contato | A executar |
| Orçamento | Abrir `orcamento_hospedagem.html` e conferir os links e a justificativa | A executar |

## 3. Validação HTML e acessibilidade

1. Enviar cada uma das dez páginas principais ao [W3C Nu HTML Checker](https://validator.w3.org/nu/).
2. Registrar o resultado de cada página e corrigir os erros reportados.
3. Conferir textos alternativos, títulos, idioma, rótulos dos campos e foco visível.
4. Medir o contraste das combinações de texto e fundo com ferramenta apropriada.
5. Conferir zoom e navegação por teclado.

**Situação:** validação externa W3C e medição de contraste ainda não foram realizadas nesta atualização.

## 4. Publicação

Depois de integrar as alterações à branch principal:

- conferir o endereço HTTPS do GitHub Pages;
- testar links internos e navegação;
- verificar carregamento de imagens, CSS e JavaScript;
- confirmar separadamente se o endereço Railway continua ativo.

**Situação:** disponibilidade atual das publicações não confirmada nesta atualização.

## 5. Registro de evidências

Guardar as capturas e relatórios em `docs/evidencias/`. Para cada teste, registrar:

- data e horário;
- página ou recurso testado;
- navegador, dispositivo ou ferramenta;
- resultado observado;
- nome do arquivo de evidência.

Não marcar um teste como concluído sem execução e evidência correspondente.
