import SelfmadeSubject from "./selfmadeSubject.js";

function log1(value) {
    console.log(`log 1 - value: ${value}`);
}

function log2(value) {
    console.log(`log 2 - value: ${value}`);
}

const subject = new SelfmadeSubject();

subject.subscribe(log1);
subject.subscribe(log2);

subject.next('value 1');

subject.unsubscribe(log1);
subject.next('value 2');

subject.unsubscribeAll();
subject.next('value 3');

subject.subscribe(log1);
subject.subscribe(log2);
subject.finish();
subject.next('value 4');
