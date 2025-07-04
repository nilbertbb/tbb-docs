---
id: progressbar
title: Barra de Progresso
sidebar_position: 15
---

# 📊 Barra de Progresso

O componente **Barra de Progresso** exibe um indicador visual com base em um valor percentual entre 0 e 100.

---

## ⚙️ Propriedades

![Barra de Progresso - Propriedades](/img/components/progressbar/progressbar-properties.png)

- **Completion**:  
  Campo numérico que aceita valores de `0` a `100`, representando a porcentagem de progresso.  
  Exemplo: `56` renderiza a barra preenchida em 56%.

- **ID**:  
  Campo opcional usado para aplicar um identificador único no componente.

---

## 🎨 Estilos

![Barra de Progresso - Estilos](/img/components/progressbar/progressbar-styles.png)

A aba **Styles** permite selecionar classes CSS pré-definidas para aplicar no componente.  
Essas opções são configuradas por projeto, então os nomes podem variar.  
Exemplo: `progress-bar-showcase`

---

## ℹ️ Observações

- A barra é preenchida dinamicamente com base no valor informado em `Completion`.
- É possível personalizar a aparência via sistema de estilos ou CSS externo.
