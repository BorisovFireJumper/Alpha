import { httpClient } from "./httpCilent.js";

export const getNews = (offset) => httpClient.get(`/news/${offset}`)