import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

/* PrimeNG component */
import { ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { ChipsModule } from 'primeng/chips';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { SpinnerModule } from 'primeng/spinner';

/* CurrencyMaskModule */
//npm install ng2-currency-mask --save
import { CurrencyMaskModule } from "ng2-currency-mask";

/* APP Components */
import { ListarComponent } from './component/listar/listar.component';
import { AdicionarComponent } from './component/adicionar/adicionar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    InputSwitchModule,
    SpinnerModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    CurrencyMaskModule,
    ListboxModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
