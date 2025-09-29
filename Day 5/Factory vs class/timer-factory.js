function createTimer() {
    let startTime = 0;
    let stopTime = 0;
    let runTime = false;

    return {
        start() {
            if (!runTime) {
                startTime = Date.now();
                runTime = true;
            }
        },
        stop() {
            if (runTime) {
                stopTime = Date.now();
                runTime = false;
            }
        },
        reset() {
            startTime = 0;
            stopTime = 0;
            runTime = false;
        },
        elapsed() {
            if (runTime) {
                return (Date.now() - startTime) / 1000;
            } else {
                return (stopTime - startTime) / 1000;
            }
        }
    };
}

// Usage
const t = createTimer();
t.start();
setTimeout(() => {
    t.stop();
    console.log(`The time elapsed is ${t.elapsed()} seconds.`);
}, 3000);
