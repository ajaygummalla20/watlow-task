import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cocktail-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-info.component.html',
  styleUrl: './cocktail-info.component.css'
})
export class CocktailInfoComponent {
  cocktailItems:any = []
  constructor(public appService:AppService,private router: Router){
    this.cocktailItems = [...this.appService.selectedCocktailTypes]
    console.log(this.cocktailItems)
  }

  
  filterCocktails(type:any){
    if(type === 'Alcoholic'){
      this.cocktailItems = this.appService.selectedCocktailTypes.filter((x:any) => x.strAlcoholic === 'Alcoholic');
    }else{
      this.cocktailItems = this.appService.selectedCocktailTypes.filter((x:any) => x.strAlcoholic !== 'Alcoholic')
    }
  }
  onCocktailClick(item:any){
    this.appService.selectedCoaktail = item;
    this.router.navigate(['/ingredeaints']);
  }
}
