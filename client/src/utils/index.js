const avgRating = (ratings) => {
  const totalRatings = Number((ratings[5]))
  + Number((ratings[4]))
  + Number((ratings[3]))
  + Number((ratings[2]))
  + Number((ratings[1]));

  const avgCalc = ((Number((ratings[5])) * 5)
      + (Number((ratings[4])) * 4)
      + (Number((ratings[3])) * 3)
      + (Number((ratings[2])) * 2)
      + (Number((ratings[1])))) / totalRatings;

  const formattedAvg = Math.round(avgCalc * 10) / 10;

  return formattedAvg;
};

export default avgRating;
