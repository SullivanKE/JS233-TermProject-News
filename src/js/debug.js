import toastr from 'toastr';
import 'toastr/toastr.scss';

export function debug(prefix, description, data, externalDebugging = false) {
    const debugging = true;
    if (debugging && externalDebugging) {
        toastr.info(description);
        console.log(prefix + " | " + description, data);
    }
}
export function error(prefix, description, data) {
    toastr.error(description);
    let caller = debug.caller;
    console.error(prefix + " | " + description, data);
}