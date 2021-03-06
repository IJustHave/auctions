import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {StockManagerComponent} from './stock/stock-manager/stock-manager.component';
import {StarsComponent} from './stars/stars.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {StockformComponent} from './stock/stockform/stockform.component';

const routeConfig: Routes = [
  //重定向路由

  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'stock',component: StockManagerComponent},
  {path: 'stock/:id', component: StockformComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManagerComponent,
    StarsComponent,
    DashboardComponent,
    StockformComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
