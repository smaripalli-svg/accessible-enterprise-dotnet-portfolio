using Microsoft.AspNetCore.Mvc;

namespace AccessibleCaseManagement.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CasesController : ControllerBase
{
    private static readonly List<CaseItem> Cases =
    [
        new(1001, "Accessibility Review", "Open", "Enterprise Portal"),
        new(1002, "Application Enhancement", "In Progress", "Benefits Portal"),
        new(1003, "Production Defect", "Resolved", "Case Management")
    ];

    [HttpGet]
    public ActionResult<IEnumerable<CaseItem>> GetCases() => Ok(Cases);

    [HttpGet("{id:int}")]
    public ActionResult<CaseItem> GetCase(int id)
    {
        var item = Cases.FirstOrDefault(x => x.Id == id);
        return item is null ? NotFound() : Ok(item);
    }
}

public record CaseItem(int Id, string Title, string Status, string Application);
