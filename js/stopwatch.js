export default class Stopwatch {
    constructor() {
        this.initTime = 0;
        this.pausedTime = 0;
    }

    start() {
        this.initTime = Date.now() - this.pausedTime;
        this.pausedTime = 0;
    }

    pause() {
        if (this.pausedTime) return;
        this.pausedTime = this.getCurrentTime();
    }

    reset() {
        this.initTime = 0;
        this.pausedTime = 0;
    }

    getCurrentTime() {
        if (!this.initTime) return 0;
        return Date.now() - this.initTime;
    }
}
