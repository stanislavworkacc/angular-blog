import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidator {

    static restrictedEmails(control: FormControl): {[key:string]: boolean} {
        if(['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
            return {
                restrictedEmail: true
            }
        }
        return null;
    }

    static uniqEmail(controll: FormControl): Promise<any> | Observable<any>  {
        return new Promise(res => {
            setTimeout(() => {
                if(controll.value === 'async@mail.ru') {
                    res({
                        uniqEmail: true
                    })
                } else {
                    res(null)
                }
            }, 1000)
        })
    }

}