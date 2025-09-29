class Timer {
    constructor() {
        this.startTime = 0;
        this.stopTime = 0;
        this.runTime = false;
    }
    start() {
        if (!this.runTime) {
            this.startTime = Date.now();
            this.runTime = true;
        }
    }
    stop() {
        this.stopTime = Date.now();
        this.runTime = false;
    }
    reset() {
        this.startTime = 0;
        this.stopTime = 0;
        this.runTime = false;
    }
    elapsed() {
        return (this.stopTime - this.startTime) / 1000;
    }
}

const t = new Timer();
t.start();
setTimeout(() => {
    t.stop();
    console.log(`The time elapsed is ${t.elapsed()} seconds.`);
}, 6000);
