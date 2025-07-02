---
id: css-sass
title: CSS / SASS Technical Standards
sidebar_position: 3
---

# CSS / SASS Technical Standards

This document provides guidelines and examples to ensure consistency, maintainability, and scalability when using CSS and SASS in team projects.

---

## 🎯 Use `px` only for precision details

Avoid using `px` for layout and structure. Prefer `rem` or `em` for:

- Font sizes
- Spacing
- Widths

Use `px` only for:

- Thin borders
- Box shadows
- Pixel-perfect adjustments

```scss
// Correct
padding: 1rem;
font-size: 0.875rem;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // px here is acceptable
```

---

## 🎨 Use color variables

Always use global color variables. This helps with:

- Theming (e.g., dark mode)
- Rebranding
- Consistency across components

```scss
// _variables.scss
$primary-color: #0066ff;
$text-color: #333;

// usage
color: $text-color;
background-color: $primary-color;
```

---

## 🅰 Font variables

Centralize font tokens for consistency and maintainability.

```scss
// _typography.scss
$font-body: "Inter", sans-serif;
$font-heading: "Poppins", sans-serif;

// usage
font-family: $font-body;
```

---

## 🧱 Class hierarchy

Use clear and nested class structures for better readability and reusability.

```html
<div class="card">
  <div class="card__header">Title</div>
  <div class="card__body">Content</div>
</div>
```

```scss
.card {
  &__header { ... }
  &__body { ... }
}
```

Avoid flat or generic selectors without context.

---

## 🔒 Avoid loose generic selectors

Do not use `div`, `span`, `p`, or `*` directly in SASS. Always scope styles with specific classes.

```scss
// Wrong
div {
  margin: 0;
}

// Correct
.section-title {
  margin: 0;
}
```

---

## Additional best practices

- Use `@use` instead of `@import`
- Split files by purpose (e.g., `_buttons.scss`, `_layout.scss`)
- Avoid `!important` unless absolutely necessary

---

## Related

See also: [Pull Request Standards](./pr.md)