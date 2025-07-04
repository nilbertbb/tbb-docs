---
id: styling-workflow
title: Styling Workflow
sidebar_position: 1
---

# 🎨 Styling Workflow

This guide outlines how we typically style components during development, especially within the AEM (Adobe Experience Manager) context.

---

## ⚙️ Where We Style

We typically style components directly from the **View as Published** option in AEM. To access it:

1. Open the page you are working on.
2. Click on the gear icon ⚙️ in the top bar.
3. Select **"View as Published"**.

![View as Published](/img/frontend-workflow/styling-workflow/view-as-publish.png)

Alternatively, styles can also be tested using the **INT**, **IT**, or **PROD** environment links depending on where the integration is live.

---

## 🧩 Tools We Use

### 1. Magic CSS (Chrome Extension)

We style components directly in the browser using the **Magic CSS** extension:

🔗 [Live editor for CSS, Less & Sass - Magic CSS](https://chromewebstore.google.com/detail/live-editor-for-css-less/ifhikkcafabcgolfjegfcgloomalapol)

![Magic CSS Chrome](/img/frontend-workflow/styling-workflow/magic-css-chrome.png)

Once installed, you can open the extension and start styling directly on the live preview:

![Magic CSS Editor](/img/frontend-workflow/styling-workflow/magic-css-editor.png)

---

## 🧩 Typical Flow

1. Open the AEM page.
2. Click **View as Published**.
3. Use Magic CSS or browser DevTools to style the component.
4. Copy the working styles.
5. Apply them to your project's SCSS file using standard breakpoints and tokens.

---

## 💡 SCSS Snippets (Used in Projects)

We often use this snippet as a base when writing styles via Magic CSS:

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

## 🎨 Color & Font Variables

Each project may have its own design system, but here is an example of shared tokens used in some cases:

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
## ✅ Summary

- Use **View as Published** or **INT/IT/PROD** links to see the component.
- Edit styles using **Magic CSS** or browser dev tools.
- Copy generated styles and apply them inside your SCSS in the project.

## 📌 Notes
- When applying classes, keep in mind [how create class](./create-class).
