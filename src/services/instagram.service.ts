import axios, { Axios, AxiosRequestConfig } from "axios";

export class InstagramService {
  ///
  public async getUserMedia(userId: string, authToken: string): Promise<any> {
    const url = `https://graph.instagram.com/v13.0/${userId}/media`;
    const info: AxiosRequestConfig = {
      params: {
        access_token: authToken,
        fields:
          "caption,media_type,media_url,permalink,thumbnail_url,timestamp",
      },
    };
    const data = await axios(url, info);
    console.log(data.data);
    return data.data;
  }
}
