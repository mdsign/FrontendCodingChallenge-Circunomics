import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GitRepositoryService } from './gitrepo.service';

describe('GitRepositoryService', () => {
  let service: GitRepositoryService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(GitRepositoryService);
    http = TestBed.inject(HttpTestingController);
  });

  it('sould be created', () => {
    expect(service).toBeTruthy();
  });

  describe('::getRepositories', () => {
    it('should call git API to get repos', () => {
      const mockResponse = {
        total_count: 100,
        incomplete_results: false,
        items: [],
      };

      service.getRepositories(1).subscribe(response => expect(response).toEqual(mockResponse));

      const request = http.expectOne(
        'https://api.github.com/search/repositories?q=created:>2021-11-11&sort=stars&order=desc&page=1'
      );
      expect(request.request.method).toBe('GET');
      request.flush(mockResponse);
    });
  });
});
