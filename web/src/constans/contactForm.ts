export enum ContactFormFieldNames {
  FIRSTNAME = "firstname",
  EMAIL = "email",
  DATE = "date",
  PLACE = "place",
  STYLE = "style",
  MESSAGE = "message",
}

export type ContactFormField = {
  name: ContactFormFieldNames;
  label: string;
  placeholder: string;
};

export const contactFormFields: Record<
  ContactFormFieldNames,
  ContactFormField
> = {
  [ContactFormFieldNames.FIRSTNAME]: {
    name: ContactFormFieldNames.FIRSTNAME,
    label: "Imię",
    placeholder: "Imię",
  },
  [ContactFormFieldNames.EMAIL]: {
    name: ContactFormFieldNames.EMAIL,
    label: "Email",
    placeholder: "Twój email",
  },
  [ContactFormFieldNames.DATE]: {
    name: ContactFormFieldNames.DATE,
    label: "Data uroczystości",
    placeholder: "Data uroczystości",
  },
  [ContactFormFieldNames.PLACE]: {
    name: ContactFormFieldNames.PLACE,
    label: "Miejsce uroczystości",
    placeholder: "Miejsce uroczystości (sala)",
  },
  [ContactFormFieldNames.STYLE]: {
    name: ContactFormFieldNames.STYLE,
    label: "Styl uroczystości",
    placeholder: "",
  },
  [ContactFormFieldNames.MESSAGE]: {
    name: ContactFormFieldNames.MESSAGE,
    label: "Treść wiadomości",
    placeholder: "",
  },
};
