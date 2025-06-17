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
  empt = '';
  cashMoney = this.recipeService.cash;
  barcode: number = Math.floor(Math.random() * 10000000000);
  Bankcard = Math.floor(Math.random() * 1e9)
    .toString()
    .padStart(9, '0');
  formatted = this.Bankcard.replace(/(.{3})(?=\d)/g, '$1 ');
  pricelist: Array<{ SellPrice: number }> = this.recipeService.items; // Assuming items is an array of objects with a price property
  change: number = 0;
  getCustomCode(): string {
    const numbers: string = String(this.barcode);
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
  CashTotal: number = 0;
  ChangeCash: number = 0;
  ngOnInit(): void {
    this.displayProduct.set(this.recipeService.items);
    if (this.cashMoney != 0) {
      let sum = 0;
      for (let i = 0; i < this.pricelist.length; i++) {
        sum += this.pricelist[i].SellPrice;
      }
      this.CashTotal = sum;
      this.ChangeCash = this.cashMoney - this.CashTotal;
    }
  }
}
