const rentService = "api/v1/cars/rent";
const buyService = "api/v1/cars/buy";

const endPointConstants = {
  RENT_CAR_LIST: rentService,
  RENT_CAR_SUMMARY: `${rentService}/details`,
  ALL_CITY: 'api/v1/city',
  BUY_CAR_LIST: `${buyService}`,
  BUY_CAR_SUMMARY: `${buyService}/details`,
  SELL_CAR : 'api/v1/cars/sell',
};

export default endPointConstants;
