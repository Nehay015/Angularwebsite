import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DividerModule, AccordionModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
