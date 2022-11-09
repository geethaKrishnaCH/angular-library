import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { BioComponent} from './bio/bio.component';



@NgModule({
  declarations: [
  
    IntroComponent,
       BioComponent
  ],
  imports: [
  ],
  exports: [
    IntroComponent,
    BioComponent
  ]
})
export class CommonsModule { }
