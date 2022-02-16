import { Component } from '@angular/core';

interface treeInterface {
  id: number | string;
  value: string;
  children?: Array<treeInterface>;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ExistekForm';

  treeArray: Array<treeInterface> = [
    {
      id: 1,
      value: 'Lorem',
      children: [
        {
          id: 1.1,
          value: 'consectetur',
          children: [
            {
              id: '1.1.1',
              value: 'adipiscing ',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      value: 'Ipsum',
    },
    {
      id: 3,
      value: 'Dolor',
      children: [
        {
          id: 3.1,
          value: 'eiusmod',
        },
        {
          id: 3.2,
          value: 'labore',
          children: [
            {
              id: '3.2.1',
              value: 'aliqua',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      value: 'Sit',
    },
  ];

  add(collection: Array<any>, item: Array<any>, index: number): void {
    collection.push({ ...item[index], id: this.getId(), value: 'Title' });
  }

  delete(collection: Array<any>, item: Array<any>): void {
    let found = collection.indexOf(item);
    collection.splice(found, 1);
    this.treeArray;
  }

  getId(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
