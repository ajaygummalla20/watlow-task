import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Router } from '@angular/router';
import { IngrediantsComponent } from "./ingrediants/ingrediants.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IngrediantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code-test';
  constructor(private router: Router){
    this.router.navigate(['/home']);
  }
}
