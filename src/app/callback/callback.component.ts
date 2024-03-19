import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {
  constructor(private route: ActivatedRoute) {
    console.log("callings");
    this.route.params
      .subscribe(v => console.log(JSON.parse(v['id'])));
  }
}
