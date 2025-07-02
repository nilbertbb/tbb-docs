# Pull Request Review Standards

This document defines the official standards for reviewing Pull Requests (PRs) related to frontend component development. These rules aim to ensure code quality, maintainability, and consistency across projects.

---

## PR Types

All PR titles must start with a prefix that indicates the type of change:

- `FEAT`: New component or feature
- `FIX`: Bug fix or behavior correction
- `MINOR`: Visual adjustments, small internal changes, or refactors

---

## PR Description

Each PR must include a clear and concise description structured as follows:

- Brief summary of the implementation
- Link to the related task in Wrike


---

## Component Style Conventions

The following conventions must be adopted in all component styles:

- Define and use z-index variables to maintain a clear stacking hierarchy.
- Define and use max-width variables to ensure consistent layout design.
- Always use PR prefixes (`FEAT`, `FIX`, `MINOR`) in titles.


---

## Style Review Checklist

For PRs of type `FEAT`, it is **mandatory** to include the following style review checklist. The reviewer must go through each item and approve only when all requirements are met.

Once approved, the completed checklist must be added to the related Wrike task as documentation.

```
### Code Review Checklist (CSS/SASS Styles)

☐ Uses `rem` units for spacing and sizing (except borders/shadows)  
☐ Uses `px` only when strictly necessary (e.g., 1px borders, shadows)  
☐ All colors use predefined variables  
☐ Fonts use predefined `font-family` variables  
☐ Class names follow a logical and organized hierarchy  
☐ Does not use generic selectors (`img`, `h2`, `a`, etc.) without scoped context  
☐ Consistent indentation throughout the file  
☐ Media queries follow mobile-first approach  
☐ Media queries are ordered from smallest to largest breakpoint  
☐ Uses predefined mixins for breakpoints  
☐ Avoids code duplication whenever possible  
☐ Styles are properly scoped to the component  
☐ `position: absolute` is used only when strictly necessary  
☐ Reusable patterns are abstracted and applied where applicable  
☐ Avoids using `!important` unless absolutely necessary  

### Additional Comments or Justifications (e.g., usage of `absolute`, `!important`, etc.):

__________________________________________________________________________
__________________________________________________________________________
```

