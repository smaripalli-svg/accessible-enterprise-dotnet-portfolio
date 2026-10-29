import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <a class="skip-link" href="#main-content">Skip to main content</a>

    <header class="site-header">
      <div>
        <p class="eyebrow">Enterprise Portfolio Demo</p>
        <h1>Case Management Portal</h1>
      </div>
      <nav aria-label="Primary navigation">
        <a href="#cases">Cases</a>
        <a href="#accessibility">Accessibility</a>
      </nav>
    </header>

    <main id="main-content">
      <section aria-labelledby="cases-heading" id="cases">
        <h2 id="cases-heading">Cases</h2>
        <p>Accessible enterprise case-management interface demonstrating WCAG 2.1 AA practices.</p>

        <div class="table-wrap">
          <table>
            <caption>Current enterprise cases</caption>
            <thead>
              <tr>
                <th scope="col">Case ID</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>Accessibility Review</td>
                <td>Open</td>
                <td>Enterprise Portal</td>
              </tr>
              <tr>
                <td>1002</td>
                <td>Application Enhancement</td>
                <td>In Progress</td>
                <td>Benefits Portal</td>
              </tr>
              <tr>
                <td>1003</td>
                <td>Production Defect</td>
                <td>Resolved</td>
                <td>Case Management</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="form-heading">
        <h2 id="form-heading">Create a Case</h2>
        <form (submit)="$event.preventDefault()" novalidate>
          <div class="form-row">
            <label for="title">Case title <span aria-hidden="true">*</span></label>
            <input id="title" name="title" required aria-describedby="title-help">
            <small id="title-help">Enter a short description of the request.</small>
          </div>

          <button type="submit">Create case</button>
        </form>
      </section>

      <section id="accessibility" aria-labelledby="accessibility-heading">
        <h2 id="accessibility-heading">Accessibility Features</h2>
        <ul>
          <li>Semantic HTML and heading hierarchy</li>
          <li>Keyboard navigation and visible focus</li>
          <li>Accessible form labels and instructions</li>
          <li>Responsive enterprise layout</li>
          <li>Screen-reader-friendly structure</li>
          <li>axe and JAWS testing guidance</li>
        </ul>
      </section>
    </main>

    <footer>
      <p>Portfolio demonstration — no real or sensitive data.</p>
    </footer>
  `,
  styles: [`
    :host { font-family: Arial, sans-serif; color: #172033; display: block; }
    body { margin: 0; }
    .site-header { display:flex; justify-content:space-between; gap:2rem; padding:1.5rem 5%; border-bottom:1px solid #ccc; }
    .site-header nav { display:flex; gap:1rem; align-items:center; }
    main { max-width:1100px; margin:auto; padding:2rem 5%; }
    section { margin-bottom:3rem; }
    table { width:100%; border-collapse:collapse; }
    th, td { border:1px solid #777; padding:.8rem; text-align:left; }
    th { background:#eee; }
    .table-wrap { overflow-x:auto; }
    .form-row { display:flex; flex-direction:column; max-width:500px; gap:.4rem; margin-bottom:1rem; }
    input { padding:.75rem; border:2px solid #555; border-radius:4px; }
    button { padding:.75rem 1.25rem; border:2px solid #172033; border-radius:4px; cursor:pointer; }
    a { color:#0645ad; }
    a:focus, button:focus, input:focus { outline:4px solid #ffbf47; outline-offset:2px; }
    .skip-link { position:absolute; left:-9999px; top:1rem; background:white; padding:.75rem; border:2px solid #172033; }
    .skip-link:focus { left:1rem; z-index:1000; }
    .eyebrow { margin:0; font-weight:bold; }
    footer { border-top:1px solid #ccc; padding:1.5rem 5%; }
    @media (max-width:700px) {
      .site-header { flex-direction:column; }
      .site-header nav { flex-wrap:wrap; }
    }
  `]
})
class AppComponent {}

bootstrapApplication(AppComponent);
