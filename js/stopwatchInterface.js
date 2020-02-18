import Stopwatch from "./stopwatch.js";

export default class StopwatchInterface extends Stopwatch {
    constructor() {
        super();
        this.timerId = 0;
    }

    start(callback, args) {
        if (this.timerId) return;
        this.timerId = setInterval(callback, 10, args);
        super.start();
    }

    pause() {
        this.interrupt();
        super.pause();
    }

    reset(callback, args) {
        this.interrupt();
        super.reset();
        callback(args);
    }

    interrupt() {
        clearInterval(this.timerId);
        this.timerId = 0;
    }

    getTimeFormatted() {
        const currentTime = new Date(super.getCurrentTime());

        const time = {
            hh: currentTime.getUTCHours(),
            mm: currentTime.getUTCMinutes(),
            ss: currentTime.getUTCSeconds(),
            cs: Math.floor(currentTime.getUTCMilliseconds() / 10)
        };

        const t = Object.fromEntries(
            Object.entries(time).map(([key, num]) => [key, `0${num}`.slice(-2)])
        );

        if (time.hh) return `${t.hh}:${t.mm}:${t.ss}:${t.cs}`;

        return `${t.mm}:${t.ss}:${t.cs}`;
    }
}
