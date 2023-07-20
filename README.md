# Lite JSX - Fastify plugin

[![License][license-image]][license-url]
[![Build Actions][build-image]][build-url]
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]

Lite JSX is a lightweight JavaScript library that allows you to create and manipulate JSX elements using only vanilla JavaScript.

---

## Installation

You can install Lite JSX via npm:

```bash
npm install @lite-jsx/core @lite-jsx/fastify
```

---

## Using Lite JSX with Fastify

To use Lite JSX with Fastify, you can create a plugin that overrides the default `reply.view` function to add support for JSX templates. Here's an example:

```js
const fastify = require("fastify")({ logger: true });
const { liteJsx } = require("@lite-jsx/fastify");

const { Home } = require("./home");

fastify.register(liteJsx);

fastify.get("/", (_request, reply) => {
  reply.view(Home, { message: "Hello world" });
});

fastify.listen({
  port: 3000,
});
```

To enable Lite JSX in our Fastify app, we're using the `liteJsx` plugin, which overrides the default `reply.view` function to add support for JSX templates.

This way, we can pass a JSX component to `reply.view` and it will be rendered as HTML.

And that's it! With these few lines of code, you can start using Lite JSX with Fastify to create powerful, dynamic web applications.

---

## Contributing

If you'd like to contribute to Lite JSX, please feel free to submit a pull request or open an issue on GitHub:

https://github.com/lite-jsx/fastify

## License

Lite JSX is licensed under the [MIT License](https://github.com/danprates/lite-jsx/blob/master/LICENSE).

[npm-url]: https://npmjs.org/package/@lite-jsx/fastify
[npm-image]: https://img.shields.io/npm/v/lite-jsx.svg?style=for-the-badge
[downloads-image]: https://img.shields.io/npm/dm/@lite-jsx/fastify.svg?style=for-the-badge
[build-image]: https://img.shields.io/github/actions/workflow/status/lite-jsx/fastify/publish.yml?style=for-the-badge
[build-url]: https://github.com/lite-jsx/fastify/actions/workflows/publish.yml
[license-image]: https://img.shields.io/github/license/lite-jsx/fastify?style=for-the-badge
[license-url]: https://github.com/lite-jsx/fastify/blob/master/LICENSE
