import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { AppComponent } from './app.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DialogModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
