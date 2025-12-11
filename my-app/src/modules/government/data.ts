export type Government = {
  id: number;
  name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Governments = Government[];

export const dataGovernments: Governments = [
  {
    id: 1,
    name: "Department of Agriculture",
    slug: "Agriculture",
    description:
      "The Department of Agriculture is responsible for the production and distribution of food and agriculture.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Department of Defense",
    slug: "Defense",
    description: "The Department of Defense is responsible for the defense of the country.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Department of Education",
    slug: "Education",
    description: "The Department of Education is responsible for the education of the country.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
