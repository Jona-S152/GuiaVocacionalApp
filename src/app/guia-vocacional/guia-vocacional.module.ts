import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuiaVocacionalRoutingModule } from './guia-vocacional-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ChatbotPageComponent } from './pages/chatbot-page/chatbot-page.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { NbChatModule } from '@nebular/theme';


@NgModule({
  declarations: [
    LandingPageComponent,
    ChatbotPageComponent,
    ResultsPageComponent,
    ChatbotComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    GuiaVocacionalRoutingModule,
    MaterialModule,
  ]
})
export class GuiaVocacionalModule { }
