---
id: create-class
title: Create Class in AEM
sidebar_position: 2
---

# 🏷️ Create Class in AEM

This guide walks through the process of adding custom CSS classes to components using AEM Templates (Editable Templates).

---

## 🚪 Accessing the Template

The fastest way to access the template is:

1. Click the **gear icon** on the page you're working on.
2. Then click **"Edit Template"**.

> ⚠️ If the option doesn't appear right away, hover over the gear icon for 5+ seconds.

![Open Edit Template](/img/frontend-workflow/create-class/step-01-open-edit-template.png)

---

## 🧱 Locate the Component

In the template view, you'll typically see:

- An Experience Fragment (Header)
- A **Layout Container**
- Another Experience Fragment (Footer)

Look inside the Layout Container and find the component (e.g., **Text**) you want to apply a class to.

![Template Layout with Container](/img/frontend-workflow/create-class/step-02-container-list.png)

Click the small **gear icon** on the component card to open its configuration:

![Text Component in Template](/img/frontend-workflow/create-class/step-03-component-text.png)

---

## 🧩 Accessing Style Settings

Once in the component configuration:

- Go to the **Styles** tab.
- You’ll see a section for **Allowed Styles**.

> Policies are used to group styles across templates. We'll link a full page on policies soon.

![Component Settings Page](/img/frontend-workflow/create-class/step-04-component-settings.png)

![Styles Tab in Policy](/img/frontend-workflow/create-class/step-05-policy-styles-tab.png)

---

## 🎨 Adding Your Style

Click **Add** and enter:

- A **Group Name** (e.g., `Global`, `pdp US`)
- Then define each style name and its corresponding CSS class.

> By default, we group by page and use a `Global` group for reusable styles.

![Style Fields Filled](/img/frontend-workflow/create-class/step-06-filled-styles.png)

Click **Done** once saved.

---

## 🧪 Applying the Style

There are two ways to apply styles to a component in the page:

### 1. Paintbrush Icon

Click the component → click the **paintbrush icon**:

![Paint Icon Option](/img/frontend-workflow/create-class/step-08-paint-icon.png)

Select the style you want.

### 2. Properties Panel → Styles

Click the component → **gear icon** → **Styles tab**:

![Styles Tab for Selection](/img/frontend-workflow/create-class/step-09-style-tab.png)

---

## 🔍 About Scoped Styling

In AEM, when applying a class to a component:

- You can only target the **root** element of that component.
- Nested elements follow AEM internal structure and **cannot be directly classed**.

> Example: if styling a container, only the wrapper can be customized with a class.

![Styled Component in DOM](/img/frontend-workflow/create-class/step-10-inspector-view.png)

---

## ✅ Summary

- Use **Edit Template** to configure policies and allowed styles.
- Classes can be grouped and toggled per component.
- Apply styles via paintbrush icon or styles tab.
- Only the outer wrapper can be styled — inner elements are locked.

---

📌 *This process requires permissions to edit templates and policies. If options are missing, your account might not have access.*
