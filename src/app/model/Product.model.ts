export class Product{
  id: number = 0;
  name: string = "";
  description: string = "";
  categoryId: number = 0;
  productionId: number = 0;
  price: number = 0;
  quantity: number = 0;
  status: string = "";
  avatarUrl: string = "";
  createdDate: Date = new Date();
  modifiedDate: Date = new Date();
}
