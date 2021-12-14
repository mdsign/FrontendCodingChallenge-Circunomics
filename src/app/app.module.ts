import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule, NbLayoutModule, NbDialogModule, NbSpinnerModule, NbListModule, NbCardModule, NbIconModule, NbTooltipModule } from '@nebular/theme'
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppComponent } from './app.component';
import { GitReposComponent } from './gitrepos/git-repos.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,

    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
