---
title: Button
sidebar_position: 5
---

# Button

The Button component is used to create interactive CTAs (Call to Action) throughout the site. It includes multiple configuration options across the **Properties**, **Accessibility**, and **Styles** tabs.

---

## 🧩 Configuration

### 🔹 Properties Tab

![Properties Tab](/img/components/button/button-properties.png)

- **Text**: Label that will be displayed inside the button.
- **Link**: Destination URL or internal anchor (can be `#id`, an external link, or selected via the folder icon).
- **Open link in new tab**: Opens the link in a new browser tab (`target="_blank"`).
- **Open link as Overlay**: Used for modal/overlay behaviors (depends on project).
- **Icon**: Optional icon that may be rendered before the button text.
- **ID**: Sets the `id` attribute on the component for custom styling or scripting.

---

### 🔹 Accessibility Tab

![Accessibility Tab](/img/components/button/button-accessibility.png)

- **Label**: Text label used by screen readers (`aria-label`). Important for accessibility compliance.

---

### 🔹 Styles Tab

![Styles Tab](/img/components/button/button-styles.png)

The styles tab applies project-specific class modifiers to the button. Available options may include:

- Button styles (e.g. primary, secondary)
- Back to Top behavior
- Download card visual

⚠️ Options vary depending on the current project configuration and policies.

---

## ⚙️ Common Usage Patterns

### ✅ SkipToContent Button

This is a frequently used accessibility shortcut. It allows users to jump directly to the main content area.

#### Configuration:

| Field        | Value                         |
|--------------|-------------------------------|
| Text         | `SkipToContent`               |
| Link         | `#contentWrapperSection`      |
| ID           | `button-skip-to-content`      |

Usually added as the **first component in the Header**.

#### Supporting Script:

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

> 💡 This script dynamically assigns the `contentWrapperSection` ID to the `<main>` section when it doesn't exist.

---

### 🔼 Back to Top Button

Used to scroll smoothly to the top of the page. Typically placed at the **end of the Footer**.

#### Configuration:

- **No link** required
- **ID**: `back-to-top`
- Optional: add icon (e.g., chevron-up)

#### Supporting Script:

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

## 📌 Notes

- Icons support may vary depending on the project setup (some use Font Awesome, others use custom SVGs).
- Always use meaningful `aria-label` values when accessibility is important.
- If styles do not appear, ensure the corresponding CSS classes are registered in the AEM style system.
