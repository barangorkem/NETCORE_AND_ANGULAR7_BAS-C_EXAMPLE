import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'http://localhost:55896/api/'
  formData: PaymentDetail;
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.rootURL + "PaymentDetail", this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + "PaymentDetail/" + this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id)
  {
    return this.http.delete(this.rootURL+"PaymentDetail/"+id);
  }
  refreshList() {
    this.http.get(this.rootURL + "PaymentDetail")
      .toPromise()
      .then(res => this.list = res as PaymentDetail[])
  }
}
