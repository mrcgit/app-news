import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoaderService } from '../../../loader.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {

  constructor(public loader: LoaderService) { }
}
