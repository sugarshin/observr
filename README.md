# observr

[![Build Status][travis-image]][travis-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

Simple observer pattern

```
npm i observr
```

## Usage

```js
import Observr from 'observr';

let observr = new Observr();
observr.on('eventName', () => {});
observr.emit('eventName'); // => emit event
```

## Methods

### `.on(event, handler)`

### `.once(event, handler)`

### `.off(event [, handler])`

### `.emit(event [, arguments])`

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## Test

```
npm test
```

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/observr.svg
[npm-url]: https://www.npmjs.org/package/observr
[travis-image]: http://img.shields.io/travis/sugarshin/observr/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/observr
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/observr/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/observr
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fobservr.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fobservr
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/observr.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/observr.svg
