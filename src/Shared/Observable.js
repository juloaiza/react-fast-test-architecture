export default class Observable {
  _value = null;
  observers = []; //all callback function

  constructor(initialValue) {
    this._value = initialValue;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get value() {
    return this._value;
  }

  subscribe = (subscribeCallbackFn) => {
    this.observers.push(subscribeCallbackFn);
    //this.notify(); //eager observer we want to immediately invoked function (callback)
    //No notify will be lazy obeserver
  };

  notify = () => {
    this.observers.forEach((observer) => {
      //observer = callbackfunction
      // this._value = payload or data
      observer(this._value); //
    });
  };
}
