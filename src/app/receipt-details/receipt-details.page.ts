import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ReceiptService } from '../shared/receipt.service';
@Component({
  selector: 'app-receipt-details',
  templateUrl: './receipt-details.page.html',
  styleUrls: ['./receipt-details.page.scss'],
})
export class ReceiptDetailsPage implements OnInit {
  reciptId:any;
  receiptDetails:any;
  constructor(private actRoute: ActivatedRoute,
    private receiptService:ReceiptService) {

    this.reciptId = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    this.receiptDetails = this.receiptService.getReceipt(this.reciptId);
    console.log("receiptDetails:::::", this.receiptDetails);
   }

  ngOnInit() {
  }

}
