import {Component, DestroyRef, HostListener, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, take, map } from 'rxjs';
import { CdkScrollable } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-about-me',
  imports: [CdkScrollable],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

  showCursor = signal("|");
  textToPrint = `a self-portrait, an artist refines their skills while capturing their most detailed imperfections.
  my reflection in the black screen, i hone my craft - not simply as a way to earn a living - but as a way to chisel my self-expression out of the noise of the modern age.
  past my own expectations and without organizational and cultural cobwebs, i journey here simply for myself.
  
  ...anyways...
  my name is osvald. i'm currently a software developer based out of ontario, canada. 
  my background is in computer programming, and developing an automated testing framework as a SDET.
  currently, my role is mainly developing on large scale application based primarily in angular.

  beyond the workplace, i'm slowly amassing a collection of incomplete projects (this being one of them) to tinker away at whenever i'm not spending time with my lovely spouse, our cat, or playing electric guitar.
  
  tdlr; passionate programmer, honing my craft with mastery as the asymptote.`
  printedText = signal(this.textToPrint);


  private readonly destroyRef = inject(DestroyRef);
  constructor(){
    interval(1).pipe(
      take(this.textToPrint.length),
      map(i => {
        return this.textToPrint.slice(0,i);
      }
      ),
      takeUntilDestroyed()
    ).subscribe(text => this.printedText.set(text));

     interval(500)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
          this.showCursor.set((!!(value&1))?"":"|");
      });
  }

  @HostListener('document:keydown', ['$event'])
  handleGlobalKeyPress(event: KeyboardEvent) {
    console.log('Global key detected:', event.key);
    if(event.key === "Backspace"){
      this.printedText.set(this.printedText().slice(0,-1));
    }
  }
   
}