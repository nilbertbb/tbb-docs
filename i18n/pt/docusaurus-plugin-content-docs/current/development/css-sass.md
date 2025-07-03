---
id: css-sass
title: Padrões Técnicos de CSS / SASS
sidebar_position: 3
---

# Padrões Técnicos de CSS / SASS

Este documento fornece diretrizes e exemplos para garantir consistência, manutenibilidade e escalabilidade no uso de CSS e SASS nos projetos da equipe.

---

## 🎯 Use `px` apenas para detalhes precisos

Evite usar `px` para layout e estrutura. Prefira `rem` ou `em` para:

- Tamanhos de fonte
- Espaçamentos
- Larguras

Use `px` apenas para:

- Bordas finas
- Sombras
- Ajustes milimétricos

```scss
// Correto
padding: 1rem;
font-size: 0.875rem;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // px aqui é aceitável
```

---

## 🎨 Use variáveis de cores

Sempre utilize variáveis globais para cores. Isso facilita:

- Temas (ex: dark mode)
- Rebranding
- Consistência visual entre componentes

```scss
// _variables.scss
$primary-color: #0066ff;
$text-color: #333;

// uso
color: $text-color;
background-color: $primary-color;
```

---

## 🅰 Variáveis de fonte

Centralize os tokens de fonte para manter a consistência e facilitar a manutenção.

```scss
// _typography.scss
$font-body: "Inter", sans-serif;
$font-heading: "Poppins", sans-serif;

// uso
font-family: $font-body;
```

---

## 🧱 Hierarquia de classes

Use estruturas de classe claras e aninhadas para melhorar a legibilidade e reutilização.

```html
<div class="card">
  <div class="card__header">Título</div>
  <div class="card__body">Conteúdo</div>
</div>
```

```scss
.card {
  &__header { ... }
  &__body { ... }
}
```

Evite seletores genéricos ou soltos sem contexto.

---

## 🔒 Evite seletores genéricos soltos

Não use `div`, `span`, `p` ou `*` diretamente no SASS. Sempre use classes específicas.

```scss
// Errado
div {
  margin: 0;
}

// Correto
.section-title {
  margin: 0;
}
```

---

## Outras boas práticas

- Use `@use` em vez de `@import`
- Separe os arquivos por propósito (ex: `_buttons.scss`, `_layout.scss`)
- Evite `!important`, a não ser que seja extremamente necessário

---

## Relacionado

Veja também: [Padrões de Pull Request](./pr.md)
