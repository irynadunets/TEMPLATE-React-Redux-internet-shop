export default class GoodstoreService {
  data = [

      { id: 1,
        name: 'apple ',
        weight: '500gr',
        price: 2,
        img: ''
      },
      { id: 2,
        name: 'bread ',
        weight: '800gr',
        price: 3,
        img: ''
      },
      { id: 3,
        name: 'orange ',
        weight: '600gr',
        price: 5,
        img: ''
      },
      { id: 4,
        name: 'banana ',
        weight: '800gr',
        price: 4,
        img: ''
        }
  ];
  getGoods(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.data)
    }, 700);
  });
  }
}
