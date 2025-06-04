import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeItems } from './Component/recipe-items/recipe-items';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeItems],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'RecipeAngular';
}
