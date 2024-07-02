import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {ExpansionPanelComponent, ExpansionPanelItem} from "./expansion-panel/expansion-panel.component";
import {ChildMenuComponent, slideMenuItemChild} from "./child-menu/child-menu.component";
import {random} from "lodash-es";

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatExpansionPanelDescription,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionModule,
    ExpansionPanelComponent,
    ChildMenuComponent,
  ],
  templateUrl: './slide-bar.component.html',
  styleUrl: './slide-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideBarComponent {
  readonly panelOpenState = signal(false);
  menuItems:string[] = ["Home", "Product", "Category"];
  subMenuItems:string[] = ["Sub Menu 1", "Sub Menu 2", "Sub Menu 3"];

  menuItems1:slideMenuItemChild={
    title: 'Services',
    href: 'http://localhost:4200/layout',
    icon: 'home',
    count: random(1, 20),
    children: [
      {
        title: 'service 1',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      },
      {
        title: 'service 2',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      },
      {
        title: 'service 3',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      }
    ]
  }
  subMenuItems1:slideMenuItemChild = {
    title: 'Sub Menu 1',
    href: 'http://localhost:4200/layout',
    icon: 'home',
    count: random(1, 20),
    children: [
      {
        title: 'Sub Menu 1',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      },
      {
        title: 'Sub Menu 2',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      },
      {
        title: 'Sub Menu 3',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      }]
  }

  expansionPanelItem:ExpansionPanelItem = {
    title: 'Menu Title',
    href: 'http://localhost:4200/layout',
    icon: 'home',
    count: random(1, 20),
    children: [
      {
        title: 'Item 1',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      },
      {
        title: 'Item 2',
        href: 'http://localhost:4200/layout',
        icon: 'home',
        count: random(1, 20),
        children: []
      }
    ]
  };
}
