import express from "express";

const routes = express.Router();

routes.get("/", (request, response, next) => {
  response.json({
    ok: true,
  });
});

export default routes;
