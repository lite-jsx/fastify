const plugin = require("fastify-plugin");

/**
 * Plugin that uses lite-jsx to render JSX templates in an Fastify application.
 *
 * @param {import("fastify").FastifyInstance} fastify
 * @param {import("fastify").FastifyPluginOptions} opts
 * @param {import("fastify").FastifyPluginCallback} done
 * @returns {void}
 */
const liteJsx = (fastify, _opts, done) => {
  fastify.decorateReply("view", function (template, props) {
    try {
      const html =
        "<!DOCTYPE html>" +
        template({ ...props, $req: this.request, $res: this });
      this.status(200).type("text/html; charset=utf-8").send(html);
    } catch (error) {
      done(error);
    }
  });
  done();
};

module.exports = { liteJsx: plugin(liteJsx) };
