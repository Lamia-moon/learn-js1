// Immidiately Invoke Function Expresson (IIFE)

(function one () {
    // named iife
    console.log(`DB CONNECTED`);
}) ();
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Moon")