/* Raízes Sustentáveis — interações JavaScript, Menu Dropdown e Audiodescrição */
(function () {
  "use strict";

  const CHAVE_RASCUNHO = "raizesContatoRascunho";
  const CHAVE_CONTRASTE = "raizesAltoContraste";

  // Roteiros visuais detalhados de audiodescrição por página para pessoas cegas
  const AUDIODESCRICOES_PAGINAS = {
    "index.html":
      "Audiodescrição da página Inicial do site Raízes Sustentáveis. A identidade visual do site utiliza tons de verde-floresta profundo, verde-folha vibrante e fundos claros naturais, transmitindo equilíbrio ecológico. No topo, há uma barra de navegação flutuante em verde-escuro com o logotipo à esquerda, os links principais ao centro, o menu Mais para páginas complementares, os botões de audiodescrição e alto contraste e o botão Fale Conosco à direita. O banner de abertura apresenta ao fundo uma animação de floresta tropical iluminada por feixes de sol entre as árvores, com o título Bem-Vindo em destaque. Abaixo, a página traz um carrossel interativo com cinco ilustrações sobre reciclagem, consumo consciente, economia de água, preservação ambiental e iniciativas sustentáveis. Na sequência, a seção Nossa Missão exibe a fotografia aproximada de uma pequena muda verde brotando da terra fértil. Por fim, três cartões brancos destacam preservação, reciclagem e consumo consciente, seguidos de uma chamada para ação em fundo verde-escuro e o rodapé institucional.",
    "quemsomos.html":
      "Audiodescrição da página Quem Somos. O topo apresenta um painel em degradê verde-floresta com o título Quem Somos em letras brancas. O conteúdo principal, sobre fundo verde-claro suave, está dividido em três blocos: o primeiro conta a história do projeto criado por estudantes da UNICID; o segundo exibe três cartões brancos lado a lado com ícones de alvo para Missão, olhos para Visão e coração verde para Valores; o terceiro bloco apresenta a lista nominal dos cinco integrantes da equipe.",
    "servicos.html":
      "Audiodescrição da página Serviços. Abaixo do cabeçalho em verde-escuro, a seção principal exibe três cartões ilustrados com ícones de livros para Conteúdo Educativo, bússola para Orientação Prática e aperto de mãos para Parcerias, seguidos por uma lista de quatro formas práticas pelas quais o projeto apoia a comunidade.",
    "sustentabilidade.html":
      "Audiodescrição da página Sustentabilidade. O cabeçalho visual em degradê verde apresenta o conceito de equilíbrio entre gerações. No corpo da página, há uma explicação sobre o que é sustentabilidade e três cartões representando os pilares Ambiental, com ícone do planeta Terra; Social, com ícone de grupo de pessoas; e Econômico, com ícone de ciclo sustentável.",
    "dicas.html":
      "Audiodescrição da página Dicas Sustentáveis. A página apresenta uma grade visual com seis cartões brancos sobre fundo claro, cada um com um ícone circular verde-claro no topo: uma gota d'água para Economize Água, um raio para Use Menos Energia, uma sacola para Consuma com Consciência, uma salada para Reduza o Desperdício, uma pessoa caminhando para Mobilidade Verde e um celular para Evite o Lixo Eletrônico.",
    "reciclagem.html":
      "Audiodescrição da página Reciclagem. A página destaca as seis cores oficiais da coleta seletiva organizadas em duas colunas de cartões brancos. Cada cartão possui à esquerda um círculo preenchido na cor correspondente: Azul para papel, Verde para vidro, Vermelho para plástico, Amarelo para metal, Marrom para resíduos orgânicos e Cinza para resíduos não recicláveis. Abaixo, uma lista apresenta boas práticas de higienização e descarte.",
    "projetos.html":
      "Audiodescrição da página Projetos e Iniciativas. A página apresenta quatro cartões em grade com propostas de mobilização comunitária: Mutirão de Reciclagem, Horta Comunitária, Uso Consciente da Água e Educação Ambiental. Abaixo, um quadro destacado em verde-claro convida o visitante a participar como voluntário ou enviar sugestões pelo formulário de contato.",
    "noticias.html":
      "Audiodescrição da página Conteúdos e Notícias. Acima da lista de notícias, há um painel de busca e filtragem em fundo verde-claro com um campo de pesquisa por texto e um seletor de categorias. Abaixo, os cartões de notícias oficiais exibem data, órgão ambiental responsável, título, resumo e link para a matéria completa.",
    "midia.html":
      "Audiodescrição da página Mídia e Aprendizagem. A página contém um reprodutor de vídeo em formato widescreen mostrando, em câmera acelerada de cinco segundos sobre fundo escuro, o botão de uma flor amarela de calêndula abrindo suas pétalas até revelar seu centro alaranjado. Logo abaixo do vídeo há um painel dedicado com a transcrição visual completa e controles de audiodescrição sincronizada, além de dois cartões com links para a ONU e o Ministério do Meio Ambiente.",
    "contatos.html":
      "Audiodescrição da página de Contato. Centralizado na página, um cartão branco apresenta o formulário acadêmico demonstrativo com cinco campos: Nome completo, E-mail, Telefone com DDD, Data da visita ou interesse e Mensagem, acompanhados de instruções acessíveis e botão de envio em verde-escuro.",
    "orcamento_hospedagem.html":
      "Audiodescrição da página Orçamento de Hospedagem. A página compara visualmente duas plataformas em cartões lado a lado: GitHub Pages, com ícone do mascote Octocat e custo zero para o site estático, e Railway, com ícone de trem para aplicações com servidor. Abaixo, um bloco em destaque apresenta a justificativa técnica recomendando o GitHub Pages.",
    "obrigado.html":
      "Audiodescrição da página de Confirmação. O painel central confirma com um ícone de verificação verde que a mensagem de demonstração foi salva localmente no navegador e oferece um botão para retornar à página inicial."
  };

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

  // Motor de Síntese de Voz (Web Speech API) para Audiodescrição
  const leitorVoz = {
    suportado: "speechSynthesis" in window && "SpeechSynthesisUtterance" in window,
    falando: false,
    botaoAtivo: null,
    fila: [],
    indiceFila: 0,

    obterVozPtBr: function () {
      if (!this.suportado) return null;
      const vozes = window.speechSynthesis.getVoices() || [];
      return (
        vozes.find(function (v) {
          return v.lang && v.lang.toLowerCase().replace("_", "-") === "pt-br";
        }) ||
        vozes.find(function (v) {
          return v.lang && v.lang.toLowerCase().startsWith("pt");
        }) ||
        null
      );
    },

    anunciarStatus: function (mensagem) {
      const regiao = document.getElementById("status-acessibilidade");
      if (regiao) regiao.textContent = mensagem;
    },

    parar: function (anunciar) {
      if (!this.suportado) return;
      window.speechSynthesis.cancel();
      this.falando = false;
      this.fila = [];
      this.indiceFila = 0;
      this.atualizarBotoesUI();
      if (anunciar) {
        this.anunciarStatus("Audiodescrição interrompida.");
      }
    },

    dividirEmPartes: function (texto) {
      return texto
        .replace(/\s+/g, " ")
        .trim()
        .split(/(?<=[.!?])\s+/)
        .filter(Boolean);
    },

    falarTexto: function (texto, origemBotao) {
      if (!this.suportado) {
        this.anunciarStatus("Seu navegador não oferece suporte à leitura em voz alta.");
        alert("Seu navegador não possui suporte nativo à síntese de voz (Web Speech API).");
        return;
      }

      if (this.falando && this.botaoAtivo === origemBotao) {
        this.parar(true);
        return;
      }

      window.speechSynthesis.cancel();
      this.fila = this.dividirEmPartes(texto);
      this.indiceFila = 0;
      this.falando = true;
      this.botaoAtivo = origemBotao || null;
      this.atualizarBotoesUI();
      this.falarProximo();
    },

    falarProximo: function () {
      const self = this;
      if (!self.falando || self.indiceFila >= self.fila.length) {
        self.falando = false;
        self.botaoAtivo = null;
        self.atualizarBotoesUI();
        return;
      }

      const trecho = self.fila[self.indiceFila];
      const fala = new SpeechSynthesisUtterance(trecho);
      fala.lang = "pt-BR";
      fala.rate = 1.02;
      fala.pitch = 1.0;

      const vozPt = self.obterVozPtBr();
      if (vozPt) fala.voice = vozPt;

      fala.onend = function () {
        if (!self.falando) return;
        self.indiceFila += 1;
        self.falarProximo();
      };

      fala.onerror = function () {
        self.falando = false;
        self.botaoAtivo = null;
        self.atualizarBotoesUI();
      };

      window.speechSynthesis.speak(fala);
    },

    gerarRoteiroPaginaCompleta: function () {
      const caminho = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
      const descricaoVisual =
        AUDIODESCRICOES_PAGINAS[caminho] ||
        "Audiodescrição da página " + document.title + " do projeto Raízes Sustentáveis.";

      const partes = [descricaoVisual, "Início da leitura do conteúdo da página."];
      const hero = document.querySelector(".conteudo, .pagina-hero");
      if (hero) {
        const textosHero = hero.querySelectorAll("h1, p");
        textosHero.forEach(function (el) {
          const t = el.textContent.replace(/\s+/g, " ").trim();
          if (t) partes.push(t + ".");
        });
      }

      const principal = document.getElementById("conteudo-principal");
      if (principal) {
        const elementos = principal.querySelectorAll("h2, h3, p, li, label, img[alt]");
        elementos.forEach(function (el) {
          if (el.closest("[hidden]")) return;
          if (el.tagName === "IMG") {
            const alt = (el.getAttribute("alt") || "").replace(/\s+/g, " ").trim();
            if (alt) partes.push("Descrição da imagem: " + alt + ".");
            return;
          }
          const texto = el.textContent.replace(/\s+/g, " ").trim();
          if (texto) partes.push(texto + ".");
        });
      }

      partes.push("Fim da audiodescrição e leitura da página.");
      return partes.join(" ");
    },

    atualizarBotoesUI: function () {
      const btnPagina = document.getElementById("alternar-audiodescricao");
      const btnParar = document.getElementById("parar-audiodescricao");

      if (btnPagina) {
        const ativoNaPagina = this.falando && this.botaoAtivo === btnPagina;
        btnPagina.setAttribute("aria-pressed", String(ativoNaPagina));
        btnPagina.textContent = ativoNaPagina ? "🔊 Ouvindo..." : "🔊 Audiodescrição";
      }

      if (btnParar) {
        btnParar.hidden = !this.falando;
      }

      const botoesItem = document.querySelectorAll(".btn-audiodescricao-item[data-narra]");
      const self = this;
      botoesItem.forEach(function (btn) {
        if (!btn.dataset.rotuloOriginal) {
          btn.dataset.rotuloOriginal = btn.textContent.trim();
        }
        const ativo = self.falando && self.botaoAtivo === btn;
        btn.setAttribute("aria-pressed", String(ativo));
        btn.textContent = ativo ? "⏹ Parar audiodescrição" : btn.dataset.rotuloOriginal;
      });
    }
  };

  if (leitorVoz.suportado && typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
    window.speechSynthesis.onvoiceschanged = function () {
      leitorVoz.obterVozPtBr();
    };
  }

  // Agrupa as páginas complementares em um menu Dropdown "Mais ▾" no desktop para não poluir nem quebrar o topo
  function configurarMenuDropdown() {
    const nav = document.querySelector(".menu .links, .menu-interno .links");
    if (!nav || nav.querySelector(".nav-dropdown")) return;

    const hrefsDropdown = [
      "projetos.html",
      "noticias.html",
      "midia.html",
      "orcamento_hospedagem.html"
    ];

    const todosLinks = Array.from(nav.querySelectorAll("a"));
    const linksParaDropdown = [];

    todosLinks.forEach(function (link) {
      // Compara só o nome do arquivo: na página inicial o link é "paginas/contatos.html"
      const href = (link.getAttribute("href") || "").toLowerCase().split("#")[0].split("/").pop();
      if (href === "contatos.html") {
        link.classList.add("link-contato-duplicado");
      } else if (hrefsDropdown.includes(href)) {
        linksParaDropdown.push(link);
      }
    });

    if (!linksParaDropdown.length) return;

    const dropdown = document.createElement("div");
    dropdown.className = "nav-dropdown";

    const botaoToggle = document.createElement("button");
    botaoToggle.type = "button";
    botaoToggle.className = "nav-dropdown-toggle";
    botaoToggle.setAttribute("aria-expanded", "false");
    botaoToggle.setAttribute("aria-haspopup", "true");
    botaoToggle.textContent = "Mais ▾";

    const painelMenu = document.createElement("div");
    painelMenu.className = "nav-dropdown-menu";

    let algumAtivo = false;
    linksParaDropdown.forEach(function (link) {
      if (link.getAttribute("aria-current") === "page") {
        algumAtivo = true;
      }
      painelMenu.appendChild(link);
    });

    if (algumAtivo) {
      botaoToggle.setAttribute("data-ativo", "true");
    }

    dropdown.appendChild(botaoToggle);
    dropdown.appendChild(painelMenu);
    nav.appendChild(dropdown);

    let timerFechar = null;
    let fixadoPorClique = false;

    function cancelarTimer() {
      if (timerFechar) {
        clearTimeout(timerFechar);
        timerFechar = null;
      }
    }

    function definirAberto(aberto) {
      cancelarTimer();
      dropdown.classList.toggle("aberto", aberto);
      botaoToggle.setAttribute("aria-expanded", String(aberto));
      if (!aberto) fixadoPorClique = false;
    }

    botaoToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const estaAberto = dropdown.classList.contains("aberto");
      if (estaAberto && fixadoPorClique) {
        definirAberto(false);
      } else {
        definirAberto(true);
        fixadoPorClique = true;
      }
    });

    dropdown.addEventListener("mouseenter", function () {
      cancelarTimer();
      if (window.innerWidth > 1080) {
        dropdown.classList.add("aberto");
        botaoToggle.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 1080 && !fixadoPorClique) {
        cancelarTimer();
        timerFechar = setTimeout(function () {
          definirAberto(false);
        }, 350);
      }
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        definirAberto(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && dropdown.classList.contains("aberto")) {
        definirAberto(false);
        botaoToggle.focus();
      }
    });
  }

  function configurarBarraAcessibilidade() {
    const menu = document.querySelector(".menu-interno, .menu");
    if (!menu || document.getElementById("acoes-acessibilidade")) return;

    const container = document.createElement("div");
    container.id = "acoes-acessibilidade";
    container.className = "acoes-acessibilidade";
    container.setAttribute("role", "region");
    container.setAttribute("aria-label", "Recursos de acessibilidade");

    const btnAudio = document.createElement("button");
    btnAudio.type = "button";
    btnAudio.id = "alternar-audiodescricao";
    btnAudio.className = "botao-acessibilidade botao-audiodescricao";
    btnAudio.setAttribute("aria-pressed", "false");
    btnAudio.setAttribute(
      "aria-label",
      "Ouvir audiodescrição visual e leitura completa da página (Atalho Alt + A)"
    );
    btnAudio.title = "Ouvir audiodescrição para pessoas cegas (Alt + A)";
    btnAudio.textContent = "🔊 Audiodescrição";

    const btnParar = document.createElement("button");
    btnParar.type = "button";
    btnParar.id = "parar-audiodescricao";
    btnParar.className = "botao-acessibilidade botao-parar-audio";
    btnParar.setAttribute("aria-label", "Parar leitura de audiodescrição");
    btnParar.textContent = "⏹ Parar";
    btnParar.hidden = true;

    const btnContraste = document.createElement("button");
    btnContraste.type = "button";
    btnContraste.id = "alternar-contraste";
    btnContraste.className = "botao-acessibilidade botao-contraste";
    btnContraste.setAttribute("aria-label", "Alternar modo de alto contraste (Atalho Alt + C)");
    btnContraste.title = "Alternar modo de alto contraste (Alt + C)";

    const regiaoStatus = document.createElement("span");
    regiaoStatus.id = "status-acessibilidade";
    regiaoStatus.className = "sr-only";
    regiaoStatus.setAttribute("role", "status");
    regiaoStatus.setAttribute("aria-live", "polite");

    container.appendChild(btnAudio);
    container.appendChild(btnParar);
    container.appendChild(btnContraste);
    container.appendChild(regiaoStatus);

    const botaoContato = menu.querySelector(".botao-contato");
    if (botaoContato) {
      menu.insertBefore(container, botaoContato);
    } else {
      menu.appendChild(container);
    }

    function aplicarContraste(ativo, anunciar) {
      document.body.classList.toggle("alto-contraste", ativo);
      btnContraste.setAttribute("aria-pressed", String(ativo));
      btnContraste.textContent = ativo ? "◐ Padrão" : "◐ Contraste";
      if (anunciar) {
        leitorVoz.anunciarStatus(
          ativo ? "Modo de alto contraste ativado." : "Modo de alto contraste desativado."
        );
      }
    }

    aplicarContraste(lerArmazenamento(CHAVE_CONTRASTE, "false") === "true", false);

    btnContraste.addEventListener("click", function () {
      const ativo = !document.body.classList.contains("alto-contraste");
      salvarArmazenamento(CHAVE_CONTRASTE, String(ativo));
      aplicarContraste(ativo, true);
    });

    btnAudio.addEventListener("click", function () {
      const roteiro = leitorVoz.gerarRoteiroPaginaCompleta();
      leitorVoz.falarTexto(roteiro, btnAudio);
    });

    btnParar.addEventListener("click", function () {
      leitorVoz.parar(true);
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.altKey && evento.key.toLowerCase() === "a") {
        evento.preventDefault();
        btnAudio.click();
      } else if (evento.altKey && evento.key.toLowerCase() === "c") {
        evento.preventDefault();
        btnContraste.click();
      } else if (evento.key === "Escape" && leitorVoz.falando) {
        leitorVoz.parar(true);
      }
    });

    window.addEventListener("beforeunload", function () {
      leitorVoz.parar(false);
    });
  }

  function configurarBotoesAudiodescricaoItens() {
    const botoes = document.querySelectorAll(".btn-audiodescricao-item[data-narra]");
    botoes.forEach(function (botao) {
      botao.setAttribute("aria-pressed", "false");
      botao.addEventListener("click", function () {
        const texto = botao.getAttribute("data-narra");
        if (texto) {
          leitorVoz.falarTexto(texto, botao);
        }
      });
    });

    const video = document.getElementById("video-natureza");
    const btnSincronizar = document.getElementById("sincronizar-ad-video");

    if (video && btnSincronizar) {
      let sincronizarAtivo = true;

      btnSincronizar.addEventListener("click", function () {
        sincronizarAtivo = !sincronizarAtivo;
        btnSincronizar.setAttribute("aria-pressed", String(sincronizarAtivo));
        btnSincronizar.textContent = sincronizarAtivo
          ? "🗣️ Narrar automaticamente ao dar Play: Ativado"
          : "🗣️ Narrar automaticamente ao dar Play: Desativado";
        leitorVoz.anunciarStatus(
          sincronizarAtivo
            ? "Narração automática do vídeo ativada."
            : "Narração automática do vídeo desativada."
        );
      });

      video.addEventListener("play", function () {
        if (!sincronizarAtivo) return;
        const descricaoCurtaVideo =
          "Audiodescrição sincronizada: sobre fundo escuro, o botão fechado de uma flor amarela de calêndula abre lentamente suas pétalas em câmera acelerada até desabrochar por completo, revelando o centro alaranjado.";
        leitorVoz.falarTexto(descricaoCurtaVideo, null);
      });
    }
  }

  function configurarMenuResponsivo() {
    const toggle = document.getElementById("nav-toggle");
    if (!toggle) return;

    function atualizarEstadoMenu() {
      toggle.setAttribute("aria-expanded", String(toggle.checked));
    }

    toggle.addEventListener("change", atualizarEstadoMenu);
    atualizarEstadoMenu();

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && toggle.checked) {
        toggle.checked = false;
        atualizarEstadoMenu();
        toggle.focus();
      }
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
          aviso.textContent =
            "Não foi possível salvar os dados neste navegador. Tente novamente ou habilite o armazenamento local.";
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
        const mostrar =
          texto.includes(termo) &&
          (categoria.value === "todos" || item.dataset.categoria === categoria.value);
        item.hidden = !mostrar;
        if (mostrar) total++;
      });

      if (status) {
        status.textContent =
          total + (total === 1 ? " conteúdo encontrado." : " conteúdos encontrados.");
      }
      if (vazio) vazio.hidden = total > 0;
    }

    busca.addEventListener("input", filtrar);
    categoria.addEventListener("change", filtrar);
    filtrar();
  }

  document.addEventListener("DOMContentLoaded", function () {
    configurarMenuDropdown();
    configurarBarraAcessibilidade();
    configurarBotoesAudiodescricaoItens();
    configurarMenuResponsivo();
    configurarFormulario();
    configurarFiltro();
  });
})();
