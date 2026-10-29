# Accessible Enterprise Case Management Portal

A portfolio project demonstrating accessible, responsive enterprise application development with **ASP.NET Core .NET 8**, **Angular**, REST APIs, SQL Server, and WCAG 2.1 AA practices.

## Portfolio Focus

- C# / ASP.NET Core Web API
- RESTful API design
- Angular responsive UI
- HTML5, CSS, Sass-ready styling
- WCAG 2.1 AA implementation
- Semantic HTML and ARIA
- Keyboard navigation and visible focus
- Accessible forms and validation
- Responsive enterprise UI
- SQL Server / Entity Framework Core
- Git and CI/CD
- Accessibility testing with axe and JAWS

## Architecture

Angular UI → ASP.NET Core Web API → Entity Framework Core → SQL Server

## Accessibility Highlights

- Skip-to-content navigation
- Logical heading hierarchy
- Semantic HTML5 elements
- Keyboard-accessible controls
- Visible focus indicators
- Accessible form labels and validation messages
- ARIA only where semantic HTML is insufficient
- Accessible status/error messaging
- Responsive layouts
- Color-contrast-conscious UI
- Accessibility test checklist for axe and JAWS

## Disclaimer

This is a portfolio/demo application. It contains no real government, healthcare, classified, or personally identifiable data.

## Running the Demo

### API

```bash
cd src/AccessibleCaseManagement.Api
dotnet restore
dotnet run
```

### UI

```bash
cd src/accessible-case-management-ui
npm install
npm start
```

See `docs/ACCESSIBILITY-TESTING.md` for the accessibility testing approach.
