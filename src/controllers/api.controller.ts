import { ChildControllers, ClassOptions, Controller } from "@overnightjs/core";
import { YoutubeController } from "./youtube.controller";

@Controller("api/")
@ClassOptions({ mergeParams: true })
@ChildControllers([new YoutubeController()])
export class ApiController {}
