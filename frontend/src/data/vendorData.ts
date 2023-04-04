import { IFleaItem } from "../components/interfaces/vendor-interfaces";
import { IOptions } from "../components/Options";
import { ITextArea } from "../components/TextArea";

export const initialArticles: IFleaItem[] = [
  {
    id: 1,
    category: "Möbel",
    condition: "Gut",
    description:
      "Ich verkaufe mein cooles Sofa, welches ein Einhornmotiv hat 🦄",
    name: "Einhorn-Sofa",
    price: 50,
    email: "einhorn@hotmail.com",
  },
  {
    id: 2,
    category: "Elektronik",
    condition: "Benutzt",
    description:
      "Verkaufe mein Huawei P10 Lite.\nZustand: Benutzt\n Hat ein paar Kratzer auf der Rückseite.",
    name: "Huawei P10 Lite (BENUTZT)",
    price: 90,
    email: "mobile-device@hotmail.com",
  },
  {
    id: 3,
    category: "Gewand",
    condition: "Neu",
    description:
      "Neuwertige Basic T-Shirts zum Verkauf. 10 Stück in unterschiedlichen Farben.",
    name: "Basic T-Shirts (10 Stück)",
    price: 35,
    email: "kleiderware@hotmail.com",
  },
];

export const textareaprops: ITextArea = {
  name: "description",
  id: "description",
  label: "Gib hier die Beschreibung der Ware ein",
};

// Kategorie der Ware
export const categoryOptions: IOptions = {
  inputLabel: "Kategorie der Ware",
  labelId: "categories-label",
  selectId: "categories-select",
  options: [
    {
      id: "furniture",
      value: "Möbel",
    },
    {
      id: "electronic",
      value: "Elektronik",
    },
    {
      id: "clothing",
      value: "Gewand",
    },
    {
      id: "books",
      value: "Bücher 📚",
    },
    {
      id: "cars",
      value: "Autos 🚗",
    },
  ],
};

export const conditionOptions: IOptions = {
  inputLabel: "Zustand der Ware",
  labelId: "condition-label",
  selectId: "condition-select",
  options: [
    {
      id: "new",
      value: "Neu",
    },
    {
      id: "perfect",
      value: "Sehr gut",
    },
    {
      id: "good",
      value: "Gut",
    },
    {
      id: "used",
      value: "Benutzt",
    },
  ],
};
