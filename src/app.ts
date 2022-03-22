import { Server } from "@overnightjs/core";
import Logger from "jet-logger";
import express from "express";
import { ApiController } from "./controllers/api.controller";
import bodyParser from "body-parser";

export class App extends Server {
  /**
   *
   */
  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded());
    this.initDb();
    this.setupControllers();
    super.addControllers([]);
  }

  /**
   * Setup all the controllers
   */
  private setupControllers() {
    this.addControllers([new ApiController()]);
  }

  /**
   *
   * @param port
   */
  private initDb() {}

  /**
   * Start the server
   * @param port
   */
  public start(port: number): void {
    this.app.listen(port, () => {
      Logger.imp("Server listening on port: " + port);
    });
  }
}
