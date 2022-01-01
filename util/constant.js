export const public_url = {
  contact_us: "/contact-us",
  members: "/user",
};

// Assets
export const HeightDropDown = [{ label: "5'7", value: "5'7" }];
export const Occuption = [
  { label: "None", value: "none" },
  { label: "Private", value: "private" },
  { label: "Goverment", value: "govt" },
  { label: "Business", value: "business" },
  { label: "Self", value: "self" },
];

export const MarriedUnmarriedBrotherSister = [
  { label: 0, value: "0" },
  { label: 1, value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
  { label: 7, value: 7 },
  { label: 8, value: 8 },
  { label: 9, value: 9 },
  { label: 10, value: 10 },
];
export const Weight = () => {
  let WeightArr = [];
  for (let i = 1; i <= 150; i++) {
    WeightArr.push({ label: i + " Kg", value: i });
  }

  return WeightArr;
};
export const Height = () => {
  let HeightArr = [];
  for (let i = 1; i <= 15; i++) {
    for (let j = 1; j <= 12; j++) {
      HeightArr.push({ label: `${i}'${j} Feet`, value: `${i}'${j}` });
    }
  }

  return HeightArr;
};
export const Age = () => {
  let AgeArr = [];
  for (let i = 1; i <= 100; i++) {
    AgeArr.push({ label: i + " Years", value: i });
  }
  return AgeArr;
};
export const Religion = [
  { value: "Jain Digamber", label: "Jain Digamber" },
  { value: "Jain Shwetamber", label: "Jain Shwetamber" },
];
export const Gender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];
