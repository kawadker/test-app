import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorService } from './services/httpinterceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,MatIconModule,MatSidenavModule,MatInputModule,ReactiveFormsModule,
    AppRoutingModule,MatSliderModule,FlexLayoutModule,FormsModule,HttpClientModule,
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpinterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
