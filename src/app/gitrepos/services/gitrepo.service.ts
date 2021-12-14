import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints } from 'src/app/core';
import { environment } from 'src/environments/environment';
import { RepositoryResponse } from '../interfaces/gitrepo-interfaces';

@Injectable({
  providedIn: 'root',
})
export class GitRepositoryService {
  constructor(private _http: HttpClient) {}

  getRepositories(page: number): Observable<RepositoryResponse> {
    return this._http.get<RepositoryResponse>(
      [
        environment.baseURL,
        EndPoints.SEARCH_REPOSITORIES,
        `?q=created:>2021-11-11&sort=stars&order=desc&page=${page}`,
      ].join('')
    );
  }
}
