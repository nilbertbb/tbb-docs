---
id: qa
title: Padrões de QA Visual Interno
sidebar_position: 2
---

# Padrões de QA Visual Interno

Este documento define o processo padrão para realização de QA visual interno em componentes frontend, garantindo alta fidelidade entre o design aprovado (Figma ou Adobe XD) e o resultado implementado.

---

## Objetivo

Garantir consistência visual, reduzir retrabalho e tornar o processo de QA mais claro e reproduzível. Este processo é obrigatório para todos os novos componentes.

---

## Fluxo de QA

O revisor de QA deve seguir os seguintes passos para cada novo componente:

1. Abrir o ambiente de preview e o design correspondente.
2. Utilizar o checklist abaixo para validar cada item.
3. Capturar screenshots do componente renderizado (mobile e desktop).
4. Capturar screenshots do design original (mobile e desktop) usando larguras padrão:
   - Mobile: 375px
   - Desktop: 1280px
5. Comparar as duas versões usando o [DiffChecker](https://www.diffchecker.com/pt/image-compare/) com os modos de fade, slide ou comparação lado a lado.
6. Validar se há diferenças visuais significativas.
7. Se aprovado, copiar o checklist preenchido e as observações para a task correspondente no Wrike.

⚠️ O componente não precisa estar 100% pixel perfect, mas qualquer diferença relevante de espaçamento, alinhamento, efeitos ou posicionamento deve ser corrigida antes da aprovação final.

---

## Checklist Global de QA Visual

```
### Checklist de QA Visual

☐ A fonte corresponde à do design (mobile e desktop)
☐ Os tamanhos das fontes estão corretos
☐ Os pesos das fontes estão corretos
☐ O line-height está de acordo com o design
☐ O componente está centralizado corretamente
☐ A largura máxima é de 1280px ou conforme padrão do projeto
☐ O padding lateral segue o padrão do projeto (ex: 70px ou 80px no desktop)
☐ O layout é responsivo no mobile, desktop e telas maiores (até 1920px)
☐ Todos os efeitos de hover, focus e active estão aplicados corretamente
☐ O espaçamento interno entre os elementos segue o design
☐ A estrutura visual corresponde ao design geral
☐ As imagens estão dimensionadas e posicionadas corretamente
☐ Não há distorções ou posicionamentos incorretos em nenhuma resolução
☐ A comparação no DiffChecker não apresenta diferenças visuais relevantes

### Comentários ou Justificativas (se houver):

________________________________________________________________________________
________________________________________________________________________________
________________________________________________________________________________
```
