import { Component, Inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(@Inject(AppService) private appService: AppService) {}
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
      console.log(data);
    })
  }
}
}
