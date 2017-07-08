import { Component, OnInit } from '@angular/core';

export class RouteInfo {
  constructor(public path: string, public title: string){ }
}

export const ROUTES = [
  new RouteInfo('/dashboard', 'Dashboard'),
  new RouteInfo('/products', 'Productos'),
  new RouteInfo('/who-are-we', 'Quienes Somos'),  
  new RouteInfo('/contact', 'Contacto'),  
]

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private routes : any[];

  ngOnInit() {
    this.routes = ROUTES;
  }

}
