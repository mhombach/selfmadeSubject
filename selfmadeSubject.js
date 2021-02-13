export default class SelfmadeSubject {

    subscriptions;
    finished;

    constructor() {
        this.subscriptions = [];
        this.finished = false;
    }

    get numberOfSubscriptions() {
        return this.subscriptions.length;
    }

    subscribe(functionRef) {
        this.subscriptions.push(functionRef);
    }

    unsubscribe(functionRef) {
        const indexOfFunctionRef = this.subscriptions.indexOf(functionRef);
        if (indexOfFunctionRef === -1) {
            console.error('Could not unsubscribe because the provided function-reference is not subscribed.');
            return;
        }
        this.subscriptions.splice(indexOfFunctionRef, 1);
    }

    next(value) {
        if (this.finished) {
            console.error('Tried to \'next()\' an already finished Subject!');
            return;
        }
        for (const subscription of this.subscriptions) {
            subscription(value);
        }
    }

    unsubscribeAll() {
        this.subscriptions = [];
    }

    finish() {
        this.finished = true;
    }
}