import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsChartModule } from 'highcharts-angular';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';

// Components
import { AppComponent } from './app.component';
import { TextBoxComponent } from '../components/text-box/text-box.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { UserInputMessageComponent } from '../components/user-input-message/user-input-message.component';
import { BotResponseMessageComponent } from '../components/bot-response-message/bot-response-message.component';
import { HighChartsComponent } from '../components/high-charts/high-charts.component';

const primeNgModules = [
  DividerModule,
  InputTextModule,
  ImageModule,
  DropdownModule,
];

const components = [
  TextBoxComponent,
  MessagesComponent,
  UserInputMessageComponent,
  BotResponseMessageComponent,
  HighChartsComponent,
];

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HighchartsChartModule,
    ...primeNgModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
