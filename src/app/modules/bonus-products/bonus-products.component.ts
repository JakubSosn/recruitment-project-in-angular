import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus-products',
  templateUrl: './bonus-products.component.html',
  styleUrls: ['./bonus-products.component.scss'],
})
export class BonusProductsComponent implements OnInit {
  title: string = 'Bonus products';

  constructor() {}

  ngOnInit(): void {}
}
