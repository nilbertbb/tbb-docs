# Internal Visual QA Standards

This document defines the standard process for conducting internal visual QA on frontend components to ensure high fidelity between the approved design (Figma or Adobe XD) and the implemented result.

---

## Objective

To ensure visual consistency, reduce rework, and make the QA process clearer and more reproducible. This process is mandatory for all new components.

---

## QA Flow

The QA reviewer must follow these steps for every new component:

1. Open the preview environment and the corresponding design.
2. Use the checklist below to validate each item.
3. Take screenshots of the rendered component (mobile and desktop).
4. Take screenshots of the original design (mobile and desktop) using standard widths:
   - Mobile: 375px
   - Desktop: 1280px
5. Compare both versions using [DiffChecker](https://www.diffchecker.com/pt/image-compare/) with fade, slide, or different modes.
6. Validate whether there are any significant visual differences.
7. If approved, copy the filled checklist and observations to the corresponding Wrike task.

⚠️ The component does not need to be 100% pixel perfect, but any significant differences in spacing, alignment, effects, or positioning must be corrected before final approval.

---

## Global Visual QA Checklist

```
### Visual QA Checklist

☐ The font family matches the design (mobile and desktop)  
☐ The font sizes are correct  
☐ The font weights are correct  
☐ The line-height matches the design  
☐ The component is properly centered  
☐ The max-width is set to 1280px or project-specific  
☐ Lateral padding follows the project standard (e.g., 70px or 80px for desktop)  
☐ The layout is responsive on mobile, desktop, and larger screens (up to 1920px)  
☐ All hover, focus, and active effects are applied correctly  
☐ Internal spacing between elements matches the design  
☐ The visual structure matches the overall design  
☐ Component images are correctly sized and positioned  
☐ No distortion or incorrect positioning on any screen size  
☐ Passed DiffChecker comparison with no significant visual differences  

### Additional Comments or Justifications (if any):

________________________________________________________________________________  
________________________________________________________________________________  
________________________________________________________________________________  
```
