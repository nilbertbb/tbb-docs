---
id: styling-workflow
title: Fluxo de Estilização
sidebar_position: 1
---

# 🎨 Fluxo de Estilização

Este guia descreve como geralmente estilizamos os componentes durante o desenvolvimento, especialmente no contexto do AEM (Adobe Experience Manager).

---

## ⚙️ Onde Estilizamos

Normalmente estilizamos os componentes diretamente pela opção **"View as Published"** no AEM. Para acessá-la:

1. Abra a página em que está trabalhando.
2. Clique no ícone de engrenagem ⚙️ na barra superior.
3. Selecione **"View as Published"**.

![View as Published](/img/frontend-workflow/styling-workflow/view-as-publish.png)

Alternativamente, os estilos também podem ser testados pelos links dos ambientes **INT**, **IT** ou **PROD**, dependendo de onde está a integração.

---

## 🧩 Ferramentas Utilizadas

### 1. Magic CSS (Extensão para Chrome)

Estilizamos os componentes diretamente no navegador usando a extensão **Magic CSS**:

🔗 [Live editor for CSS, Less & Sass - Magic CSS](https://chromewebstore.google.com/detail/live-editor-for-css-less/ifhikkcafabcgolfjegfcgloomalapol)

![Magic CSS Chrome](/img/frontend-workflow/styling-workflow/magic-css-chrome.png)

Depois de instalada, basta abrir a extensão e começar a estilizar diretamente no preview da página:

![Magic CSS Editor](/img/frontend-workflow/styling-workflow/magic-css-editor.png)

---

## 🧩 Fluxo Típico

1. Abrir a página no AEM.
2. Clicar em **View as Published**.
3. Usar o Magic CSS ou as DevTools do navegador para aplicar os estilos.
4. Copiar os estilos que funcionaram.
5. Aplicá-los no SCSS do projeto usando os breakpoints e tokens padrões.

---

## 💡 Snippet SCSS (Base Usada)

Costumamos usar este snippet como base ao escrever estilos via Magic CSS:

```scss
// Medias
@mixin media-tablet {
  @include media-min-width($breakpoint-tablet) {
    @content;
  }
}
@mixin media-desktop {
  @include media-min-width($breakpoint-desktop) {
    @content;
  }
}
@mixin media-desktop-wide {
  @include media-min-width($breakpoint-desktop-wide) {
    @content;
  }
}
@mixin media-min-width($width) {
  @media only screen and (min-width: $width) {
    @content;
  }
}

// Breakpoints
$breakpoint-zero: 0;
$breakpoint-phablet: 500px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
$breakpoint-desktop-wide: 1336px;
```

---

## 🎨 Cores e Fontes (Tokens Comuns)

Cada projeto pode ter seu próprio sistema de design, mas aqui está um exemplo de tokens usados em alguns casos:

```scss
$proxima-nova: "proxima-nova", sans-serif;
$gotham-font: "Gotham", sans-serif;
$inter: arial;

$black: #000;
$blue-01: #34b9d0;
$blue-02: #5dc7da;
$grey-01: #4a4a4a;
$grey-02: #7d7d7d;
$cookie-green: #468254;
$cookie-green-hover: #2c6415;
// ...
```

---

## ✅ Resumo

- Utilize **View as Published** ou os links **INT/IT/PROD** para visualizar os componentes.
- Edite os estilos com o **Magic CSS** ou as DevTools do navegador.
- Copie os estilos gerados e aplique no SCSS do projeto.

## 📌 Observações

- Ao aplicar classes, leve em consideração [como criar uma classe](./create-class).