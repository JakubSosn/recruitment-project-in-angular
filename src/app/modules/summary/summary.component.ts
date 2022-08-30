import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  title: string = 'Summary';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    this.router.navigateByUrl('/grid');
  }
}
