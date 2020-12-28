import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  search = '';
  searchField = 'title';

  posts : Post[] = [
    {title: 'Beer', text: 'Самое лутшее пиво в мире'},
    {title: 'breed', text: 'the best bread in the world'},
    {title: 'JavaScript', text: 'the best language in the world'},
  ]
}
