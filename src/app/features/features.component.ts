import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesComponent {

}
