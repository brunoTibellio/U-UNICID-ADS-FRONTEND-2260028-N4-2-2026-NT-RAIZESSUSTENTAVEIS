# Plano e registro de testes — Raízes Sustentáveis

Este documento separa o que foi implementado do que ainda precisa ser verificado. Nenhum teste externo é declarado como aprovado sem execução.

## Verificações funcionais

| Item | Como verificar | Situação |
| --- | --- | --- |
| Navegação entre páginas | Abrir cada item do menu e conferir o destino | A executar |
| Menu em celular | Reduzir a janela para largura de celular e abrir/fechar o menu | A executar |
| Formulário inválido | Enviar sem preencher e conferir mensagens e bordas | A executar |
| Formulário válido | Preencher nome, e-mail, telefone e mensagem | A executar |
| Rascunho local | Digitar no formulário, atualizar a página e conferir se os campos foram recuperados | A executar |
| Filtro de conteúdos | Pesquisar termo e alternar categoria em `noticias.html` | A executar |
| Alto contraste | Ativar o controle, navegar e atualizar a página | A executar |
| Teclado | Usar Tab, Shift+Tab, Enter e Espaço sem mouse | A executar |
| Responsividade | Conferir celular, tablet e desktop | A executar |
| Mídia incorporada | Abrir `midia.html` e testar a incorporação e o link alternativo | A executar |

## Validação HTML e acessibilidade

1. Enviar cada uma das dez páginas principais ao [W3C Nu HTML Checker](https://validator.w3.org/nu/).
2. Corrigir erros de marcação e repetir a validação.
3. Conferir textos alternativos, títulos, idioma, rótulos dos campos e foco visível.
4. Verificar contraste AA com ferramenta apropriada.
5. Conferir se o conteúdo continua utilizável com zoom e navegação por teclado.

## Publicação

Após integrar as alterações à branch principal:
- conferir a publicação HTTPS no GitHub Pages;
- testar todos os links internos;
- verificar se imagens, CSS e JavaScript carregam;
- confirmar separadamente o endereço do Railway.

## Evidências para apresentação

Registrar capturas em desktop e celular, formulário inválido e válido, rascunho recuperado, filtro, alto contraste e repositório com commits/PR. Atualizar as situações acima somente depois de executar cada teste.
