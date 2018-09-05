import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {

  public stocks: Array<Stock>;

  constructor(public router:Router) {
  }

  ngOnInit() {
    this.stocks = [
      new Stock(0, "BTC-比特币", 47244, 5, "比特币（BitCoin）的概念最初由中本聪在2009年提出，根据中本聪的思路设计发布的开源软件以及建构其上的P2P网络", ["IT", "互联网"]),
      new Stock(1, "ETH-以太坊", 1901, 4, "Ethereum（以太坊）是一个平台和一种编程语言，使开发人员能够建立和发布下一代分布式应用", ["金融", "互联网"]),
      new Stock(2, "XRP-瑞波币", 2.25, 1, "瑞波币是Ripple网络的基础货币，它可以在整个ripple网络中流通，总数量为1000亿，并且随着交易的增多而逐渐减少", ["IT"]),
      new Stock(3, "BCH-比特现金", 3652, 3, "2017年7月21日，比特币分叉方案BIP91已经获得全网算力支持，一致同意先进行隔离见证升级，并在之后的6个月内把底层区块链的区块大小升级至2M", ["房地产", "互联网"]),
      new Stock(4, "EOS-柚子", 39.62, 2, "EOS 为区块链奇才 BM （Daniel Larimer）领导开发的类似操作系统的区块链架构平台，旨在实现分布式应用的性能扩展。EOS 提供帐户，身份验证", ["IT", "互联网"]),
      new Stock(5, "XLM-恒星币", 1.5, 1, "恒星币（Stellar），一个由前瑞波币（Ripple）创始人Jed McCaleb发起的数字货币项目，用于搭建一个数字货币与法定货币之间传输的去中心化网关", ["IT", "互联网"]),
      new Stock(6, "LTC-莱特币", 407, 2, "莱特币Litecoin（简写：LTC，货币符号：Ł）是一种基于“点对点”(peer-to-peer)技术的网络货币，也是MIT/X11许可下的一个开源软件项目", ["IT", "互联网"]),
      new Stock(7, "USDT-泰达币", 6.68, 1, "2014年11月下旬，注册地为马恩岛和香港的公司Realcoin改名为Tether。2015年2月发布时就抱上了一条粗腿，当时比特币期货交易量最大交易平台", ["IT", "互联网"]),
    ]
  }

  create(){
    this.router.navigateByUrl('/stock/0')
  }

  update(stock:Stock){
    this.router.navigateByUrl('/stock/'+stock.id)
  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
