import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-clients',
  templateUrl: './choose-clients.component.html',
  styleUrls: ['./choose-clients.component.scss'],
})
export class ChooseClientsComponent implements OnInit {
  title: string = 'Choose clients';

  constructor() {}

  ngOnInit(): void {}
}
