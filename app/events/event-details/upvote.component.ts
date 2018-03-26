import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'upvote',
    templateUrl: 'upvote.component.html',
    styleUrls: ['aupvote.component.css'],
})
export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick() {
        this.vote.emit({});
    }

}
