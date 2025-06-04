import { Injectable } from '@angular/core';
import { DataRecipeItems } from '../models/Datarecipe.type';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  constructor() {}

  items: Array<DataRecipeItems> = [
    {
      id: 1,
      ProductName: 'coke',
      SellPrice: 100,
      Qty: 1,
    },
    {
      id: 2,
      ProductName: 'Sting',
      SellPrice: 100,
      Qty: 1,
    },
    {
      id: 3,
      ProductName: 'Tiger',
      SellPrice: 10.5,
      Qty: 1,
    },
    {
      id: 4,
      ProductName: 'Beer',
      SellPrice: 100,
      Qty: 1,
    },
    {
      id: 5,
      ProductName: 'Juice',
      SellPrice: 300,
      Qty: 1,
    },
    {
      id: 6,
      ProductName: 'Water',
      SellPrice: 200,
      Qty: 1,
    },
  ];
  total(): number {
    return this.items.reduce(
      (sum, item) => sum + item.SellPrice * (item.Qty ?? 0),
      0
    );
  }
}
