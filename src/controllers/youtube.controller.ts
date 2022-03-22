import { Controller, Get } from "@overnightjs/core";
import { NextFunction, Request, Response } from "express";
import { YoutubeService } from "../services/youtube.service";

@Controller("youtube")
export class YoutubeController {
  public service: YoutubeService;
  ///
  constructor() {
    this.service = new YoutubeService();
  }
  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
  @Get("metrics")
  public async getChannelMetrics(req: Request, res: Response) {
    const body = req.body;
    const data = await this.service.getMetrics(body.token);
    return res.status(200).json(data);
  }
}
