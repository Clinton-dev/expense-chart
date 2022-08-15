import { Component, OnInit } from '@angular/core';
import { Tolls } from 'src/app/mock-tolls';
import { Toll } from 'src/app/toll';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  expenses: Toll[] = [
    { "name": "mon", "value": 17.45 },
    { "name": "tue", "value": 34.91 },
    { "name": "wed", "value": 52.36 },
    { "name": "thu", "value": 31.07 },
    { "name": "fri", "value": 23.39 },
    { "name": "sat", "value": 43.28 },
    { "name": "sun", "value": 25.48 }
  ];

  colors = [{ name: "mon", value: 'hsl(10, 79%, 65%)' }, { name: "tue", value: 'hsl(10, 79%, 65%)' }, { name: "wen", value: 'hsl(186, 34%, 60%)' }, { name: "thu", value: 'hsl(10, 79%, 65%)' }, { name: "fri", value: 'hsl(10, 79%, 65%)' }, { name: "sat", value: 'hsl(10, 79%, 65%)' }, { name: "sun", value: 'hsl(10, 79%, 65%)' }]

  constructor() { }

  ngOnInit(): void { }

}
