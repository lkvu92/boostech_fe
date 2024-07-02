import {Component, Input, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ExpansionPanelItem} from "../expansion-panel/expansion-panel.component";

@Component({
  selector: 'app-child-menu',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './child-menu.component.html',
  styleUrl: './child-menu.component.scss'
})
export class ChildMenuComponent implements OnInit{
  @Input() item!: slideMenuItemChild;
  menuItems:slideMenuItemChild;
  ngOnInit() {
    this.menuItems = this.item;
  }
}
export interface slideMenuItemChild {
  title: string;
  href: string;
  icon: string;
  count: number;
  children: slideMenuItemChild[];
}
