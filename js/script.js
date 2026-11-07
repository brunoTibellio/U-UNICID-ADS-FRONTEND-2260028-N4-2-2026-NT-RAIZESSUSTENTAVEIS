/* Raízes Sustentáveis — interações JavaScript */
(function () {
  "use strict";
  const CHAVE_RASCUNHO = "raizesContatoRascunho";
  const CHAVE_CONTRASTE = "raizesAltoContraste";

  function configurarContraste() {
    const menu = document.querySelector(".menu-interno, .menu");
    if (!menu || document.getElementById("alternar-contraste")) return;
    const botao = document.createElement("button");
    botao.type = "button";
    botao.id = "alternar-contraste";
    botao.className = "botao-contraste";
    menu.appendChild(botao);

    function aplicar(ativo) {
      document.body.classList.toggle("alto-contraste", ativo);
      botao.setAttribute("aria-pressed", String(ativo));
      botao.textContent = ativo ? "Contraste padrão" : "Alto contraste";
    }
    aplicar(localStorage.getItem(CHAVE_CONTRASTE) === "true");
    botao.addEventListener("click", function () {
      const ativo = !document.body.classList.contains("alto-contraste");
      localStorage.setItem(CHAVE_CONTRASTE, String(ativo));
      aplicar(ativo);
    });
  }

  function configurarFormulario() {
    const form = document.getElementById("form-contato");
    if (!form) return;
    const ids = ["nome", "email", "telefone", "visita", "mensagem"];
    const dados = JSON.parse(localStorage.getItem(CHAVE_RASCUNHO) || "{}");
    ids.forEach(function (id) {
      const campo = document.getElementById(id);
      if (!campo) return;
      if (dados[id]) campo.value = dados[id];
      campo.addEventListener("input", salvarRascunho);
    });

    function salvarRascunho() {
      const rascunho = {};
      ids.forEach(function (id) {
        const campo = document.getElementById(id);
        if (campo) rascunho[id] = campo.value;
      });
      localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(rascunho));
    }

    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      let primeiroErro = null;
      const regras = {
        nome: "Informe nome e sobrenome.",
        email: "Digite um e-mail válido.",
        telefone: "Informe um telefone com DDD.",
        mensagem: "Escreva uma mensagem antes de continuar."
      };
      ["nome", "email", "telefone", "mensagem"].forEach(function (id) {
        const campo = document.getElementById(id);
        const erro = document.getElementById("erro-" + id);
        let valido = campo.value.trim() !== "" && campo.checkValidity();
        if (id === "nome" && campo.value.trim().split(/\\s+/).length < 2) valido = false;
        if (id === "telefone" && campo.value.replace(/\\D/g, "").length < 10) valido = false;
        campo.classList.toggle("campo-invalido", !valido);
        campo.setAttribute("aria-invalid", String(!valido));
        if (erro) erro.textContent = valido ? "" : regras[id];
        if (!valido && !primeiroErro) primeiroErro = campo;
      });
      if (primeiroErro) {
        primeiroErro.focus();
        const aviso = document.getElementById("form-aviso");
        if (aviso) aviso.textContent = "Revise os campos destacados antes de continuar.";
        return;
      }
      const envio = {};
      ids.forEach(function (id) {
        const campo = document.getElementById(id);
        if (campo) envio[id] = campo.value.trim();
      });
      localStorage.setItem("raizesContatoDemo", JSON.stringify(envio));
      localStorage.removeItem(CHAVE_RASCUNHO);
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
      status.textContent = total + (total === 1 ? " conteúdo encontrado." : " conteúdos encontrados.");
      vazio.hidden = total > 0;
    }
    busca.addEventListener("input", filtrar);
    categoria.addEventListener("change", filtrar);
  }

  document.addEventListener("DOMContentLoaded", function () {
    configurarContraste();
    configurarFormulario();
    configurarFiltro();
  });
})();