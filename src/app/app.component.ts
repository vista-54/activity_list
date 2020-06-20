import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'activity-app';
  data: any;
  templates: any;

  constructor() {
    this.data = [
      {
        'category': 'DEAL_ROOM',
        'event': 'ADDED',
        'username': 'vista',
        'room_title': 'my Room',
        'date': '01-02-2020'
      },
      {
        'category': 'DEAL_ROOM',
        'event': 'RENAMED',
        'username': 'vista',
        'room_title': 'my Room new',
        'date': '01-02-2020'
      },
      {
        'category': 'DEAL_ROOM',
        'event': 'ARCHIVED',
        'username': 'vista',
        'room_title': 'my Room new',
        'date': '01-02-2020'
      },
      {
        'category': 'DEAL_ROOM_MEMBERS',
        'event': 'ADDED',
        'username': 'vista',
        'username2': 'Valik',
        'room_title': 'my Room new',
        'date': '01-02-2020'
      }

    ];
    this.templates = {
      DEAL_ROOM: {
        ADDED: (data) => {
          return `${data.username} added ${data.room_title} deal room on ${data.date}`;
        },
        RENAMED: (data) => {
          return `${data.username} renamed this deal room to ${data.room_title}  on ${data.date}`;
        },
        ARCHIVED: (data) => {
          return `${data.username} archived ${data.room_title} deal room on ${data.date}`;
        }
      },
      DEAL_ROOM_MEMBERS: {
        ADDED: (data) => {
          return `${data.username} added ${data.username2} to this deal room on ${data.date}`;
        }
      }
    }
    ;
  }
}
