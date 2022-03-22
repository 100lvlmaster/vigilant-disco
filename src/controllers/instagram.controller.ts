import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import { InstagramService } from "../services/instagram.service";

@Controller("instagram")
export class InstagramController {
  public service: InstagramService;
  ///
  constructor() {
    this.service = new InstagramService();
  }
  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
  @Get("user-media")
  public async getChannelMetrics(req: Request, res: Response) {
    const body = req.body as { userId: string; authToken: string };
    const data = await this.service.getUserMedia(body.userId, body.authToken);
    return res.status(200).json(data);
  }
}
