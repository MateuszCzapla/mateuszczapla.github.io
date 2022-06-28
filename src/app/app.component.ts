import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  private list = new TodoList("Tomek", [
    new TodoItem("Pograć w grę planszową :)", true),
    new TodoItem("Pograć w grę komputerową :)"),
    new TodoItem("Pograć :("),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    //return this.list.items.filter(item => !item.complete).length;
    return this.items.length;
  }

  get items(): readonly TodoItem[]{
    //return this.list.items;
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem:string){
    if (newItem!=""){
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}
