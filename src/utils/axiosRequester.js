import axios from "./axios";

export const axiosRequester = async (
  method = "get",
  endpoint = "",
  requestBody = {},
  requestParams = ""
) => {
  let url = endpoint;
  url += (requestParams && "/" + requestParams) || "";
  switch (method) {
    case "get": {
      try {
        const { data } = await axios.get(url, { params: requestBody });
        return data;
      } catch (err) {
        console.log(err);
      }
      break;
    }
    case "post": {
      try {
        const { data } = await axios.post(url, requestBody);
        return data;
      } catch (err) {
        console.log(err);
      }
      break;
    }
    default: {
      console.log("In default call");
    }
  }
};
