class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    setInterval(this._tick.bind(this), 1000);
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // Format the time in HH:MM:SS

    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(time);
  }

  incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 0) {
        this.minutes = 0;
        this.hours += 1;
      }
    }
  }

  _tick() {
    // 1. Increment the time by one second.
    this.incrementSeconds();
    this.printTime();
    // 2. Call printTime.
  }
}

const clock = new Clock();
// clock._tick(clock.printTime.bind(clock));
