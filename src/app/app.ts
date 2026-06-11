import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpandableTile } from './expandable-tile/expandable-tile';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpandableTile, CdkDrag, CdkDropList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private readonly startingTitles = [
    "Home",
    "Projects",
    "About",
    "Contact"
  ];

  protected readonly title = signal('osvald-profile');
  items = signal(
      Array.from({ length: 200 }, (_, i) => ({
      id: i,
      title: this.startingTitles[i] ?? ''
    }))
  );




  onDropped(event: CdkDragDrop<{id:number; title:string}[]>) {
    const draggedElement = event.item.element.nativeElement;
    const draggedId = Number(
      draggedElement.getAttribute('data-grid-item-id')
    );

    if (Number.isNaN(draggedId)) return;

    const targetElement = document
      .elementFromPoint(event.dropPoint.x, event.dropPoint.y)
      ?.closest('[data-grid-item-id]');

    if (!targetElement) return;

   const targetId = Number(targetElement.getAttribute('data-grid-item-id'));

    if (Number.isNaN(targetId)) return;
    if (draggedId === targetId) return;

    this.items.update(items => {
      const previousIndex = items.findIndex(item => item.id === draggedId);
      const targetIndex = items.findIndex(item => item.id === targetId);

      if (previousIndex === -1 || targetIndex === -1) {return items;}

      const copy = [...items];
      [copy[previousIndex], copy[targetIndex]] = [copy[targetIndex], copy[previousIndex]];
      return copy;
    });
  }
}
