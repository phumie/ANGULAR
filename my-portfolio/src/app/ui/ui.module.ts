import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [ContentComponent, HeaderComponent, FooterComponent, HomeComponent, PortfolioComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule,
  ],
  exports: [ContentComponent, HomeComponent, PortfolioComponent, ContactComponent, AboutComponent]
})
export class UiModule { }
