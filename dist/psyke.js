"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Psyke Promise mock suite
 *
 * Design goals:
 *
 * Create resolving promises on the fly: psyke.resolve.to(value).after(time)
 * Create rejecting promises on the fly: psyke.reject.to(value).after(time)
 */

/**
 * Psyke type to curry information along the chain
 */
var _Psyke = function () {
  /**
   * Create the Psyke object
   * @param {Boolean} resolve Whether or not the end result is resolution
   */
  function _Psyke(resolve) {
    _classCallCheck(this, _Psyke);

    this.resolve = resolve;
  }

  /**
   * Set the value that is being resolved
   * @param {Anything} value Value to resolve/reject to
   * @return {Object}
   */


  _createClass(_Psyke, [{
    key: "to",
    value: function to(value) {
      this.value = value;
      return this;
    }

    /**
     * Create a promise that will complete after t ms
     * @param {Number} t Time in ms to complete
     * @retur {Promise}
     */

  }, {
    key: "after",
    value: function after(t) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          (_this.resolve ? resolve : reject)(_this.value);
        }, t);
      });
    }
  }]);

  return _Psyke;
}();

;

// On load wrapper
(function () {
  // Define the global psyke object
  window.psyke = new Object();

  /**
   * Use rejection as the promise outcome
   */
  Object.defineProperty(window.psyke, "resolve", {
    get: function get() {
      return new _Psyke(true);
    }
  });

  /**
   * Use rejection as the promise outcome
   */
  Object.defineProperty(window.psyke, "reject", {
    get: function get() {
      return new _Psyke(false);
    }
  });

  // Seal psyke
  window.psyke = Object.seal(window.psyke);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBzeWtlLmpzIl0sIm5hbWVzIjpbIl9Qc3lrZSIsInJlc29sdmUiLCJ2YWx1ZSIsInQiLCJQcm9taXNlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIndpbmRvdyIsInBzeWtlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7OztJQUdNQSxNO0FBQ0o7Ozs7QUFJQSxrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNuQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7QUFFRDs7Ozs7Ozs7O3VCQUtHQyxLLEVBQU87QUFDUixXQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7MEJBS01DLEMsRUFBRztBQUFBOztBQUNQLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNILE9BQUQsRUFBVUksTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmLFdBQUMsTUFBS0wsT0FBTCxHQUFlQSxPQUFmLEdBQXlCSSxNQUExQixFQUFrQyxNQUFLSCxLQUF2QztBQUNELFNBRkQsRUFFR0MsQ0FGSDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7QUFDRjs7QUFFRDtBQUNBLENBQUMsWUFBTTtBQUNMO0FBQ0FJLFNBQU9DLEtBQVAsR0FBZSxJQUFJQyxNQUFKLEVBQWY7O0FBRUE7OztBQUdBQSxTQUFPQyxjQUFQLENBQXNCSCxPQUFPQyxLQUE3QixFQUFvQyxTQUFwQyxFQUErQztBQUM3Q0csU0FBTTtBQUFBLGFBQU0sSUFBSVgsTUFBSixDQUFXLElBQVgsQ0FBTjtBQUFBO0FBRHVDLEdBQS9DOztBQUlBOzs7QUFHQVMsU0FBT0MsY0FBUCxDQUFzQkgsT0FBT0MsS0FBN0IsRUFBb0MsUUFBcEMsRUFBOEM7QUFDNUNHLFNBQU07QUFBQSxhQUFNLElBQUlYLE1BQUosQ0FBVyxLQUFYLENBQU47QUFBQTtBQURzQyxHQUE5Qzs7QUFJQTtBQUNBTyxTQUFPQyxLQUFQLEdBQWVDLE9BQU9HLElBQVAsQ0FBWUwsT0FBT0MsS0FBbkIsQ0FBZjtBQUNELENBcEJEIiwiZmlsZSI6InBzeWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQc3lrZSBQcm9taXNlIG1vY2sgc3VpdGVcbiAqXG4gKiBEZXNpZ24gZ29hbHM6XG4gKlxuICogQ3JlYXRlIHJlc29sdmluZyBwcm9taXNlcyBvbiB0aGUgZmx5OiBwc3lrZS5yZXNvbHZlLnRvKHZhbHVlKS5hZnRlcih0aW1lKVxuICogQ3JlYXRlIHJlamVjdGluZyBwcm9taXNlcyBvbiB0aGUgZmx5OiBwc3lrZS5yZWplY3QudG8odmFsdWUpLmFmdGVyKHRpbWUpXG4gKi9cblxuLyoqXG4gKiBQc3lrZSB0eXBlIHRvIGN1cnJ5IGluZm9ybWF0aW9uIGFsb25nIHRoZSBjaGFpblxuICovXG5jbGFzcyBfUHN5a2Uge1xuICAvKipcbiAgICogQ3JlYXRlIHRoZSBQc3lrZSBvYmplY3RcbiAgICogQHBhcmFtIHtCb29sZWFufSByZXNvbHZlIFdoZXRoZXIgb3Igbm90IHRoZSBlbmQgcmVzdWx0IGlzIHJlc29sdXRpb25cbiAgICovXG4gIGNvbnN0cnVjdG9yKHJlc29sdmUpIHtcbiAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmFsdWUgdGhhdCBpcyBiZWluZyByZXNvbHZlZFxuICAgKiBAcGFyYW0ge0FueXRoaW5nfSB2YWx1ZSBWYWx1ZSB0byByZXNvbHZlL3JlamVjdCB0b1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0byh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBwcm9taXNlIHRoYXQgd2lsbCBjb21wbGV0ZSBhZnRlciB0IG1zXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0IFRpbWUgaW4gbXMgdG8gY29tcGxldGVcbiAgICogQHJldHVyIHtQcm9taXNlfVxuICAgKi9cbiAgYWZ0ZXIodCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgKHRoaXMucmVzb2x2ZSA/IHJlc29sdmUgOiByZWplY3QpKHRoaXMudmFsdWUpO1xuICAgICAgfSwgdCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIE9uIGxvYWQgd3JhcHBlclxuKCgpID0+IHtcbiAgLy8gRGVmaW5lIHRoZSBnbG9iYWwgcHN5a2Ugb2JqZWN0XG4gIHdpbmRvdy5wc3lrZSA9IG5ldyBPYmplY3QoKTtcblxuICAvKipcbiAgICogVXNlIHJlamVjdGlvbiBhcyB0aGUgcHJvbWlzZSBvdXRjb21lXG4gICAqL1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LnBzeWtlLCBcInJlc29sdmVcIiwge1xuICAgIGdldCA6ICgpID0+IG5ldyBfUHN5a2UodHJ1ZSlcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVzZSByZWplY3Rpb24gYXMgdGhlIHByb21pc2Ugb3V0Y29tZVxuICAgKi9cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5wc3lrZSwgXCJyZWplY3RcIiwge1xuICAgIGdldCA6ICgpID0+IG5ldyBfUHN5a2UoZmFsc2UpXG4gIH0pO1xuXG4gIC8vIFNlYWwgcHN5a2VcbiAgd2luZG93LnBzeWtlID0gT2JqZWN0LnNlYWwod2luZG93LnBzeWtlKTtcbn0pKClcbiJdfQ==
