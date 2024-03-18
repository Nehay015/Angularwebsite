import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {'path': 'navbar', component:NavbarComponent},
    {'path': '', component:HomeComponent},
    {'path': 'about', component:AboutComponent},
    {'path': 'contact', component:ContactComponent},
    {'path': 'features', component:FeaturesComponent},
    {'path': 'gallery', component:GalleryComponent},
    {'path': 'team', component:TeamComponent},
    {'path': 'footer', component:FooterComponent},
    {'path': 'register', component:RegisterComponent},
    {'path': 'login', component:LoginComponent}

];
