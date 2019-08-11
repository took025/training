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
            ImageUrl: 'https://bostonbean.com.au/wp-content/uploads/2016/05/ACMECup-Demitasse-Black.jpg',
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
