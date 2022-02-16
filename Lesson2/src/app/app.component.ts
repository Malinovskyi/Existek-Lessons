import { Component } from '@angular/core';

interface treeObject {
  title: string;
  properties: Array<propertiesSchema>;
}

interface propertiesSchema {
  name: string;
  label: string;
  inputType: string;
  level: number;
  id: number | string;
  visible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Change';

  tree: treeObject = {
    title: 'Title',
    properties: [
      {
        name: 'fullName',
        label: 'Full name',
        inputType: 'text',
        level: 1,
        id: 1111,
        visible: false,
      },
      {
        name: 'email',
        label: 'Email',
        inputType: 'email',
        level: 2,
        id: 2222,
        visible: false,
      },
      {
        name: 'currentPosition',
        label: 'Current job position',
        inputType: 'text',
        level: 3,
        id: 3333,
        visible: false,
      },
      {
        name: 'plans',
        label: 'Plans for the next year',
        inputType: 'text',
        level: 4,
        id: 4444,
        visible: false,
      },
      {
        name: 'haveComputer',
        label: 'Have a computer and internet',
        inputType: 'text',
        level: 5,
        id: 5555,
        visible: false,
      },
    ],
  };

  constructor() {}

  delete(id: number | string): void {
    const userId: any = this.tree.properties.find(
      (user: propertiesSchema) => user.id === id
    );
    this.tree.properties = this.tree.properties.filter(
      (smth: propertiesSchema) => smth.id !== userId.id
    );
  }

  addInput(item: propertiesSchema): void {
    this.tree.properties.push({ ...item, id: this.getId(), label: 'Title' });
    console.log(item.id);
  }

  getId(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
