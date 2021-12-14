import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GitReposComponent } from "./git-repos.component";
import { RepositoryListComponent } from "./pages/repository-list/repository-list.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: GitReposComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class GitReposRoutingModule {}