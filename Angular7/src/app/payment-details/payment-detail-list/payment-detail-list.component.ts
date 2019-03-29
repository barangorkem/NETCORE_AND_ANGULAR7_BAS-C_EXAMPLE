import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(item: PaymentDetail) {
    console.log(item);
    this.service.formData = Object.assign({}, item);
  }
  onDelete(id)
  {
    this.service.deletePaymentDetail(id).subscribe(res=>{
      this.service.refreshList();
    },
    err=>{
      
    })
  }

}
