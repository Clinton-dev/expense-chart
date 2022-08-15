import { Component, OnInit } from '@angular/core';
import { Tolls } from 'src/app/mock-tolls';
import { Toll } from 'src/app/toll';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  expenses: Toll[] = Tolls;
  total: number = 0;
  maxHeight: number = 160;

  constructor() { }

  ngOnInit(): void {
    this.chart();
    console.log(this.expenses);
  }

  chart() {
    this.expenses.forEach(expense => {
      this.total += expense.amount;
    });

    this.expenses.forEach(expense => {
      expense.size = Math.round((expense.amount * this.maxHeight) / this.total) + '%';
    })
  }

}
