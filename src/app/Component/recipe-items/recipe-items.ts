import { Component, inject, OnInit, signal } from '@angular/core';
import { DataRecipeItems } from '../../models/Datarecipe.type';
import { Recipe } from '../../services/recipe';

@Component({
  selector: 'app-recipe-items',
  imports: [],
  templateUrl: './recipe-items.html',
  styleUrl: './recipe-items.css',
})
export class RecipeItems implements OnInit {
  recipeService = inject(Recipe);
  displayProduct = signal<Array<DataRecipeItems>>([]);
  total = this.recipeService.total();
  totalQty = this.recipeService.totalQty();
  totalCash: number = this.recipeService.totalCash();
  cash: number = this.recipeService.cash;
  Address = ' street 123 Khan SenSok Phnome Penh';
  Tell: string = '099706869';
  barcode: string = '1234567890';
  Bankcard = Math.floor(Math.random() * parseInt(this.barcode));
  // ApproveCode: any =
  //   Math.floor(Math.random() * parseInt(this.barcode)) + 'äuaua';
  getCustomCode(): string {
    const numbers = this.barcode;
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '#';
    for (let i = 0; i < 3; i++) {
      code += numbers[Math.floor(Math.random() * numbers.length)];
      code += letters[Math.floor(Math.random() * letters.length)];
    }
    return code;
  }
  ApproveCode = this.getCustomCode();
  constructor() {
    console.log(this.Bankcard);
  }

  ngOnInit(): void {
    this.displayProduct.set(this.recipeService.items);
  }
}
