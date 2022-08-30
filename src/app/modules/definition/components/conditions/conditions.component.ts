import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent implements OnInit {
  firstSelector = ['Portal', 'Social Media', 'Personal Contact'];
  secondSelector = ['Type', 'Type1', 'Type2'];
  radioSelector = [
    {
      id: 1,
      name: 'Bussiness conditions',
      checked: true,
    },
    {
      id: 2,
      name: 'Base price 100%',
      checked: false,
    },
  ];
  checkboxSelector = [
    {
      id: 1,
      name: 'Connect with other promotions',
      checked: true,
    },
    {
      id: 2,
      name: 'Back promotion',
      checked: false,
    },
  ];

  constructor(public fb: FormBuilder) {}

  form = this.fb.group({
    fromWhere: ['', Validators.required],
    type: ['', Validators.required],
    startDate: ['', Validators.required],
    finishDate: [''],
    inputRadio: this.fb.array([]),
    checkboxDate: this.fb.array([]),
  });

  onRadioChange(e: any) {
    const inputRadio = this.form.get('inputRadio') as FormArray;

    if (e.target.checked) {
      inputRadio.push(new FormControl(e.target.value));
    } else {
      const index = inputRadio.controls.findIndex(
        (x) => x.value === e.target.value
      );

      inputRadio.removeAt(index);
    }
  }
  onCheckboxChange(e: any) {
    const checkboxDate = this.form.get('checkboxDate') as FormArray;

    if (e.target.checked) {
      checkboxDate.push(new FormControl(e.target.value));
    } else {
      const index = checkboxDate.controls.findIndex(
        (x) => x.value === e.target.value
      );

      checkboxDate.removeAt(index);
    }
  }

  changeFirstSelector(e: any) {
    this.form.controls.fromWhere?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeSecondSelector(e: any) {
    this.form.controls.type?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  radioChange(e: any) {
    this.form.controls.inputRadio?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  ngOnInit(): void {
    const draft = localStorage.getItem('conditionsData');
    if (draft) {
      this.form.patchValue(JSON.parse(draft));
      this.form.controls.startDate.setValue(
        this.formatDate(this.form.value.startDate)
      );
    }
    // Setting correct format date after getting it from local storage
    if (this.form.controls.finishDate && NaN) {
      this.form.controls.finishDate.setValue(
        this.formatDate(this.form.value.finishDate)
      );
    }

    this.form.valueChanges
      .pipe(filter(() => this.form.valid))
      .subscribe((val) => {
        localStorage.setItem('conditionsData', JSON.stringify(val));
      });
  }

  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
