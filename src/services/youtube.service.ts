import axios, { AxiosRequestConfig } from "axios";

export class YoutubeService {
  /**
   *
   */
  public async getMetrics(authToken: string): Promise<any> {
    const date = new Date();
    const dateStamp = `${date.getFullYear()}-${date
      .getMonth()
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      params: {
        endDate: dateStamp,
        ids: "channel==MINE",
        metrics:
          "views,comments,likes,dislikes,estimatedMinutesWatched,averageViewDuration",
        startDate: "2014-05-01",
      },
    };
    const response = await axios.get(
      "https://youtubeanalytics.googleapis.com/v2/reports",
      config
    );
    console.log(response.data);
    return response.data;
  }
}
