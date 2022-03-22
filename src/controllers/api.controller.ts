import { ChildControllers, ClassOptions, Controller } from "@overnightjs/core";
import { InstagramController } from "./instagram.controller";
import { YoutubeController } from "./youtube.controller";

@Controller("api/")
@ClassOptions({ mergeParams: true })
@ChildControllers([new YoutubeController(), new InstagramController()])
export class ApiController {}
