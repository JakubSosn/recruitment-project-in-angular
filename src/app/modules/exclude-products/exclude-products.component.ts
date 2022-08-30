import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclude-products',
  templateUrl: './exclude-products.component.html',
  styleUrls: ['./exclude-products.component.scss'],
})
export class ExcludeProductsComponent implements OnInit {
  title: string = 'Exclude produtcs';

  constructor() {}

  ngOnInit(): void {}
}
