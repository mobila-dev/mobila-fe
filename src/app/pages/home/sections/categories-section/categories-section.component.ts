import { Component } from '@angular/core';
import { CategoryCardComponent } from '../../../../components/category-card/category-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories-section',
  imports: [CategoryCardComponent, RouterLink],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss',
})
export class CategoriesSectionComponent {}
