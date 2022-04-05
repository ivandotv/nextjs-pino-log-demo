# Nextjs - Pino Logging Demo.

In this demo, I'm using [`Pino`](https://github.com/pinojs/pino) for logging both on the front end and on the backend.

Backend:

Pino is set up together with the [`AsyncLocalStorage](https://nodejs.org/api/async_hooks.html#class-asynclocalstorage) so the same **request-id** is tracked through the whole duration of the HTTP request. This is particularly useful when you have _transactional IDs_ that you need to keep track of.

Frontend:

On the frontend, `Pino` is set to log to the browser console, and also to **send** log's from the frontend to the backend `/api/log` via `navigator.sendBeacon`

As an alternative for the front-end, I've also implemented the [`Tinga`](https://github.com/ivandotv/tinga)(~1.1KB) logging module, which I think is better for logging in to the browser.
