import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ingrediants',
  standalone: true,
  imports: [],
  templateUrl: './ingrediants.component.html',
  styleUrl: './ingrediants.component.css'
})
export class IngrediantsComponent {
  constructor(public appService:AppService){
  }
}
