import toastr from 'toastr';
import 'toastr/toastr.scss';

export function debug(description, data, externalDebugging = false) {
    const debugging = true;
    if (debugging && externalDebugging) {
        toastr.info(description);
        console.log("modal.js: " + description, data);
    }
}
export function error(description, data) {
    toastr.error(description);
    console.error("modal.js: " + description, data);
}