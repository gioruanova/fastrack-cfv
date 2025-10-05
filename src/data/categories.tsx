export type Props = {
  category_id: number;
  category_name: string;
  category_status: number;
  created_at: string;
  updated_at: string;
};

export const DefaultCategories: Props[] = [
  {
    category_id: 1,
    category_name: "Consultas",
    category_status: 1,
    created_at: "",
    updated_at: "",
  },
  {
    category_id: 2,
    category_name: "Contratacion",
    category_status: 1,
    created_at: "",
    updated_at: "",
  },
  {
    category_id: 3,
    category_name: "Solciitar Demo",
    category_status: 1,
    created_at: "",
    updated_at: "",
  },
  {
    category_id: 4,
    category_name: "Otros Local",
    category_status: 1,
    created_at: "",
    updated_at: "",
  },
];
