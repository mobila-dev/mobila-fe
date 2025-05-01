import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkeletonLoaderComponent } from '../skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-category-card',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  // imgInput = input.required<string>();
  // displayedName = input.required<string>();
  // link = input.required<string>();

  imageLoading = true;
  onImageLoad() {
    this.imageLoading = false;
  }
}
