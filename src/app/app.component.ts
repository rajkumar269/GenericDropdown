import { Component } from '@angular/core';

interface ICurrency {
  id: number;
  name: string;
  Code: string;
}

@Component({
  selector: 'app-root',
  template: `
  <ac-dropdown name="Currency" [items]="currencies" [(selectedItem)]="selectedCurrency">
    <ng-template let-currency="item">
        <span>{{currency.name}}</span>
    </ng-template>
  </ac-dropdown>
  `
})
export class AppComponent {
  public currencies : Array<ICurrency>;
  public selectedCurrency : ICurrency 
 
  public ngOnInit() {
    this.currencies = [
      { "id": 1, "Code": "GBP", "name": "British Pounds"},
      { "id": 2, "Code": "EUR", "name": "Euros"},
      { "id": 3, "Code": "USD", "name": "U.S. Dollars"},
    ];
    this.selectedCurrency =  { "id": 1600, "Code": "GBP", "name": "British Pounds"};
  }
}
