# JavaScript on Northern Rail

Train-powered async computation for commuters.

## API

* `Promise.delay(ms: int, value: any = undefined): Promise`: returns a promise that will resolve with `value` after `ms` milliseconds
* `Promise.prototype.then(fulfillmentHandler: function<any>): Promise`: calls `fulfillmentHandler` with the resolved value when (or better, if) fulfilled
* `Promise.prototype.cancel(): undefined`: cancels promise
