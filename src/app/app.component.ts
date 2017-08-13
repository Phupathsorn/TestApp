import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hhhhhh';
  todoLists = [{task: '1.one', checked: false}, {task: '2. two', checked: true}, {task: '3. three', checked: true}];
  newTask = '';

  addTodoLists(newtask) {
    this.todoLists.push({task: newtask, checked: false});
    this.newTask = null;
  }

  checkList(task) {
    
  }
}
