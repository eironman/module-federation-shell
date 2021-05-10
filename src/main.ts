import {loadRemoteEntry} from '@angular-architects/module-federation';
import {environment} from '@environments/environment';

// This is necessary because the dynamic import gives Module Federation the needed time
// to negotiate the versions of the shared libraries to use with all the remotes.
Promise.all([
  loadRemoteEntry(environment.appAUrl + '/remoteEntry.js', 'app-a'),
  loadRemoteEntry(environment.appBUrl + '/remoteEntry.js', 'app-b')
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
