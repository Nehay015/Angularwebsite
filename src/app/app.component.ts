import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image'; 
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatDialogModule,CommonModule,RegisterComponent,LoginComponent,AccordionModule,DividerModule,GalleriaModule, ImageModule, FooterComponent, NavbarComponent, HomeComponent, AboutComponent, ContactComponent, FeaturesComponent, GalleryComponent, TeamComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'NoidaApp';
  
}
