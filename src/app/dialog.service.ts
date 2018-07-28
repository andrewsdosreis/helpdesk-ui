import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class DialogService {

    confirm(message?: string) {
        return new Promise( resolve => {
            return resolve(window.confirm(message || 'Confirm?'));
        });
    }
}
