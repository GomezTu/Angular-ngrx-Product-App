import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { employeeReducer } from './state-management/employee.reducer';
import { messageReducer } from './state-management/message.reducer';
import { productReducer } from './state-management/product.reducer';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { EmployeeListComponent } from './shared/components/employee-list/employee-list.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HeaderBarComponent,
    NavBarComponent,
    FooterComponent,
    EmployeeListComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({employeeReducer, messageReducer, productReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 5})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
