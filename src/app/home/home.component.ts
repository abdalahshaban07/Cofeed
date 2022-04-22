import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('feeds')) {
      this.feeds = JSON.parse(localStorage.getItem('feeds') || '[]');
    }
  }

  avatars = [
    {
      name: 'Supardi',
      url: 'https://i.pravatar.cc/200?img=1',
      border: '2px solid #b9cde5',
    },
    {
      name: 'Dean',
      url: 'https://i.pravatar.cc/200?img=2',
      border: '2px solid #b9cde5',
    },
    {
      name: 'Theodore',
      url: 'https://i.pravatar.cc/200?img=3',
      border: '2px solid blueviolet',
    },
    {
      name: 'Walter',
      url: 'https://i.pravatar.cc/200?img=4',
      border: '2px solid blueviolet',
    },
    {
      name: 'Jesse',
      url: 'https://i.pravatar.cc/200?img=5',
      border: '2px solid blueviolet',
    },
  ];

  types = [
    {
      name: 'All',
      active: false,
    },
    {
      name: 'Following',
      active: false,
    },
    {
      name: 'Newest',
      active: false,
    },
    {
      name: 'Popular',
      active: true,
    },
  ];

  feeds = [
    {
      id: 1,
      img: 'https://picsum.photos/200?random=3',
      avatar: 'https://i.pravatar.cc/200?img=7',
      name: 'Dean Winchester',
      likes: 0,
      comments: '23',
    },
    {
      id: 2,
      img: 'https://picsum.photos/200?random=14',
      avatar: 'https://i.pravatar.cc/200?img=8',
      name: 'Jesse Pinkman',
      likes: 0,
      comments: '24',
    },
    {
      id: 3,
      img: 'https://picsum.photos/200?random=11',
      avatar: 'https://i.pravatar.cc/200?img=9',
      name: 'Theodore Bagwell',
      likes: 0,
      comments: '18',
    },
    {
      id: 4,
      img: 'https://picsum.photos/200?random=13',
      avatar: 'https://i.pravatar.cc/200?img=10',
      name: 'Walter White',
      likes: 0,
      comments: '16',
    },
  ];

  onLike(feed: any) {
    // if (feed.likes === 0) {
    //   feed.likes = 1;
    // } else {
    //   feed.likes = 0;
    // }
    feed.likes += 1;
  }

  saveFeeds() {
    localStorage.setItem('feeds', JSON.stringify(this.feeds));
  }

  // on refresh save feeds to local storage
  @HostListener('window:beforeunload', ['$event'])
  onRefresh() {
    this.saveFeeds();
  }

  ngOnDestroy(): void {
    this.saveFeeds();
  }
}
