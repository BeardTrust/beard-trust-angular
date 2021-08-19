
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
<<<<<<< HEAD
import { AccountComponent } from './admin/accounts/accounts.component';
import { NgxPaginationModule } from 'ngx-pagination';
=======
import { CardComponent } from './admin/card/card.component';
>>>>>>> Feature-BeardtrustLLC-132/133/135

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UserComponent,
<<<<<<< HEAD
    AuthComponent, 
    AccountComponent,
=======
    AuthComponent,
    CardComponent
>>>>>>> Feature-BeardtrustLLC-132/133/135
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
