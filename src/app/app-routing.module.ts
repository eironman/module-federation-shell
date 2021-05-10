import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {loadRemoteModule} from '@angular-architects/module-federation';
import {environment} from '@environments/environment';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-a',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: environment.appAUrl + '/remoteEntry.js',
        remoteName: 'app_a',
        exposedModule: './Module'
      })
        .then(m => m.FederatedModule)
  },
  {
    path: 'app-b',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: environment.appBUrl + '/remoteEntry.js',
        remoteName: 'app_b',
        exposedModule: './Module'
      })
        .then(m => m.FederatedModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
