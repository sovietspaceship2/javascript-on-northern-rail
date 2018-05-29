const Promise = require('../lib');

it('should resolve sometimes', async function () {
  this.timeout(1000)
  await Promise.delay(10000)
});
