class Timer {
    constructor () {
        this.startTime = 0;
        this.runTime = false;
        this.accumulatedTime = 0;
    }
    start() {
        if (!this.runTime) { //!false=true;
            this.startTime = Date.now();
            this.runTime = true; // Prevents restarting the timer by ensuring the condition only triggers when runTime is false
        }
    }
    pause() {
        if (this.runTime) {
            this.accumulatedTime += Date.now() - this.startTime;
            this.runTime = false;
        }
    }
    resume() {
        if (!this.runTime) {
            this.startTime = Date.now();
            this.runTime = true;
        }
    }
    stop() {
        if (this.runTime) {
            this.accumulatedTime += Date.now() - this.startTime;
            this.runTime = false;
        }
    }
    reset() {
        this.startTime = 0;
        this.stopTime = 0;
        this.runTime = false;
        this.accumulatedTime = 0;
    }
    elapsed() {
        if (this.runTime) {
            return (Date.now() - this.startTime + this.accumulated) / 1000; 
        } else {
            return this.accumulatedTime / 1000;
        }
    }
}

const t = new Timer();
let x = Number(prompt("Enter stop time: "));
t.start();
setTimeout(() => {
    t.stop();
    console.log(`The time elapsed is ${t.elapsed()} seconds.`);
}, x);
