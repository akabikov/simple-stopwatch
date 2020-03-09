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
    const addZero = val => (val < 10 ? "0" : "") + val;

    const cTime = super.getCurrentTime();

    // ^ 0 for flooring
    const hh = addZero((cTime / 3600000) ^ 0);
    const mm = addZero(((cTime % 3600000) / 60000) ^ 0);
    const ss = addZero((((cTime % 3600000) % 60000) / 1000) ^ 0);
    const cs = addZero(((cTime % 1000) / 10) ^ 0);

    const timeStr = `${mm}:${ss}:${cs}`;
    if (hh !== "00") timeStr = `${hh}:${timeStr}`;

    return timeStr;
  }
}
