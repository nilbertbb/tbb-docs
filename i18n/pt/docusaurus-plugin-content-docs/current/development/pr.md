---
id: pr
title: Padrões de Pull Request
sidebar_position: 1
---

# Padrões de Revisão de Pull Request

Este documento define os padrões oficiais para revisão de Pull Requests (PRs) relacionados ao desenvolvimento de componentes frontend. Essas regras garantem qualidade, manutenibilidade e consistência entre projetos.

---

## Tipos de PR

Todo título de PR deve começar com um prefixo que indique o tipo da mudança:

- `FEAT`: Novo componente ou funcionalidade
- `FIX`: Correção de bug ou comportamento
- `MINOR`: Ajustes visuais, mudanças internas pequenas ou refatorações

---

## Descrição do PR

Cada PR deve conter uma descrição clara e objetiva com a seguinte estrutura:

- Resumo breve da implementação
- Link para a task relacionada no Wrike

---

## Convenções de Estilo para Componentes

As seguintes convenções devem ser adotadas em todos os estilos de componentes:

- Definir e utilizar variáveis de `z-index` para manter uma hierarquia de sobreposição clara.
- Definir e utilizar variáveis de `max-width` para consistência no layout.
- Sempre usar os prefixos `FEAT`, `FIX` ou `MINOR` no título do PR.

---

## Checklist de Revisão de Estilo

Para PRs do tipo `FEAT`, é **obrigatório** incluir o checklist de revisão de estilo abaixo. O revisor deve passar por cada item e aprovar somente quando todos os critérios forem atendidos.

Após a aprovação, o checklist preenchido deve ser adicionado na task correspondente do Wrike como documentação.

```
### Checklist de Revisão de Código (Estilos CSS/SASS)

☐ Usa unidades `rem` para espaçamento e tamanhos (exceto bordas/sombras)  
☐ Usa `px` apenas quando estritamente necessário (ex: bordas de 1px, sombras)  
☐ Todas as cores usam variáveis predefinidas  
☐ Fontes usam variáveis predefinidas de `font-family`  
☐ Nomes de classe seguem uma hierarquia lógica e organizada  
☐ Não utiliza seletores genéricos (`img`, `h2`, `a`, etc.) sem contexto específico  
☐ Indentação consistente em todo o arquivo  
☐ Media queries seguem abordagem mobile-first  
☐ Media queries ordenadas do menor para o maior breakpoint  
☐ Utiliza mixins predefinidos para breakpoints  
☐ Evita duplicação de código sempre que possível  
☐ Estilos são corretamente escopados ao componente  
☐ `position: absolute` é usado apenas quando realmente necessário  
☐ Padrões reutilizáveis são abstraídos e aplicados onde aplicável  
☐ Evita o uso de `!important` salvo exceções justificadas  

### Comentários ou Justificativas Adicionais (ex: uso de `absolute`, `!important`, etc.):

__________________________________________________________________________
__________________________________________________________________________
```
