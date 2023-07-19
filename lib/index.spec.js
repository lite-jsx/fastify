const fastify = require("fastify")({ logger: false });
const { h } = require("lite-jsx");
const { deepEqual } = require("assert");
const { liteJsx } = require(".");

fastify.register(liteJsx);

// should render complex component properly
{
  const ComplexComponent = ({ message }) => {
    return h("div", null, h("h1", null, message));
  };
  fastify.get("/complex", async (_request, reply) => {
    reply.view(ComplexComponent, { message: "Hello world" });
  });
  fastify
    .inject({
      method: "GET",
      url: "/complex",
    })
    .then((response) => {
      deepEqual(
        response.headers["content-type"],
        "text/html; charset=utf-8",
        "Status should be equal to 200"
      );
      deepEqual(response.statusCode, 200, "Status should be equal to 200");
      deepEqual(
        response.body,
        "<!DOCTYPE html><div><h1>Hello world</h1></div>",
        "Body render properly"
      );
    });
}
