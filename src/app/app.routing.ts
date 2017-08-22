import { ModuleWithProviders } from '@angular/core'; // Provides this router to the rest of the app
import { Routes, RouterModule } from '@angular/router'; // Render specific components when specific urls are provided to the router
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

// Master list of all available routes, contains values that other code in the app cannot change
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
