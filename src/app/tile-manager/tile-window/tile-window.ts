import { Component, signal, inject, computed, HostListener, effect, InputSignal, ElementRef, WritableSignal, AfterViewInit} from '@angular/core';
import { ExpandableTile } from '../expandable-tile/expandable-tile';
import { CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { TileManager } from '../tile-manager';
import { Tile } from '../tile';
import { ExpandedOverlay } from '../expanded-overlay/expanded-overlay';
@Component({
  selector: 'app-tile-window',
  host:{
    '(window:resize)': 'onWindowResize($event)'
  },
  imports: [ExpandableTile, CdkDropList, ExpandedOverlay],
  templateUrl: './tile-window.html',
  styleUrl: './tile-window.scss',
})


export class TileWindow implements AfterViewInit {
 
  private elementRef = inject(ElementRef<HTMLElement>);
  protected readonly title = signal('osvald-profile');
  tileManager = inject(TileManager);



  onWindowResize(event: UIEvent) {
    requestAnimationFrame(() => {
      this.updateTileManagerSize()
    });
  }

  ngAfterViewInit(): void {
    this.updateTileManagerSize()
  }

  updateTileManagerSize= ():void => {
    this.tileManager.width.set(this.elementRef.nativeElement.offsetWidth)
    this.tileManager.height.set(this.elementRef.nativeElement.offsetHeight)
    this.tileManager.printOut()
  };

  constructor(){
    this.updateTileManagerSize()
    effect(() => {
      const tileTotal = this.tileManager.tileTotal()
      if (this.tileManager.items().length !== tileTotal){
        this.tileManager.items.update(items => {
          const copy = [...items];
          if(items.length < tileTotal){
            while (copy.length < tileTotal) {
              const i = copy.length;
                if(this.tileManager.startingTiles[i]){
                  copy.push(new Tile(i,this.tileManager.startingTiles[i].name,this.tileManager.startingTiles[i].icon));
                }else{
                  copy.push(new Tile(i));
                }
            }
          }else{
            while (copy.length > tileTotal) {
                const availableIndex = copy.findLastIndex(item => item.title==='');
                if(availableIndex === -1) { return copy;}
                copy.splice(availableIndex, 1);
                return copy;
            }
          }
          return copy;
        });
      }
    });
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

    this.tileManager.items.update(items => {
      const previousIndex = items.findIndex(item => item.id === draggedId);
      const targetIndex = items.findIndex(item => item.id === targetId);

      if (previousIndex === -1 || targetIndex === -1) {return items;}

      const copy = [...items];
      [copy[previousIndex], copy[targetIndex]] = [copy[targetIndex], copy[previousIndex]];
      return copy;
    });
  }
}
