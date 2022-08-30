import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  form = this.fb.group({
    marketingName: ['', Validators.required],
    technicalName: [''],
    textArea: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const draft = localStorage.getItem('descriprionData');
    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((val) => {
        localStorage.setItem('descriprionData', JSON.stringify(val));
      });
  }
  reload() {
    if (this.form.controls.marketingName || this.form.controls.technicalName)
      window.location.reload();
  }
}
