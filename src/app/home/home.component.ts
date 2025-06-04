import { Component, Inject } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject(AppService) private appService: AppService,private router: Router) {}
  cocktails = [
  {
    "name": "Old Fashioned",
    "category": "Classic"
  },
  {
    "name": "Mojito",
    "category": "Fruity and Refreshing"
  },
  {
    "name": "Long Island Iced Tea",
    "category": "Spirited and Strong"
  },
  {
    "name": "Cosmopolitan",
    "category": "Fruity and Refreshing"
  },
  {
    "name": "Whiskey Sour",
    "category": "Classic"
  },
  {
    "name": "Pina Colada",
    "category": "Classic"
  }
];

onCocktailClick(item:any){
  if(item && item.name) {
    this.appService.getCocktails(item.name)?.subscribe(data => {
      if(data && data.drinks){
        this.appService.selectedCocktailTypes = data.drinks;
        this.router.navigate(['/cocktails']);
      }
    },error => {
      console.log("Failed to Fetch cocktails")
    })
  }
}
}
