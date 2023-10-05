import { navItems } from './../../nav';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'secureHomeSidebar',
  templateUrl: './securehomeSidebar.html'
})
export class SecureHomeSidebarComponent implements OnInit {
  // public navItems = navItems;
  public sidebarMinimized = true;
  public secNavItems = [];

  constructor(public router: Router) {
    console.log('SecureHomeSidebarComponent: constructor');
  }

  ngOnInit() {
    this.getNavItems();
  }

  public getNavItems(): any {
    const tempNavItems = [...navItems];
    this.secNavItems = tempNavItems;
    return this.secNavItems;
  }
}
