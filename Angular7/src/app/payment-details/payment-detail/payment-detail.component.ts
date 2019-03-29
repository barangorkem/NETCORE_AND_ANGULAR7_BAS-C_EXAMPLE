import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm, Form } from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {

    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      this.resetForm();
    }
    this.service.formData = {
      PMId: 0,
      CardOwnerName: "",
      CardNumber: "",
      ExpirationDate: "",
      CVV: ""
    };
  }
  onSubmit(form:NgForm) {

    if(this.service.formData.PMId==0)
      {
        this.service.postPaymentDetail().subscribe(
          res=>{
            this.resetForm(form);
            this.service.refreshList();
          },
          err=>{}
        );
      }
      else
      {
        this.service.putPaymentDetail().subscribe(
          res=>{
            this.resetForm(form);
            this.service.refreshList();
          },
          err=>{}
        );
      }
   
  }
}
