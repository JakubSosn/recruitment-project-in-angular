import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  formDescription = new FormGroup({
    marketingName: new FormControl(''),
    technicalName: new FormControl(''),
    textArea: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    const getLocalDescriptionData = localStorage.getItem('descriprionData');
    if (getLocalDescriptionData) {
      this.formDescription.setValue(JSON.parse(getLocalDescriptionData));
    }
  }

  editForm() {
    this.router.navigateByUrl('/definition');
  }
  deleteForm() {
    localStorage.removeItem('descriprionData');
    localStorage.removeItem('conditionsData');
    window.location.reload();
  }
}
