export interface RepositoryResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
  }
  
  export interface Repository {
    id: number;    
    name: string;    
    full_name: string;
    description: string;
    starRating?: number;
    stargazers_count: number;
    open_issues: number;
    open_issues_count: number;
    owner: Owner;
  }


  export interface Owner {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
  }