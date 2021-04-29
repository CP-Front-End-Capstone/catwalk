const avgRating = (reviewsMeta) => {
  const fiveStars = (reviewsMeta.ratings[5])
    ? (reviewsMeta.ratings[5]) : 0;
  const fourStars = (reviewsMeta.ratings[4])
    ? (reviewsMeta.ratings[4]) : 0;
  const threeStars = (reviewsMeta.ratings[3])
    ? (reviewsMeta.ratings[3]) : 0;
  const twoStars = (reviewsMeta.ratings[2])
    ? (reviewsMeta.ratings[2]) : 0;
  const oneStar = (reviewsMeta.ratings[1])
    ? (reviewsMeta.ratings[1]) : 0;

  const totalRatings = Number(fiveStars) + Number(fourStars)
    + Number(threeStars) + Number(twoStars) + Number(oneStar);

  const avgCalc = (((Number(fiveStars)) * 5)
    + (Number(fourStars) * 4)
    + (Number(threeStars) * 3)
    + (Number(twoStars) * 2)
    + (Number(oneStar))) / totalRatings;

  const formattedAvg = Math.round(avgCalc * 10) / 10;

  return formattedAvg;
};

export default avgRating;
