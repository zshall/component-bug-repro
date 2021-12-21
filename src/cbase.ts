import { bindable } from 'aurelia-framework';
export class CBase {
    // If you comment out this bindable property, you'll see C1 and C2 in app.html
    // Otherwise you only see C2.
    @bindable title: string;
}
