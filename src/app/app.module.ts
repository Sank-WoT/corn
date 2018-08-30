import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './dog.service';
import { ServerService } from './services/dataServicePost';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataServicePreparation } from "./services/dataServicePreparation"
import { HttpErrorHandler } from "./services/http-error.service"
import { MessageService }    from './services/message.service';

import { AppComponent } from './app.component';
import { RespondentComponent } from './respondent.component';
import { EffectComponent } from './effect.component';
import { PreparationComponent } from './preparation.component';
import { InterventionComponent } from './intervention.component';
import { ResultComponent } from './result.component';
import { NoticeComponent } from "./notice.component";

@NgModule({
  declarations: [
    AppComponent,
    RespondentComponent,
    EffectComponent,
    PreparationComponent,
    InterventionComponent,
    ResultComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, HttpErrorHandler, MessageService, DataServicePreparation, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
