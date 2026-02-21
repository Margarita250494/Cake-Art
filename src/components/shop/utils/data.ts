import { ShopCategory, ShopType } from '@/components/shop/utils/types'

export const dataShop: ShopType[] = [
  {
    id: 'cheesecake-with-grapes',
    title: 'No-bake cheesecake with grapes',
    description: 'Pasteurized cream, ricotta cheese, sour cream, wheat flour,  grapes, sugar, Riesling, vanilla bean, violet flowers, gelatin.',
    image: '/sweets/cheesecakeGrapes.jpg',
    category: ShopCategory.SWEETS
  },
  {
    id: 'very-chocolate-tart',
    title: 'Very chocolate tart',
    description: 'Dark chocolate, milk chocolate, pasteurized cream, wheat flour, sugar, pasteurized milk,  cornstarch, cocoa powder, vanilla bean, Chinese forget-me-not flowers.',
    image: '/sweets/chocolateTart.jpg',
    category: ShopCategory.SWEETS
  },
  {
    id: 'tarot-with-frangipane',
    title: 'Tarot with frangipane, cherry, and French meringue',
    description: 'Cherries, wheat flour, chicken egg, butter, almond flour, sugar, salt.',
    image: '/sweets/frangipaneCherry.jpg',
    category: ShopCategory.SWEETS

  },
  {
    id: 'japanese-chocolate-cheesecake',
    title: 'Japanese chocolate cheesecake with blackcurrant cream',
    description: 'Blackcurrants, chicken egg, pasteurized milk, cream cheese, dark chocolate, sugar, wheat flour, butter, cornstarch, salt.',
    image: '/sweets/JapaneseChocolateCheesecake.jpg',
    category: ShopCategory.SWEETS

  },
  {
    id: 'lemon-dessert',
    title: 'Lemon dessert',
    description: 'Lemon juice, chicken egg, butter, wheat flour, sugar, vanilla bean, gelatin, salt, Chinese forget-me-not flowers.',
    image: '/sweets/LemonDessert.jpg',
    category: ShopCategory.SWEETS
  },
  {
    id: 'spicy-pie',
    title: 'Spicy pie with coconut cream',
    description: 'Coconut cream for cooking, butter, wheat flour, sugar, chicken egg, ground cardamom, ground cinnamon, ground ginger, cooking salt, flowers.',
    image: '/sweets/pieCoconutCream.jpg',
    category: ShopCategory.SWEETS

  },
  {
    id: 'sweet-cherry-tart',
    title: 'Sweet cherry tart',
    description: 'Sweet cherry, wheat flour, chicken egg, butter, cream cheese, almond flour, vanilla bean, sugar, salt.',
    image: '/sweets/SweetCherryTart.jpeg',
    category: ShopCategory.SWEETS
  },
  {
    id: 'yogurt-pie',
    title: 'Yogurt pie with blackcurrant',
    description: 'Blackcurrants, yogurt, chicken egg, wheat flour, butter, cream cheese, sugar, salt.',
    image: '/sweets/YogurtPie.jpg',
    category: ShopCategory.SWEETS
  },

  // NON_SWEETS
  {
    id: 'quiche-with-tomatoes',
    title: 'Quiche with tomatoes and feta cheese',
    description: 'Wheat flour, butter, cherry tomatoes, feta cheese, cream, chicken egg, salt, viola flowers, gelatin/agar agar.',
    image: '/nonSweets/KishWithTomatoes.jpg',
    category: ShopCategory.NON_SWEETS

  },
  {
    id: 'goat-cheese',
    title: 'Goat cheese and grape pie',
    description: 'Wheat flour, butter, grapes, goat cheese, parmesan cheese, cream, sour cream, chicken egg, table salt.',
    image: '/nonSweets/GoatCheeseGrape.jpg',
    category: ShopCategory.NON_SWEETS
  },
  {
    id: 'quiche-with-bacon',
    title: 'Quiche with bacon and pumpkin',
    description: 'Wheat flour, butter, pumpkin, bacon, cream, chicken egg, feta cheese, ricotta cheese, salt, cinnamon.',
    image: '/nonSweets/QuicheBaconPumpkin.jpg',
    category: ShopCategory.NON_SWEETS
  },
  //CAKES
  {
    id: 'Art-Cake',
    title: 'Art Cake',
    description: '- You can order a cake for your celebration,whether\n' +
      '                            it\'s a birthday, wedding, or just a gathering with\n' +
      '                            family and friends!',
    image: '/cakes/1-1.jpg',
    category: ShopCategory.CAKES
  },
  {
    id: 'individual',
    description: 'Each cake is individual.  We will choose with you the shape and flavor of the\n' +
      '                            layers for the cake.  We will select the best combination of berry and\n' +
      '                            cream fillings.',
    image: '/cakes/2-1.jpg',
    category: ShopCategory.CAKES

  },
  {
    id: 'decorating',
    description: 'For decorating the cake, we can use edible and\n' +
      '                            decorative flowers.  I am happy to offer' +
      ' an option for a cake without sugar/gluten/lactose.',
    image: '/cakes/3-1.jpg',
    category: ShopCategory.CAKES
  },
  {
    id: 'calculated',
    description: 'The price of the cake is calculated after determining all' +
      ' parameters.',
    image: '/cakes/4-1.jpg',
    category: ShopCategory.CAKES
  }
]