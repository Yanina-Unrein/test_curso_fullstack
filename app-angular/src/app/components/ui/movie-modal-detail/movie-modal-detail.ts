import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-modal-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-modal-detail.html',
  styleUrl: './movie-modal-detail.css'
})
export class MovieModalDetail {
  @Input() movie: Movie | null = null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
