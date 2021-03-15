import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  ngOnInit(): void {
  }

  names = [];
  name: string;

  power = 10;

  addName(name: string) {
    this.names.push(name);
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }


}
