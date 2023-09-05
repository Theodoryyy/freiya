import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
})

export class MainHeaderComponent {
  constructor(private scrollService: ScrollService) { }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
}