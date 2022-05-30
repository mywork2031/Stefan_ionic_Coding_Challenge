import { Injectable } from '@angular/core';
import { Receipt } from './Receipt';
@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private receipts: Receipt[] = [{
    id: 1,
    name: 'Pancakes',
    address: 'Home',
    description: 'Some pancakes for Georgia, Some pancakes for Georgia',
    amount: 1.50,
    date: '06-10-2020',
    time: '12:20',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/ReceiptSwiss.jpg/170px-ReceiptSwiss.jpg'
  },
    {
      id: 2,
      name: 'Coke',
      address: 'Work',
      description: 'Some coca-cola for Mills',
      amount: 24.95,
      date: '12-08-2020',
      time: '19:20',
      imageURL: 'https://i.imgur.com/9C5Q9Rt.jpg'
    },
    {
      id: 3,
      name: 'Petrol in Tesco Extra',
      address: 'Home',
      description: 'Some pancakes for Dummy tesxtasiuch Georgia',
      amount: 11.50,
      date: '08-11-2020',
      time: '12:20',
      imageURL: 'https://i.imgur.com/w1iF3yD.jpg'
    },
    {
      id: 4,
      name: 'Krispy Kremes',
      address: 'Home',
      description: 'Somekiusadlffh sadliuhdlfg saiguh  pancakes for Georgia',
      amount: 110.00,
      date: '16-07-2020',
      time: '12:20',
      imageURL: 'https://i.redd.it/xvbmnif3fnt21.jpg'
    },
    {
      id: 5,
      name: 'Nuttella',
      address: 'Home',
      description: 'Some pancakes zsldivuhiuh sdliuhdf vlijh for Georgia',
      amount: 25.50,
      date: '02-10-2020',
      time: '12:20',
      imageURL: 'https://i.ebayimg.com/images/g/0kMAAOSw-VtbCgcF/s-l300.jpg'
    },
    {
      id: 6,
      name: 'Cherries',
      address: 'Home',
      description: 'Some pancakes kuihsdf sdfiuh dyh oids dsfhjefiju ds fciisidfoi sd lidvhoi  for Georgia',
      amount: 1.50,
      date: '06-10-2020',
      time: '12:20',
      imageURL: 'https://i.redd.it/go8r4r6opqe11.jpg'
    }];

  constructor() { }
  getAllReceipts() {
    return [...this.receipts];
  }

  getReceipt(id: number) {
    return {...this.receipts.find(receipt => {
      return receipt.id === id;
    })};
  }
  filterItems(searchTerm) {
    return this.receipts.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
}
