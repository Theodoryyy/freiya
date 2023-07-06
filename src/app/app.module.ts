import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './comps/main-header/main-header.component';
import { CarouselComponent } from './comps/carousel/carousel.component';
import { ContentComponent } from './comps/content/content.component';
import { FooterComponent } from './comps/footer/footer.component';
import { StreamingsComponent } from './comps/streamings/streamings.component';
import { SobreComponent } from './comps/sobre/sobre.component';
import { IntegrantesComponent } from './comps/integrantes/integrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    CarouselComponent,
    ContentComponent,
    FooterComponent,
    StreamingsComponent,
    SobreComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
