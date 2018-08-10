import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentService {
  public API = 'http://localhost:8080';
  

  constructor(public http: HttpClient) {
  }

  postTransactions(createAccountInfo : any) {
    return this.http.post(this.API + '/transact/addTx', createAccountInfo);
  }
}