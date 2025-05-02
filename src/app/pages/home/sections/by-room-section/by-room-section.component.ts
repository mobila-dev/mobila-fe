import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-by-room-section',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './by-room-section.component.html',
  styleUrl: './by-room-section.component.scss',
})
export class ByRoomSectionComponent {
  activeImage: 'living-room' | 'bedroom' | 'kitchen' | 'hallway' =
    'living-room';

  setActiveImage(image: 'living-room' | 'bedroom' | 'kitchen' | 'hallway') {
    this.activeImage = image;
  }
}
