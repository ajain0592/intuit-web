import { navItems } from './../nav';
import { breadcrumbs } from './../breadcrumb';
import { Component, OnInit, Inject } from '@angular/core';
import { StorageService, SESSION_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './securehomeTemplate.html',
  styleUrls: ['./secureHomeTemplate.scss']
})
export class SecureHomeTemplateComponent implements OnInit {
  public secNavItems = [];
  public sidebarMinimized = true;
  public breadcrumbs = breadcrumbs;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public companyName: String = 'Intuit';

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
                                      private router: Router) {
    this.changes = new MutationObserver(mutations => {
      this.sidebarMinimized = document.body.classList.contains(
        'sidebar-minimized'
      );
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit(): void {
    this.getNavItems();
  }

  public getNavItems(): any {
    const tempNavItems = [...navItems];
    this.secNavItems = tempNavItems;
    return this.secNavItems;
  }

  public userSelect(selectedCard: String) {
    if(selectedCard === 'quickBooks') {
      this.router.navigate(['/securehome/quickbooks']);

    } else if (selectedCard === 'tSheet') {
      this.router.navigate(['/securehome/tsheets']);

    } else if (selectedCard === 'businessProfile') {
      this.router.navigate(['/securehome/profile']);
      
    } else if (selectedCard === 'viewrequest') {
      this.router.navigate(['/securehome/viewrequest']);
    }
    
  }
}
