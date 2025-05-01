import { Component } from '@angular/core';
import { CategoryCardComponent } from '../../../../components/category-card/category-card.component';
import { RouterLink } from '@angular/router';
import { LinkButtonUnderlineComponent } from '../../../../components/link-button-underline/link-button-underline.component';

@Component({
  selector: 'app-categories-section',
  imports: [CategoryCardComponent, LinkButtonUnderlineComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss',
})
export class CategoriesSectionComponent {
  categories = [
    {
      name: 'Tables',
      img: 'assets/images/category-tables.jpg',
      link: 'product-list',
    },
    {
      name: 'Chairs',
      img: 'assets/images/category-chairs.jpg',
      link: 'product-list',
    },
    {
      name: 'Cabinets',
      img: 'assets/images/category-cabinets.jpg',
      link: 'product-list',
    },
  ];
}
