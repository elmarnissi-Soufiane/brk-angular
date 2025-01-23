import { Component } from '@angular/core';
import { LogoCourtierComponent } from "./logo-courtier/logo-courtier.component";
import { LogoProfileCourtierComponent } from "./logo-profile-courtier/logo-profile-courtier.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoCourtierComponent, LogoProfileCourtierComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
