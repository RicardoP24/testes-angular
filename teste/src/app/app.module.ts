import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UppyAngularDashboardModule, UppyAngularDragDropModule} from '@uppy/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule,PageService,SortService,FilterService,GroupService, PagerModule } from '@syncfusion/ej2-angular-grids';
import { GridComponent2 } from './grid/grid.component';
import { NovoComponent } from './novo/novo.component'; // Import the Grid module
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent2,
    NovoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    PagerModule,
    HttpClientModule,
    UppyAngularDashboardModule,
    UppyAngularDragDropModule
  ],
  providers: [PageService,SortService,FilterService,GroupService],
  bootstrap: [AppComponent]
})

export class AppModule { }
