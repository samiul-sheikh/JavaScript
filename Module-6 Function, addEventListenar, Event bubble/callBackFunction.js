function explain_callback(name, age, task) {
    console.log('Hello ', name);
    console.log('Your age ', age);
    // console.log(task);
    // when send function in parameter(callback function) calling process
    task();
}

function washHand() {
    console.log('use hand sanitizer');
}

function takeShower() {
    console.log('Take Shower');
}

function scrollFacebook() {
    console.log('Scroll Facebook');
}

// send function name in parameter
explain_callback('Nobel Sheikh', 24, washHand);
explain_callback('Lingcon Sheikh', 28, takeShower);
explain_callback('Samiul Sheikh', 26, scrollFacebook);

// callback function = pass a function as parameter.