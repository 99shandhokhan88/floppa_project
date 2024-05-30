export interface Floppa {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  date: Date;
  material: string;
  sizeSupplyCount: {
    XS: number;
    S: number;
    M: number;
    L: number;
    XL: number;
  };
}
