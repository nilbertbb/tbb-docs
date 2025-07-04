---
id: create-class
title: Criar Classe no AEM
sidebar_position: 2
---

# 🏷️ Criar Classe no AEM

Este guia explica o processo de adição de classes CSS personalizadas a componentes usando Modelos AEM (Modelos Editáveis).

---

## 🚪 Acessando o Modelo

A maneira mais rápida de acessar o modelo é:

1. Clique no **ícone de engrenagem** na página em que você está trabalhando.
2. Em seguida, clique em **"Editar Modelo"**.

> ⚠️ Se a opção não aparecer imediatamente, passe o mouse sobre o ícone de engrenagem por mais de 5 segundos.

![Abrir Modelo de Edição](/img/frontend-workflow/create-class/step-01-open-edit-template.png)

---

## 🧱 Localize o Componente

Na visualização do modelo, você normalmente verá:

- Um Fragmento de Experiência (Cabeçalho)
- Um **Contêiner de Layout**
- Outro Fragmento de Experiência (Rodapé)

Olhe dentro do Contêiner de Layout e encontre o componente (por exemplo, **Texto**) ao qual deseja aplicar uma classe.

![Layout de Template com Contêiner](/img/frontend-workflow/create-class/step-02-container-list.png)

Clique no pequeno **ícone de engrenagem** no cartão do componente para abrir sua configuração:

![Componente de Texto no Template](/img/frontend-workflow/create-class/step-03-component-text.png)

---

## 🧩 Acessando as Configurações de Estilo

Na configuração do componente:

- Acesse a aba **Estilos**.
- Você verá uma seção para **Estilos Permitidos**.

> As políticas são usadas para agrupar estilos entre os templates. Em breve, disponibilizaremos um link para uma página completa sobre políticas.

![Página de Configurações do Componente](/img/frontend-workflow/create-class/step-04-component-settings.png)

![Guia de Estilos na Política](/img/frontend-workflow/create-class/step-05-policy-styles-tab.png)

---

## 🎨 Adicionando seu Estilo

Clique em **Adicionar** e insira:

- Um **Nome de Grupo** (ex.: `Global`, `pdp US`)
- Em seguida, defina cada nome de estilo e sua classe CSS correspondente.

> Por padrão, agrupamos por página e usamos um grupo `Global` para estilos reutilizáveis.

![Campos de Estilo Preenchidos](/img/frontend-workflow/create-class/step-06-filled-styles.png)

Clique em **Concluído** após salvar.

---

## 🧪 Aplicando o Estilo

Existem duas maneiras de aplicar estilos a um componente na página:

### 1. Ícone de Pincel

Clique no componente → clique no **ícone de pincel**:

![Opção de Ícone de Pincel](/img/frontend-workflow/create-class/step-08-paint-icon.png)

Selecione o estilo desejado.

### 2. Painel de Propriedades → Estilos

Clique no componente → **ícone de engrenagem** → **guia Estilos**:

![Guia Estilos para Seleção](/img/frontend-workflow/create-class/step-09-style-tab.png)

---

## 🔍 Sobre Estilos com Escopo

No AEM, ao aplicar uma classe a um componente:

- Você só pode direcionar para o elemento **raiz** desse componente.

- Elementos aninhados seguem a estrutura interna do AEM e **não podem ser classificados diretamente**.

> Exemplo: ao estilizar um contêiner, apenas o wrapper pode ser personalizado com uma classe.

![Componente estilizado no DOM](/img/frontend-workflow/create-class/step-10-inspector-view.png)

---

## ✅ Resumo

- Use **Editar Modelo** para configurar políticas e estilos permitidos.
- As classes podem ser agrupadas e alternadas por componente.
- Aplique estilos por meio do ícone do pincel ou da aba de estilos.
- Somente o wrapper externo pode ser estilizado — os elementos internos são bloqueados.

---

📌 *Este processo requer permissões para editar modelos e políticas. Se as opções estiverem ausentes, sua conta poderá não ter acesso.*