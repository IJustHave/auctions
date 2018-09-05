import {Component, OnInit} from '@angular/core';
import {Stock} from "../stock-manager/stock-manager.component";

@Component({
  selector: 'app-stockform',
  templateUrl: './stockform.component.html',
  styleUrls: ['./stockform.component.css']
})
export class StockformComponent implements OnInit {
  stock: Stock;

  constructor() {
  }

  ngOnInit() {
    this.stock = new Stock(0, "BTC-比特币", 47244, 5, "比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络", ["IT", "互联网"]);
  }

}
