import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { BottomfooterComponent } from './bottomfooter/bottomfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    TopheaderComponent,
    BottomfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
   {path:"",component:LoginComponent},
      {path:"login",component:LoginComponent}
      ,
    ])
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
