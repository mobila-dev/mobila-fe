import { Component } from '@angular/core';
import { LandingSectionComponent } from './sections/landing-section/landing-section.component';
import { CategoriesSectionComponent } from './sections/categories-section/categories-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { ProductsSectionComponent } from './sections/products-section/products-section.component';
import { ByRoomSectionComponent } from './sections/by-room-section/by-room-section.component';
import { CollectionSectionComponent } from './sections/collection-section/collection-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';

@Component({
  selector: 'app-home',
  imports: [
    LandingSectionComponent,
    CategoriesSectionComponent,
    TestimonialsSectionComponent,
    ProductsSectionComponent,
    ByRoomSectionComponent,
    CollectionSectionComponent,
    AboutSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
