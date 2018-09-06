import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: string;
  pageDesc: string;

  constructor(router: Router) {
    router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        if (event.url == '/auctions/dashboard' || event.url == "/auctions/") {
          this.pageTitle = "首页";
          this.pageDesc = "";
        } else if (event.url.startsWith("/auctions/stock")) {
          this.pageTitle = "虚拟币管理系统";
          this.pageDesc = "进行虚拟币的增删改查";
        }
      }
    })
  }

  ngOnInit() {
  }

}
