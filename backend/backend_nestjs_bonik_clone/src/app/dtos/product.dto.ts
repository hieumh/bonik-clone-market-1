import { AutoMap } from '@automapper/classes';

export class ProductDto {
  @AutoMap()
  readonly productId: string;

  @AutoMap()
  readonly categoryId: string;

  @AutoMap()
  readonly productName: string;

  @AutoMap()
  productSoldCount: number;

  salePercent: number;

  @AutoMap()
  price: number;

  @AutoMap()
  description: string;

  @AutoMap()
  rating: number;
}
