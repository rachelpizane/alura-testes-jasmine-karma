import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';
@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likedCount: number = 0;
  @Input() public id!: string;
  fonts: any = { faThumbsUp }

  constructor(private uniqueIdService: UniqueIdService) { }

  ngOnInit(): void {
    if(!this.id) {
      this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like-widget-');
    }
  }

  like(): void {
    this.liked.emit();
  }

}
