import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-products',
  templateUrl: './choose-products.component.html',
  styleUrls: ['./choose-products.component.scss'],
})
export class ChooseProductsComponent implements OnInit {
  title: string = 'Choose Products';

  constructor() {}

  ngOnInit(): void {}
}
