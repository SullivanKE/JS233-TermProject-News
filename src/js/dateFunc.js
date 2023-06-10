export function minutesSince(time) {
    const now = Date.now;
    const difference = now - time;

    const secs = Math.floor(Math.abs(difference) / 1000);
    const mins = Math.floor(secs / 60);

    return mins;
}