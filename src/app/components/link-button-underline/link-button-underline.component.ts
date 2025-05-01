import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-button-underline',
  imports: [RouterLink],
  templateUrl: './link-button-underline.component.html',
  styleUrl: './link-button-underline.component.scss',
})
export class LinkButtonUnderlineComponent {
  link = input.required<string>();
  text = input.required<string>();
}
