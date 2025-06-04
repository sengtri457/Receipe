export type DataRecipeItems = {
  id: number;
  ProductName: string;
  SellPrice: number;
  TotalPrice?: number;
  Qty?: number;
  Tax?: number;
  managerName?: string;
  date?: Date | string;
  address?: string;
};
