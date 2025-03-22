import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

// import { routes } from './app.routes';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
const routes: Routes = [
  {
      path: 'home',
      title: 'Home Page',
      component: HomeComponent,
    },
    {
      path: 'task',
      title: 'Tasks',
      component: TaskComponent,
    }];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
