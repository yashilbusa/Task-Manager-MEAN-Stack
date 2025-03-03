import { Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

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
    },
    {
        path: 'lists/:listId/newtask', component:NewTaskComponent
    },
    {
        path: 'editlist/:listId', component:EditListComponent
    },
    {   
        path: 'edit-task/:listId/:taskId', component: EditTaskComponent 
    }

];
