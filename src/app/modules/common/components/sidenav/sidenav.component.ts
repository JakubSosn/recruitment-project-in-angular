import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  flag = true;
  disable: string | undefined;
  bgColor: string | undefined;
  fontColor: string | undefined;

  form = this.fb.group({
    marketingName: ['', Validators.required],
    technicalName: [''],
    textArea: [''],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const draft = localStorage.getItem('descriprionData');
    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    if (!this.form.value.marketingName) {
      this.disable = 'pointer-events: none;';
      this.bgColor = 'gray';
      this.fontColor = 'gray';
    } else {
      return;
    }
  }
}
