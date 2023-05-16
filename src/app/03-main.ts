import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));
  console.log('getAll');

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map((item) => item.price));

  const productId = products[10].id;

  console.log('--'.repeat(10));
  console.log('update');

  await productService.update(productId, {
    price: 1000,
    title: 'Nuevo productito',
    description: 'nueva descripcion',
  });

  console.log('--'.repeat(10));
  console.log('findOne');

  const product = await productService.findOne(productId);
  console.log(product);
})();
