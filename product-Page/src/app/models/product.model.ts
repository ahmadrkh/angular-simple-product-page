export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;   // optional fields use ?
  inStock: boolean;
}

// Use it everywhere:
products: Product[] = [...];
addToCart(product: Product): void { ... }
