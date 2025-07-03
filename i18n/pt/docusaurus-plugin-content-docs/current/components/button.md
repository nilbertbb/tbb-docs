---
title: Botão
sidebar_position: 5
---

# Botão

O componente **Botão** é usado para criar CTAs interativos em todo o site. Ele possui várias opções de configuração distribuídas entre as abas **Propriedades**, **Acessibilidade** e **Estilos**.

---

## 🧩 Configuração

### 🔹 Aba Propriedades

![Aba Propriedades](/img/components/button/button-properties.png)

- **Texto**: Rótulo que será exibido dentro do botão.
- **Link**: Destino do botão. Pode ser um ID interno (ex: `#id`), um link externo ou um link selecionado pela pastinha.
- **Abrir link em nova aba**: Abre o link em uma nova aba do navegador (`target="_blank"`).
- **Abrir como Overlay**: Abre o conteúdo como sobreposição/modal (se o projeto permitir).
- **Ícone**: Ícone opcional que pode aparecer antes do texto do botão.
- **ID**: Define o `id` do componente (útil para estilização e scripts personalizados).

---

### 🔹 Aba Acessibilidade

![Aba Acessibilidade](/img/components/button/button-accessibility.png)

- **Label**: Rótulo usado por leitores de tela (`aria-label`). Essencial para acessibilidade.

---

### 🔹 Aba Estilos

![Aba Estilos](/img/components/button/button-styles.png)

Permite aplicar classes/modificadores específicos do projeto. Os estilos disponíveis podem incluir:

- Tipos de botão (primário, secundário, etc)
- Comportamento "Back to Top"
- Estilo de "Download Card"

⚠️ As opções variam conforme o projeto.

---

## ⚙️ Padrões de uso comuns

### ✅ Botão SkipToContent

Um atalho de acessibilidade comum, usado para pular direto para o conteúdo principal.

#### Configuração:

| Campo        | Valor                         |
|--------------|-------------------------------|
| Texto        | `SkipToContent`               |
| Link         | `#contentWrapperSection`      |
| ID           | `button-skip-to-content`      |

Normalmente adicionado como o **primeiro componente no Header**.

#### Script de suporte:

```js
document.addEventListener("DOMContentLoaded", function () {
  const rootContainer = document.querySelector(".root.container.responsivegrid");
  if (!rootContainer) return;

  const cmpContainer = rootContainer.querySelector(":scope > .cmp-container");
  if (!cmpContainer) return;

  const children = Array.from(cmpContainer.children).filter(
    (el) => el.nodeType === Node.ELEMENT_NODE
  );

  if (children.length >= 3) {
    const mainEquivalent = children[1];
    if (!mainEquivalent.id) {
      mainEquivalent.id = "contentWrapperSection";
    }
  }
});
```

> 💡 Esse script adiciona dinamicamente o ID `contentWrapperSection` ao elemento `<main>` caso ele ainda não exista.

---

### 🔼 Botão Back to Top

Usado para rolar suavemente a página até o topo. Geralmente inserido como **último componente no Footer**.

#### Configuração:

- **Sem link**
- **ID**: `back-to-top`
- Pode ter um ícone (ex: seta para cima)

#### Script de suporte:

```js
document.getElementById('back-to-top').addEventListener('click', backToTop);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const el = document.getElementById('back-to-top');
  el.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    ? 'flex'
    : 'none';
}

function backToTop(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

---

## 📌 Observações

- O suporte a ícones depende da configuração do projeto (alguns usam Font Awesome, outros SVGs personalizados).
- Sempre forneça valores descritivos para `aria-label` para manter acessibilidade.
- Se os estilos não aplicarem, verifique se as classes estão registradas no sistema de estilos do AEM.
