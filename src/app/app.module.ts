import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes,RouterModule } from '@angular/router';
import { DogCompComponent } from './dog-comp/dog-comp.component';
import { CatsCompComponent } from './cats-comp/cats-comp.component';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { FoxComponent } from './fox/fox.component';


const animal:Routes = [
  {path:'',component:MenuComponent},
  {path:'dog',component:DogCompComponent},
  {path:'cats',component:CatsCompComponent},
  {path:'fox',component:FoxComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    DogCompComponent,
    CatsCompComponent,

    MenuComponent,
    FoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(animal),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
