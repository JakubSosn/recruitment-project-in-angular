import { Component, OnInit, Input } from '@angular/core';
import { InputData } from '../../interface/InputData';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string | undefined;
  @Input() name: string | undefined;
  @Input() formControlName: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() required: boolean | undefined;

  @Input() item: InputData | undefined;

  constructor() {}

  ngOnInit(): void {}
}
