import { Component } from '@angular/core';

@Component({
  selector: 'app-expanded-overlay',
  imports:[],
  templateUrl: './expanded-overlay.html',
  styleUrl: './expanded-overlay.scss',
})
export class ExpandedOverlay {
  title = '';
  id!: number;

}
