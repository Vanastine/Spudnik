import { animate, state, style, transition, trigger } from '@angular/animations';
export const openCloseTrigger = 
trigger('openClose', [
    state(
    'open',
    style({
        opacity: 1,
        transform: 'scale(1, 1)',
    })
    ),
    state(
    'closed',
    style({
        opacity: 0,
        transform: 'scale(0.95, 0.95)',
    })
    ),
    transition('open => closed', [animate('200ms ease-in')]),
    transition('closed => open', [animate('300ms ease-out')]),
]);
