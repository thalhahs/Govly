export type Goverment = {
  id: number;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Goverments = Goverment[];

export const dataGoverments: Goverments = [
  {
    id: 1,
    name: "Departement of Agriculture",
    slug: "Agriculture",
    description:
      "The Departement of Agriculture is responsible for the production and distribution of food and agriculture.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Departement of Defense",
    slug: "Defense",
    description: "The Departement of Defense is responsible for the defense of the country.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Departement of Education",
    slug: "Education",
    description: "The Departement of Education is responsible for the education of the country.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];