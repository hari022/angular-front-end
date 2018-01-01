import { Injectable } from '@angular/core';
import {Http, Response, HttpModule, RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {reject} from "q";
@Injectable()
export class EventService {

    public response;
    public id;

  constructor(private http: Http) { }

  getEvents(plan) {
    return this.http.get('http://127.0.0.1:8000/api/events/' + plan)
        .map(
            (response: Response) => {
              return response.json().events;
            }
    );
  }
  addToCart(id) {
      this.id = id
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      const promise = new Promise((resolve, reject) => {
          this.http.post('http://127.0.0.1:8000/api/cart/' + id, '', options).toPromise()
              .then(() => { // Success
                 // this.response = res.json().results;
                  resolve();
              });
      });
      return promise;
      // console.log(id);
      // console.log('http://127.0.0.1:8000/api/cart/' + id)
   // .map(
          // (response: Response) => {
          //     return response ;
          // });
  }
    // private returnData(res: Response) {
    //     return res;
    // }
  getCart() {
      return this.http.get('http://127.0.0.1:8000/api/cart/')
          .map(
              (response: Response) => {
                  return response.json().events;
              });
  }

  deleteCartEvent() {
      console.log(this.id);
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      const promise = new Promise((resolve, reject) => {
          this.http.delete('http://127.0.0.1:8000/api/cart/' + this.id,
              options).toPromise()
              .then(() => { // Success
                  // this.response = res.json().results;
                  resolve();
              });
      });
      return promise;
  }

  sendMail(email, person, plan){

      const headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      const promise = new Promise((resolve, reject) => {
          this.http.post('http://127.0.0.1:8000/api/email',
              {"email": email,
              "number": person,
              "plan": plan},
              options).toPromise()
              .then(() => { // Success
                  // this.response = res.json().results;
                  resolve();
              });
      });
      return promise;

  }

}
