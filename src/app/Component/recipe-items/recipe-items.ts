import { Component, inject, OnInit, signal } from '@angular/core';
import { DataRecipeItems } from '../../models/Datarecipe.type';
import { Recipe } from '../../services/recipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recipe-items',
  imports: [DatePipe],
  templateUrl: './recipe-items.html',
  styleUrl: './recipe-items.css',
})
export class RecipeItems implements OnInit {
  recipeService = inject(Recipe);
  displayProduct = signal<Array<DataRecipeItems>>([]);
  total = this.recipeService.total();
  Address = 'Phnome Penh';
  ManagerName = 'Bun Snegtri';
  myDate: Date = new Date();
  barcode: string = '1234567890';

  ngOnInit(): void {
    this.displayProduct.set(this.recipeService.items);
  }
}
