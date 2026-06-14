import { Component, signal, inject, computed, HostListener, effect, InputSignal, OnInit, WritableSignal} from '@angular/core';
import { ExpandableTile } from '../expandable-tile/expandable-tile';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { TileManager } from '../tile-manager';
import { Tile } from '../tile';

@Component({
  selector: 'app-tile-window',
  imports: [ExpandableTile, CdkDropList],
  templateUrl: './tile-window.html',
  styleUrl: './tile-window.scss',
})


export class TileWindow {

  
  protected readonly title = signal('osvald-profile');
  tileManager = inject(TileManager);

  items = signal(
      Array.from({ length: this.tileManager.tileTotal() }, (_, i) => (
        new Tile(i,this.tileManager.startingTitles[i] ?? ''))
      )
    );



  constructor(){

    effect(() => {
      const tileTotal = this.tileManager.tileTotal()
      console.log("total tiles: ", tileTotal);
      if (this.items().length !== tileTotal){
        console.log("size change");
        this.items.update(items => {
          const copy = [...items];
          if(items.length < tileTotal){
            while (copy.length < tileTotal) {
              const i = copy.length;
              copy.push(
                new Tile(i,this.tileManager.startingTitles[i] ?? '')
              );
            }
          }else{
            return copy.slice(0, tileTotal);
          }
          return copy;
        });
      }
    });
  }



  // Listen to the global window resize event
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.tileManager.windowWidth.set((event.target as Window).innerWidth);
    this.tileManager.windowHeight.set((event.target as Window).innerHeight);
  }

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
