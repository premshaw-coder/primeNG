import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

declare var Razorpay: any;
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FormsModule, HttpClientModule, RouterModule],
  providers: [HttpClient],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    // console.log(window.location.pathname)
    // if (window.location.pathname.length > 4) {
    //   this.http.get('http://localhost:3000/phonePe/paymentCapture' + window.location.pathname).subscribe((res: any) => {
    //     console.log(res)
    //   });
    // }
  }

  initialize() {
    let f = document.createElement('form');
    f.setAttribute('method', 'post');
    f.setAttribute('action', 'http://localhost:3000/razorpay/order'); //Your action URL
    document.body.appendChild(f); //Add the form to the body
    f.submit()
  }

  razorPayOptions = {
    "key": "",
    "amount": "",
    "currency": "INR",
    "name": "",
    "description": "Skartz Payment",
    "order_id": "",
    "handler": (res: any) => {
      console.log(res);
      try{
        this.http.post('http://localhost:3000/razorpay/paymentCapture', res).subscribe((data => {
          console.log(data)
        }))
      }
      catch(err){
        console.log(err)
      }
     
    }
  }

  buyRazorPay() {
    this.http.post('http://localhost:3000/razorpay/order', "").subscribe((res: any) => {
      this.razorPayOptions.key = res['key'];
      this.razorPayOptions.amount = res['amount'];
      this.razorPayOptions.name = "prem";
      this.razorPayOptions.order_id = res['id']
      // this.razorPayOptions.handler(res)
      var rzp1 = new Razorpay(this.razorPayOptions);
      rzp1.open()
    })
  }

  buyWithPhonepe() {
    let f = document.createElement('form');
    f.setAttribute('method', 'get');
    f.setAttribute('action', 'http://localhost:3000/phonePe/initiate/payment'); //Your action URL
    document.body.appendChild(f); //Add the form to the body
    f.submit();

    // this.http.get('http://localhost:3000/phonePe/initiate/payment').subscribe((res: any) => {
    //   console.log(res)
    // });
  }
}
