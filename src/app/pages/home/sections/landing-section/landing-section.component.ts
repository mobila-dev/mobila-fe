import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-section',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './landing-section.component.html',
  styleUrl: './landing-section.component.scss',
})
export class LandingSectionComponent {
  mainImgLoading = true;
  onMainImageLoad() {
    this.mainImgLoading = false;
  }
}
