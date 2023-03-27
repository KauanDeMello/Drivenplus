import axios from "axios";

const apiSubscriptions = axios.create({
  baseURL: "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/",
});

export default apiSubscriptions;