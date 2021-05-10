import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '@environments/environment';

export class TranslateCustomLoaderClass implements TranslateLoader {
  constructor(private httpClient: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return forkJoin([
      this.translationRequest('', lang),
      this.translationRequest(environment.appAUrl, lang),
      this.translationRequest(environment.appBUrl, lang)])
      .pipe(map((appsTranslations: Array<object>) => {
        const allTranslations = {};
        appsTranslations.forEach((obj) => {
          Object.assign(allTranslations, obj);
        });
        return allTranslations;
      }));
  }

  translationRequest(appUrl: string, lang: string): Observable<object> {
    return this.httpClient.get(appUrl + '/assets/i18n/' + lang + '.json')
      .pipe(catchError(err => of(undefined)));
  }
}
