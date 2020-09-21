const dev = {
  apiGateway: {
    URL: "http://localhost:8080"
  },
};

const prod = {
  apiGateway: {
    URL: "https://zoetic.ozdemirden.com"
  },
};

const config = __DEV__ ? dev : prod;
console.log("config=", config);

export default {
  ...config
};