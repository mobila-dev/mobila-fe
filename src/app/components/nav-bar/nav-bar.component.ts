import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  OutletContext,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isVisible = true;
  private lastScroll = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.lastScroll) {
      // Scrolling down
      if (this.isVisible) {
        this.isVisible = false;
      }
    } else {
      // Scrolling up
      if (!this.isVisible) {
        this.isVisible = true;
      }
    }

    this.lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  }
}
