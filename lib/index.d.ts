import type { FastifyPluginCallback } from "fastify";

declare module "fastify" {
  interface FastifyReply {
    /**
     * Renders a template or JSX component as a view.
     *
     * @param template - The template or JSX component to render.
     * @param data - Optional data to pass to the template or JSX component.
     * @returns void
     *
     * @example
     * // Render a JSX component
     * reply.view(Home, { message: "Hello, World!" });
     *
     * // Render a raw template
     * reply.view(h("div", null, h("h1", null, message)), { message: "Hello, World!" });
     */
    view(page: Function, data?: object): ReturnType<FastifyReply["send"]>;
  }
}

declare namespace LiteJSX {
  /**
   * Middleware that uses lite-jsx to render JSX templates in an Express application.
   *
   * @example
   * const fastify = require("fastify")({ logger: true });
   * const { Home } = require("./hello");
   * const { liteJsx } = require("@lite-jsx/fastify");
   *
   * fastify.register(liteJsx);
   *
   * fastify.get("/", async (request, reply) => {
   *  reply.view(Home, { message: "Hello world" });
   * });
   *
   * fastify.listen({ port: 3000 }, function (err) {
   *  if (err) {
   *    fastify.log.error(err);
   *  }
   * });
   */
  export function liteJsx(): FastifyPluginCallback;
}

export = LiteJSX;
