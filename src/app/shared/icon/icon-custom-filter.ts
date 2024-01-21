import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-custom-filter',
    template: `
        <ng-template #template>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 7L2 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" fill="currentColor"/>
                <path opacity="0.5" d="M19 12L5 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 17H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" fill="currentColor"/>
            </svg>

        </ng-template>
    `,
})
export class IconCustomFilterComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
