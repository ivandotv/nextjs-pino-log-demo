# Nextjs - Pino Transactional Logging Demo.

In this demo, I'm using [`Pino`](https://github.com/pinojs/pino) for logging both on the frontend and the backend.

## Backend

Pino is set up together with the [`AsyncLocalStorage`](https://nodejs.org/api/async_hooks.html#class-asynclocalstorage) so the same **request-id** is tracked through the whole duration of the HTTP request. This is particularly useful when you have _transactional IDs_ that you need to keep track of. Pino logger is set to create a unique id (UUID) for every request.

> Please note that the use of `AsyncLocalStorage` slightly affects performance.

## Frontend

On the frontend, `Pino` is set to log to the browser console, and also to **send** log's from the frontend to the backend `/api/log` via [`navigator.sendBeacon`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)

Frontend Alternative:

As an alternative for the frontend, I've also implemented the [`Tinga`](https://github.com/ivandotv/tinga)(~1.1KB) logging module, which I think is better for logging in the browser, it also sends the logs to the backend.

## Blog post

I will eventually write a blog post detailing the whole setup process. You can follow me on [Twitter](https://twitter.com/iki_xx) or on [Dev.to](https://dev.to/ivandotv)
to be notified of new blog posts.

I use this setup in my projects, so this repository will be kept up to date.

If you have suggestions on how this process could be improved, feel free to open an issue or pull a request.
