import assert from 'power-assert';

import Observr from '../';

class Test extends Observr {}

describe('Observr', () => {
  describe('.on()', () => {
    it('add event', function() {
      var test;
      test = new Test('test on1');
      test.on('eventName1', function() {
        return console.log('on eventName1 !!');
      });
      return assert(typeof test._events['eventName1'][0] === 'function');
    });
  });

  describe('.emit()', function() {
    it('emit', function() {
      var n1, n2, test;
      n1 = 'test';
      n2 = null;
      test = new Test('test trigger1');
      test.on('test', function() {
        return n2 = 'test';
      });
      test.trigger('test');
      return assert(n1 === n2);
    });
  });

  describe('.off()', function() {

    it('remove event', function() {
      var evName, test;
      evName = 'test1';
      test = new Test('test off1');
      test.on(evName, function() {
        console.log('.off() test1');
      });
      test.off(evName);
      assert(test._events[evName] === undefined);
    });

    it('remove handler', function() {
      var eventFunc1, eventFunc2, eventVal1, eventVal2, test;
      test = new Test('test off3');
      eventVal1 = false;
      eventVal2 = false;
      eventFunc1 = function() {
        eventVal1 = true;
      };
      eventFunc2 = function() {
        eventVal2 = true;
      };
      test.on('event1', eventFunc1);
      test.on('event1', eventFunc2);
      test.off('event1', eventFunc1);
      test.trigger('event1');
      assert(eventVal1 === false);
      assert(eventVal2 === true);
    });
  });

  describe('.once()', function() {
    it('event only once', function() {
      var test;
      test = new Test('test one');

      test.once('testName1', function() {});

      assert(typeof test._events['testName1'][0] === 'function');
      test.trigger('testName1');
      assert(test._events['testName1'][0] === undefined);
    });
  });

});
