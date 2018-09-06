import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Array<Menu>
  currentid: number = 1;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.menus = [
      new Menu(1, "首页", "/auctions/dashboard"),
      new Menu(2, "虚拟币管理", '/auctions/stock')
    ]
  }

  nav(menu: Menu) {
    this.router.navigate([menu.link])
    this.currentid = menu.id;
  }

}

export class Menu {
  constructor(public id: number,
              public name: string,
              public link: string) {

  }
}
