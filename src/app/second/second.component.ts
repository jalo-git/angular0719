import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-second',
    template: `<p> Second works <br> <br> {{secondMessage ? secondMessage : "_______"}}   </p>`,
    styles: ['p {color:red}']
})
export class SecondComponent{
    @Input() secondMessage = "";


}
