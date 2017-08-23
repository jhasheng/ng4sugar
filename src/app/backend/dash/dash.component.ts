import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  menus: [MenuItem] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: '/backend/dash'
    },
    {
      title: 'Posts',
      icon: 'create',
      link: '/backend/posts'
    },
    {
      title: 'Users',
      icon: 'groups',
      link: '/backend/users'
    },
    {
      title: 'Category',
      icon: 'lists',
      link: '/backend/dash'
    },
    {
      title: 'Tags',
      icon: 'loyalty',
      link: '/backend/dash'
    },
    {
      title: 'Settings',
      icon: 'settings',
      link: '/backend/dash'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface MenuItem {
  title: string;
  icon: string;
  link: string;
}