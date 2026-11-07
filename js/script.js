/* Raízes Sustentáveis — interações JavaScript */
(function () {
  "use strict";

  const CHAVE_RASCUNHO = "raizesContatoRascunho";
  const CHAVE_CONTRASTE = "raizesAltoContraste";

  // O armazenamento pode estar indisponível em alguns modos de navegação.
  function lerArmazenamento(chave, padrao) {
    try {
      return localStorage.getItem(chave) ?? padrao;
    } catch (erro) {
      return padrao;
    }
  }

  function salvarArmazenamento(chave, valor) {
    try {
      localStorage.setItem(chave, valor);
      return true;
    } catch (erro) {
      return false;
    }
  }

  function removerArmazenamento(chave) {
    try {
      localStorage.removeItem(chave);
    } catch (erro) {
      // A página continua utilizável mesmo sem acesso ao armazenamento.
    }
  }

  function configurarContraste() {
    const menu = document.querySelector(".menu-interno, .menu");
    if (!menu || document.getElementById("alternar-contraste")) return;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.id = "alternar-contraste";
    botao.className = "botao-contraste";
    botao.setAttribute("aria-label", "Alternar modo de alto contraste");
    menu.appendChild(botao);

    function aplicar(ativo) {
      document.body.classList.toggle("alto-contraste", ativo);
      botao.setAttribute("aria-pressed", String(ativo));
      botao.textContent = ativo ? "Contraste padrão" : "Alto contraste";
    }

    aplicar(lerArmazenamento(CHAVE_CONTRASTE, "false") === "true");

    botao.addEventListener("click", function () {
      const ativo = !document.body.classList.contains("alto-contraste");
      salvarArmazenamento(CHAVE_CONTRASTE, String(ativo));
      aplicar(ativo);
    });
  }

  function configurarFormulario() {
    const form = document.getElementById("form-contato");
    if (!form) return;

    const ids = ["nome", "email", "telefone", "visita", "mensagem"];
    let dados = {};

    try {
      dados = JSON.parse(lerArmazenamento(CHAVE_RASCUNHO, "{}")) || {};
    } catch (erro) {
      removerArmazenamento(CHAVE_RASCUNHO);
    }

    ids.forEach(function (id) {
      const campo = document.getElementById(id);
      if (!campo) return;

      if (typeof dados[id] === "string") campo.value = dados[id];
      campo.addEventListener("input", salvarRascunho);
    });

    function salvarRascunho() {
      const rascunho = {};
      ids.forEach(function (id) {
        const campo = document.getElementById(id);
        if (campo) rascunho[id] = campo.value;
      });
      salvarArmazenamento(CHAVE_RASCUNHO, JSON.stringify(rascunho));
    }

    function validarCampo(id) {
      const campo = document.getElementById(id);
      const erro = document.getElementById("erro-" + id);
      if (!campo) return true;

      let valido = campo.value.trim() !== "" && campo.checkValidity();

      if (id === "nome") {
        const partes = campo.value.trim().split(/\s+/).filter(Boolean);
        valido = valido && partes.length >= 2;
      }

      if (id === "telefone") {
        const quantidade = campo.value.replace(/\D/g, "").length;
        valido = valido && quantidade >= 10 && quantidade <= 13;
      }

      campo.classList.toggle("campo-invalido", !valido);
      campo.setAttribute("aria-invalid", String(!valido));

      if (erro) {
        const mensagens = {
          nome: "Informe nome e sobrenome.",
          email: "Digite um e-mail válido.",
          telefone: "Informe um telefone com DDD.",
          mensagem: "Escreva uma mensagem antes de continuar."
        };
        erro.textContent = valido ? "" : mensagens[id];
      }

      return valido;
    }

    ["nome", "email", "telefone", "mensagem"].forEach(function (id) {
      const campo = document.getElementById(id);
      if (!campo) return;
      campo.addEventListener("input", function () {
        if (campo.getAttribute("aria-invalid") === "true") validarCampo(id);
      });
    });

    form.addEventListener("submit", function (evento) {
      evento.preventDefault();

      let primeiroErro = null;
      ["nome", "email", "telefone", "mensagem"].forEach(function (id) {
        const valido = validarCampo(id);
        const campo = document.getElementById(id);
        if (!valido && !primeiroErro) primeiroErro = campo;
      });

      const aviso = document.getElementById("form-aviso");

      if (primeiroErro) {
        if (aviso) aviso.textContent = "Revise os campos destacados antes de continuar.";
        primeiroErro.focus();
        return;
      }

      const envio = {};
      ids.forEach(function (id) {
        const campo = document.getElementById(id);
        if (campo) envio[id] = campo.value.trim();
      });

      const salvou = salvarArmazenamento("raizesContatoDemo", JSON.stringify(envio));
      removerArmazenamento(CHAVE_RASCUNHO);

      if (!salvou) {
        if (aviso) {
          aviso.textContent = "Não foi possível salvar os dados neste navegador. Tente novamente ou habilite o armazenamento local.";
        }
        return;
      }

      window.location.href = "obrigado.html";
    });
  }

  function configurarFiltro() {
    const busca = document.getElementById("busca-conteudo");
    const categoria = document.getElementById("filtro-categoria");
    const itens = Array.from(document.querySelectorAll(".item-conteudo"));
    const status = document.getElementById("resultado-filtro");
    const vazio = document.getElementById("mensagem-vazia");

    if (!busca || !categoria || !itens.length) return;

    function filtrar() {
      const termo = busca.value.trim().toLocaleLowerCase("pt-BR");
      let total = 0;

      itens.forEach(function (item) {
        const texto = item.textContent.toLocaleLowerCase("pt-BR");
        const mostrar = texto.includes(termo) &&
          (categoria.value === "todos" || item.dataset.categoria === categoria.value);
        item.hidden = !mostrar;
        if (mostrar) total++;
      });

      if (status) {
        status.textContent = total + (total === 1
          ? " conteúdo encontrado."
          : " conteúdos encontrados.");
      }
      if (vazio) vazio.hidden = total > 0;
    }

    busca.addEventListener("input", filtrar);
    categoria.addEventListener("change", filtrar);
    filtrar();
  }

  document.addEventListener("DOMContentLoaded", function () {
    configurarContraste();
    configurarFormulario();
    configurarFiltro();
  });
})();