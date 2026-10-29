# Accessibility Testing

## WCAG 2.1 AA Areas Demonstrated

- 1.3.1 Info and Relationships
- 1.4.3 Contrast
- 2.1.1 Keyboard
- 2.1.2 No Keyboard Trap
- 2.4.1 Bypass Blocks
- 2.4.3 Focus Order
- 2.4.7 Focus Visible
- 3.3.1 Error Identification
- 3.3.2 Labels or Instructions
- 4.1.2 Name, Role, Value

## Manual Test Checklist

1. Navigate the application using only Tab, Shift+Tab, Enter, and Escape.
2. Verify every interactive element has a visible focus state.
3. Verify the skip link moves focus to main content.
4. Verify form controls have programmatically associated labels.
5. Trigger validation errors and verify errors are understandable.
6. Verify headings follow a logical hierarchy.
7. Verify tables have meaningful headers.
8. Verify status messages can be understood by assistive technology.
9. Test responsive layouts at desktop, tablet, and mobile widths.

## Automated Testing

Run axe against the running application and review all violations.

## Screen Reader Testing

Use JAWS to validate:

- Landmark navigation
- Heading navigation
- Form control labels
- Button/link names
- Validation messages
- Dynamic status updates
- Keyboard interaction

Automated tools supplement, but do not replace, manual accessibility testing.
