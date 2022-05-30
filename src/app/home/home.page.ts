import { Component, OnInit } from '@angular/core';
import { Receipt } from '../shared/Receipt';
import { ReceiptService } from '../shared/receipt.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  receipts: Receipt[];
  receiptsCount: number;
  searchTerm: string = "";
  items: any;
  constructor(private receiptService:ReceiptService) {}

  ngOnInit() {
    this.setFilteredItems();
  }

  ionViewWillEnter() {
    this.receipts = this.receiptService.getAllReceipts();
    this.receiptsCount = this.receipts.length;
  }

  setFilteredItems() {
    this.receipts = this.receiptService.filterItems(this.searchTerm);
    this.receiptsCount = this.receipts.length;
  }
}
