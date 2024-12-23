import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { title } from 'process';
import { TaskEditComponent } from './components/task-edit/task-edit.component';

export const routes: Routes = [
    {
        //contains the whole todo list
        path: 'tasks',
        component: TodoComponent
    },
    {
        //display the form to add new task
        path: 'tasks/add',
        component: TaskAddComponent,
        data: {titile: 'Add new task'}
    },
    {
        //display the form to view a task
        path: 'tasks/:id',
        component: TaskViewComponent,
        data: {title: 'Task to do'}
    },
    {
        //display the form to edit a task
        path: 'tasks/:id/edit',
        component: TaskEditComponent,
        data: {title: 'Task edition'},
    },
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    }
];
