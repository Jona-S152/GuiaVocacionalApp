import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { authGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'welcome', component: LandingPageComponent },
      { path: 'chatbot', component: ChatbotComponent, canActivate: [ authGuard ] },
      { path: 'results', component: ResultsPageComponent, canActivate: [ authGuard ] },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuiaVocacionalRoutingModule { }
