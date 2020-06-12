import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Output() addIngredient = new EventEmitter();
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    console.log('Add item ', this.name);
    console.log('Add item ', this.amount);
    this.addIngredient.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
    });
  }

}
