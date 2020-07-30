import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        items: [{
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          routerLink: 'home'
        }
        ]
      },
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user',
        routerLink: 'usuario'
      }
    ];
  }

}
