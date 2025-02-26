import { Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

export const routes: Routes = [
    {
        path: '', redirectTo:'lists', pathMatch:'full'
    },
    {
        path: 'newlist', component:NewListComponent
    },
    {
        path: 'lists', component:TaskViewComponent
    },
    {
        path: 'lists/:listId', component:TaskViewComponent
    },
    {
        path: 'newtask', component:NewTaskComponent
    }
];
