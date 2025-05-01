import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkeletonLoaderComponent } from '../../../../components/skeleton-loader/skeleton-loader.component';

@Component({
  selector: 'app-landing-section',
  imports: [NgOptimizedImage, RouterLink, SkeletonLoaderComponent],
  templateUrl: './landing-section.component.html',
  styleUrl: './landing-section.component.scss',
})
export class LandingSectionComponent {
  mainImgLoading = true;
  onMainImageLoad() {
    this.mainImgLoading = false;
  }
}
