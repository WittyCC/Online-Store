import { ModuleWithProviders }  from '@angular/core'; // Provides this router to the rest of the app
import { Routes, RouterModule } from '@angular/router'; // Render specific components when specific urls are provided to the router
import { WelcomeComponent } from './welcome/welcome.component';

// Master list of all available routes, contains values that other code in the app cannot change
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
