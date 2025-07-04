---
id: create-class
title: Criar Classe no AEM
sidebar_position: 2
---

# 🧩 Criar Classe no AEM

Este guia explica como adicionar e aplicar uma classe CSS personalizada a um componente AEM por meio da interface de template.

---

## ⚙️ Abrindo o Edit Template

A maneira mais rápida de acessar a tela de edição de template é clicando no ícone de engrenagem da página onde você deseja aplicar a classe e, em seguida, clicando em **"Edit Template"**.

> ⚠️ Em alguns casos o botão pode demorar alguns segundos para aparecer após abrir o menu.

![Abrir Edit Template](./img/frontend-workflow/create-class/01-edit-template.png)

---

## 🧱 Estrutura do Template

Na tela de edição do template, procure o **Layout Container**. Dentro dele, você verá os componentes onde deseja aplicar a classe.

![Layout Container](./img/frontend-workflow/create-class/02-layout-container.png)

---

## 🧩 Selecionar o Componente

No Layout Container, clique sobre o nome do componente desejado, por exemplo, **Text**, e selecione o ícone de engrenagem.

![Selecionar o componente](./img/frontend-workflow/create-class/03-text-component.png)

---

## ⚙️ Tela de Configuração do Componente

Você será levado à tela de configuração do componente. Aqui você encontrará a aba **Styles**, onde podemos configurar as classes.

![Aba Styles](./img/frontend-workflow/create-class/04-properties-panel.png)

---

## 🎯 Adicionando Classes

Dentro da aba **Styles**, vá até **Allowed Styles** e clique em **Add**.

Você poderá definir:

- **Group Name**: usado para agrupar estilos. Exemplo: `Global`, `PDP-US` etc.
- **Styles can be combined**: marca se múltiplas classes do grupo podem ser aplicadas simultaneamente.
- **Style Name**: nome visível no menu de seleção.
- **CSS Class**: valor real da classe aplicada no HTML.

![Configuração de estilo preenchida](./img/frontend-workflow/create-class/05-filled-styles.png)

---

## ✅ Aplicando a Classe no Componente

Existem duas formas principais:

### 1. Pelo menu de pincel (brush icon)

![Brush Icon](./img/frontend-workflow/create-class/08-brush-icon.png)

### 2. Pela aba de propriedades > Styles

![Aba Style via propriedades](./img/frontend-workflow/create-class/09-style-via-properties.png)

---

## 👁️ Visualizando no Inspecionar

Após aplicar a classe, você pode visualizar no navegador com o DevTools. A classe será aplicada no nível superior do componente, junto com outras classes internas do AEM.

![Classe aplicada no HTML](./img/frontend-workflow/create-class/10-class-inspect.png)

---

## 📌 Notas

- Ao aplicar uma classe, apenas o **wrapper** principal do componente pode ser customizado. Elementos internos têm classes fixas do AEM.
- Se o botão de adicionar classe não estiver visível, você pode não ter permissão de edição.
- Os estilos ficam salvos na **Policy** do componente. Uma documentação separada será criada para explicar as Policies mais detalhadamente.

> 🔗 *To-do: Linkar aqui com a documentação sobre Policies assim que estiver pronta.*