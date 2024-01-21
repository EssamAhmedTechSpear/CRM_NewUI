import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideDownUp = trigger('slideDownUp', [
    state('true', style({ height: '0', opacity: '0' })),
    state('false', style({ height: '*', opacity: '1' })),
    transition('true => false', animate(3000)),
    transition('false => true', [animate(3000)]),
]);
