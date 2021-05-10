import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[];

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.buildMenus();
  }

  buildMenus(): void {
    this.translateService.get(['menu.app-a', 'menu.app-b', 'menu.feature-a', 'menu.feature-b', 'menu.feature-c', 'menu.shell'])
      .subscribe(translations => {
        this.createMainMenu(translations);
      });
  }

  createMainMenu(translations): void {
    this.menuItems = [
      {
        label: translations['menu.shell'],
        routerLink: '/'
      },
      {
        label: translations['menu.app-a'],
        items: [
          {
            label: translations['menu.feature-a'],
            routerLink: '/app-a/feature-a'
          },
          {
            label: translations['menu.feature-b'],
            routerLink: '/app-a/feature-b'
          }
        ]
      },
      {
        label: translations['menu.app-b'],
        items: [
          {
            label: translations['menu.feature-a'],
            routerLink: '/app-b/feature-a'
          },
          {
            label: translations['menu.feature-b'],
            routerLink: '/app-b/feature-b'
          },
          {
            label: translations['menu.feature-c'],
            routerLink: '/app-b/feature-c'
          }
        ]
      },
    ];
  }

  changeLang(lang: string): void {
    this.translateService.use(lang);
    this.buildMenus();
  }
}
