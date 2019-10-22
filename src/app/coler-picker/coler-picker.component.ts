import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coler-picker',
  templateUrl: './coler-picker.component.html',
  styleUrls: ['./coler-picker.component.css']
})
export class ColerPickerComponent implements OnInit {
  background = '#00e067';
  onChange(value) {
    this.background = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
