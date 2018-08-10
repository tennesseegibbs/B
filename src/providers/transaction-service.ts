import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionService {
  public API = 'http://localhost:8080';
  

  constructor(public http: HttpClient) {
  }

  getTransactions(): Observable<any> {
    return this.http.get(this.API + 'transact/transactions');
  }
}