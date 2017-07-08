/**
 * Psyke Promise mock suite
 */

/**
 * Psyke type to curry information along the chain
 */
class _Psyke {
  /**
   * Create the Psyke object
   * @param {Boolean} resolve Whether or not the end result is resolution
   */
  constructor(resolve) {
    this.resolve = resolve;
  }

  /**
   * Set the value that is being resolved
   * @param {Anything} value Value to resolve/reject to
   * @return {Object}
   */
  to(value) {
    this.value = value;
    return this;
  }

  /**
   * Create a promise that will complete after t ms
   * @param {Number} t Time in ms to complete
   * @return {Promise}
   */
  after(t) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        (this.resolve ? resolve : reject)(this.value);
      }, t);
    });
  }
};

// On load wrapper
(() => {
  // Define the global psyke object
  let psyke = new Object();

  /**
   * Use resolution as the promise outcome
   */
  Object.defineProperty(psyke, "resolve", {
    get : () => new _Psyke(true)
  });

  /**
   * Use rejection as the promise outcome
   */
  Object.defineProperty(psyke, "reject", {
    get : () => new _Psyke(false)
  });

  // Seal psyke
  psyke = Object.seal(psyke);

  // Seal psyke
  if (module) {
    module.exports = psyke;
  } else {
    Object.defineProperty(window, "psyke", {
      value : psyke
    });
  }
})()
