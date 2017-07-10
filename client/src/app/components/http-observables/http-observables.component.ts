import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment/comment';
import { EmitterService } from '../../emitter.service';
import { CommentService } from '../../services/comment.service';


@Component({
    selector: 'http-observables',
    templateUrl: './http-observables.component.html',
    styleUrls: ['./http-observables.component.css']
})
export class HttpObservablesComponent {

    constructor(
        private commentService: CommentService
    ) { }

    @Input() comment: Comment;
    @Input() listId: string;
    @Input() editId: string;

    editComment() {
        EmitterService.get(this.editId).emit(this.comment);
    }

    deleteComment(id:string) {
        this.commentService.removeComment(id)
            .subscribe(
                comments => {
                    EmitterService.get(this.listId).emit(comments);
                },
                error => {
                    console.log(error);
                }
            )
    }

}
