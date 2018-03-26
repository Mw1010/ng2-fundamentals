import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4>
            <ng-content select="[well-title]"></ng-content>
        </h4>
        <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
    `,

})
export class CollapsibleWellComponent {
    visible: boolean = true;

    toggleContent() {
        if (this.visible === true) {
            this.visible = false;
        } else {
            this.visible = true;
        }
        // this.visible != this.visible;
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
