import { NgModule }      from '@angular/core';
import { FormbuilderModule } from './components/formbuilder/specio.formbuilder.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ FormbuilderModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
