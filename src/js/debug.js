import toastr from 'toastr';
import 'toastr/toastr.scss';
export class Debug {
    constructor(prefix, classDebugger) {
        this.debugging = true;
        this.prefix = prefix;
        this.classDebugger = classDebugger
    }
    debug(description, data) {
        if (this.debugging && this.classDebugger) {
            toastr.info(this.description);
            console.log(this.prefix + " | " + description, data);
        }
    }
    error(description, data) {
        toastr.error(description);
        console.error(this.prefix + " | " + description, data);
    }
}
