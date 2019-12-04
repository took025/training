import { Injectable} from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    products =  [
        {
            productId: 1,
            productName: 'garden cart',
            productCode: 'GDN-0023',
            releasedate: 'march 18,2016',
            description: '15 gallon capacity',
            price: 32.992,
            StarRating: 2.2,
            // tslint:disable-next-line:max-line-length
            ImageUrl: 'https://images.homedepot-static.com/productImages/b2a0e937-99b7-40bb-a567-8b11a2eb63ef/svn/sontax-yard-carts-73599-64_1000.jpg',
            // tslint:disable-next-line: max-line-length
            about: 'A cart is a vehicle designed for transport, using two wheels and normally pulled by one or a pair of draught animals. A handcart is pulled or pushed by one or more people. It is different from a dray or wagon, which is a heavy transport vehicle with four wheels and typically two or more horses, or a carriage, which is used exclusively for transporting humans.'
          },
          {
            productId: 2,
            productName: 'Hammer',
            productCode: 'TBX-0023',
            releasedate: 'may 18,2016',
            description: '15 gallon capacity',
            price: 8.9,
            StarRating: 4.8,
            ImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81fKIh7xi9L._SX425_.jpg',
            // tslint:disable-next-line: max-line-length
            about: 'A hammer is a tool consisting of a weighted "head" fixed to a long handle that is swung to deliver an impact to a small area of an object. This can be, for example, to drive nails into wood, to shape metal (as with a forge), or to crush rock.[1][2] Hammers are used for a wide range of driving, shaping, and breaking applications.'
          },
          {
            productId: 3,
            productName: 'cup',
            productCode: 'TBX-023',
            releasedate: 'june 18,2016',
            description: '15 gallon capacity',
            price: 8.9,
            StarRating: 3.5,
            // tslint:disable-next-line: max-line-length
            ImageUrl: 'data:image/jpeg;base64,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',
            about: ''
          },
          {
            productId: 4,
            productName: 'knife',
            productCode: 'TBX-123',
            releasedate: 'june 18,2016',
            description: '15 gallon capacity',
            price: 12.9,
            StarRating: 5,
            ImageUrl: 'https://c.76.my/Malaysia/columbia-usa-1318a-hunting-knife-chewhoung-1712-17-chewhoung@13.jpg',
            // tslint:disable-next-line: max-line-length
            about: 'A cup is an open-top container used to hold liquids for pouring or drinking; it also can be used to store solids for pouring (e.g., sugar, flour, grains).[1][2] Cups may be made of glass, metal, china,[3] clay, wood, stone, polystyrene, plastic, aluminium or other materials, and are usually fixed with a stem, handles, or other adornments. Cups are used for quenching thirst across a wide range of cultures and social classes,[4] and different styles of cups may be used for different liquids or in different situations.[5] Cups of different styles may be used for different types of liquids or other foodstuffs (e.g. teacups and measuring cups), in different situations (e.g. at water stations or in ceremonies and rituals), or for decoration.[6][7]'
          },
          {
            productId: 5,
            productName: 'plate',
            productCode: 'TBX-023',
            releasedate: 'june 18,2016',
            description: '15 gallon capacity',
            price: 3.5,
            StarRating: 3.0,
            ImageUrl: 'https://noplastic.ca/wp-content/uploads/2012/06/Stainless-Steel-Dinner-Plate-Premium-Quality.jpg',
            // tslint:disable-next-line: max-line-length
            about: 'A plate is a broad, concave, but mainly flat vessel on which food can be served.[1] A plate can also be used for ceremonial or decorative purposes. Most plates are circular, but they may be any shape, or made of any water-resistant material. Generally plates are raised round the edges, either by a curving up, or a wider lip or raised portion. Vessels with no lip, especially if they have a more rounded profile, are likely to be considered as bowls or dishes, as are very large vessels with a plate shape. Plates are dishware, and tableware. Plates in wood, pottery and metal go back into antiquity in many cultures.'
          }
      ];
    getProducts(): IProduct[] {
        return this.products;
    }
}
