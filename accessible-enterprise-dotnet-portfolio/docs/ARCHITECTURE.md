# Architecture

```text
+-----------------------------+
| Angular Responsive UI       |
| WCAG 2.1 AA / Enterprise UI |
+-------------+---------------+
              |
              | HTTPS / REST
              v
+-----------------------------+
| ASP.NET Core .NET 8 API     |
| Controllers / Services      |
| Validation / Error Handling |
+-------------+---------------+
              |
              v
+-----------------------------+
| EF Core / SQL Server        |
+-----------------------------+
```

The application uses separation of concerns between presentation, API, business logic, and persistence.
