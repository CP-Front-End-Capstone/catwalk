const dummyProducts = [
  {
    id: 17067,
    campus: 'hr-rfp',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'Steamboat is awesome',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17068,
    campus: 'hr-rfp',
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description: 'Skiing is cool but snowboarding is better',
    category: 'Accessories',
    default_price: '69.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17069,
    campus: 'hr-rfp',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description: 'I love music so much',
    category: 'Pants',
    default_price: '40.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17070,
    campus: 'hr-rfp',
    name: "Slacker's Slacks",
    slogan: 'Comfortable for everything, or nothing',
    description: "I'll tell you how great they are after I nap for a bit.",
    category: 'Pants',
    default_price: '65.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17071,
    campus: 'hr-rfp',
    name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
];

const dummyRelatedProducts = [
  17069,
  17073,
  17072,
  17071,
];

const dummyProduct = {
  id: 17071,
  campus: 'hr-rfp',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-02-23T04:22:44.728Z',
  updated_at: '2021-02-23T04:22:44.728Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};

export { dummyProducts, dummyProduct, dummyRelatedProducts };
