import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  suggestions = [
    {
      name: 'Sarah Tancredi',
      email: '@dr.sarah',
      avatar: 'https://i.pravatar.cc/200?img=11',
      followed: false,
    },
    {
      name: 'Arthur Shelby',
      email: '@art.shelby',
      avatar: 'https://i.pravatar.cc/200?img=12',
      followed: true,
    },
    {
      name: 'Vin Diesel',
      email: '@vindiesel',
      avatar: 'https://i.pravatar.cc/200?img=13',
      followed: false,
    },
  ];
}
