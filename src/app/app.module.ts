import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
// NGRX Imports
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { employeeReducer } from './state-management/employee.reducer';
import { messageReducer } from './state-management/message.reducer';
import { productReducer } from './state-management/product.reducer';
// Module Imports
import { ContactModule } from './contact/contact.module';
import { WhoAreWeModule } from './who-are-we/who-are-we.module';
import { ProductsModule } from './products/products.module';
// Comp Imports
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
// Services Imports
import { EmployeeService } from './shared/services/employee.service';
import { ProductService } from './shared/services/product.service';
import { MessageService } from './shared/services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeaderBarComponent,
    NavBarComponent,
    FooterComponent,
    ProductDetailComponent,
    ProductListComponent,
    PageNotFoundComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    WhoAreWeModule,
    ContactModule,
    AppRoutingModule,
    StoreModule.provideStore({employeeReducer, messageReducer, productReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 5})
  ],
  providers: [
    EmployeeService,
    ProductService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
