import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isVisible = true;
  currentScroll = 0;
  private lastScroll = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (this.currentScroll > this.lastScroll) {
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

    this.lastScroll = this.currentScroll <= 0 ? 0 : this.currentScroll;
  }
}
