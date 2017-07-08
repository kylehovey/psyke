# psyke
Very small and simple library for mocking Promises for testing.

## Usage

As it stands, psyke is a simple utility for creating dummy promise tasks to test asynchronous behavior. I usually end up writing something like this when I want to test promise functionality in new code that I write. First begin by either `require`-ing psyke in Node.js, or by adding psyke as a script in the DOM `<script src="/js/psyke.js'></script>`.

1. Resolve to 42 after a second
  * `let fauxTask = psyke.resolve.to(42).after(1000)`
2. Reject to `"Waterworld"` after 20ms
  * `let badMovie = psyke.reject.to("Waterworld").after(20)`
