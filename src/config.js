const dev = {
  apiGateway: {
    URL: "https://zoetic.ozdemirden.com"
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