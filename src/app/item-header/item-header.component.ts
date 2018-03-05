import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-header',
  templateUrl: './item-header.component.html',
  styleUrls: ['./item-header.component.css']
})
export class ItemHeaderComponent implements OnInit {
  currentItem = {
    name: 'Rolex Oyster Perpetual 39',
    url: 'assets/Rolex-hero.jpg',
    logo: 'assets/Rolex-logo.svg'
  };

  constructor() { }

  ngOnInit() {
  }

}
