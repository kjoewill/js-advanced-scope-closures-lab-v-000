
function toInt(str) {
  return Number(str.substring(0, str.length - 2));
}

function produceDrivingRange(rangeLimit) {
  return function(b1, b2) {
    let net = toInt(b2) - toInt(b1) - rangeLimit;
    if (net > 0) {
      return `${net} blocks out of range`;
    } else {
      return `within range by ${Math.abs(net)}`;
    };
  };
}

function produceTipCalculator(factor) {
   return amount => amount * factor;
}

function createDriver() {

  let DriverId = 0;
  return class {
    constructor(name, manufacturePrice) {
      this.name = name;
      this.id = ++DriverId;
    }
  }


}
