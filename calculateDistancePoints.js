const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let hillNormal = (distance - kPoint) * 2;
  let hillBig = (distance - kPoint) * 1.8;
  let hillMammoth = (distance - kPoint) * 1.2;

  if (hillSize === 'normal') {
    return 60 + hillNormal;
  } else if (hillSize === 'big') {
    return 60 + hillBig;
  } else if (hillSize === 'mammoth') {
    return 120 + hillMammoth;
  } else {
    return 'Error';
  }
};

module.exports = calculateDistancePoints;
