import { Formik, Form, Field, FormikHelpers } from "formik";
import React from "react";
import {
  useContactFormQuery,
  useSendEmailMutation,
} from "../../generated/graphql";
import { useToasts } from "react-toast-notifications";
import { mapArrayToObject } from "../../utils/mapArrayToObject";
import RichText from "../RichText/RichText";
import { contactFormFields } from "../../constans/contactForm";

interface FormValues {
  firstname: string;
  email: string;
  date: string;
  place: string;
  style: string;
  message: string;
  agreement: boolean;
}

const ContactForm: React.FC<{}> = ({}) => {
  const { addToast } = useToasts();
  const { data: contactFormConfig } = useContactFormQuery();
  const [sendEmail] = useSendEmailMutation();

  const placeholders = contactFormConfig?.contactForm?.placeholders
    ? mapArrayToObject(contactFormConfig.contactForm.placeholders, "field")
    : {};

  const handleFormSubmit = async (
    values: FormValues,
    { resetForm, setStatus, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const response = await sendEmail({
      variables: {
        options: {
          ...values,
          agreement: {
            value: values.agreement,
            content: contactFormConfig?.contactForm?.agreement as string,
          },
        },
      },
    });
    if (!response) {
      addToast("Coś poszło nie tak, spróbuj ponowanie.", {
        appearance: "error",
      });
      setStatus({ success: false });
      setSubmitting(false);
      return;
    }

    addToast("Wiadomość została wysłana.", {
      appearance: "success",
    });
    setStatus({ success: true });
    resetForm();
  };

  return (
    <div className="p-4 bg-gray-100">
      <Formik
        enableReinitialize={true}
        initialValues={{
          firstname: "",
          email: "",
          date: "",
          place: "",
          style: "",
          message: "",
          agreement: false,
        }}
        onSubmit={(values, helpers) => handleFormSubmit(values, helpers)}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-2 gap-2 lg:gap-3">
            <label
              htmlFor={contactFormFields.firstname.name}
              className="flex flex-col col-span-2 lg:col-span-1"
            >
              <span className="font-bold text-gray-700 text-sm py-1">
                {contactFormFields.firstname.label}
              </span>
              <Field
                type="text"
                name={contactFormFields.firstname.name}
                placeholder={
                  placeholders.firstname?.placeholder ||
                  contactFormFields.firstname.placeholder
                }
                className="border-gray-300 border-solid border-2 p-2"
                required
              />
            </label>
            <label
              htmlFor={contactFormFields.email.name}
              className="flex flex-col col-span-2 lg:col-span-1"
            >
              <span className="font-bold text-gray-700 text-sm py-1">
                {contactFormFields.email.label}
              </span>
              <Field
                type="email"
                name={contactFormFields.email.name}
                placeholder={
                  placeholders.email?.placeholder ||
                  contactFormFields.email.placeholder
                }
                className="border-gray-300 border-solid border-2 p-2"
                required
              />
            </label>
            <label
              htmlFor={contactFormFields.date.name}
              className="flex flex-col  col-span-2 lg:col-span-1"
            >
              <span className="font-bold text-gray-700 text-sm py-1">
                {contactFormFields.date.label}
              </span>
              <Field
                type="text"
                name={contactFormFields.date.name}
                onFocus={(e: any) => (e.target.type = "date")}
                placeholder={
                  placeholders.date?.placeholder ||
                  contactFormFields.date.placeholder
                }
                className="border-gray-300 border-solid border-2 p-2"
                required
              />
            </label>
            <label
              htmlFor={contactFormFields.place.name}
              className="flex flex-col  col-span-2 lg:col-span-1"
            >
              <span className="font-bold text-gray-700 text-sm py-1">
                {contactFormFields.place.label}
              </span>
              <Field
                type="text"
                name={contactFormFields.place.name}
                placeholder={
                  placeholders.place?.placeholder ||
                  contactFormFields.place.placeholder
                }
                className="border-gray-300 border-solid border-2 p-2"
                required
              />
            </label>
            {contactFormConfig?.contactForm?.styles && (
              <>
                <label
                  htmlFor={contactFormFields.style.name}
                  className="flex flex-col col-span-2"
                >
                  <span className="font-bold text-gray-700 text-sm py-1">
                    {contactFormFields.style.label}
                  </span>
                  <Field
                    component="select"
                    name={contactFormFields.style.name}
                    className="lg:hidden bg-white border-gray-300 border-solid border-2 px-1 py-2 text-gray-300"
                    onFocus={(e: any) => {
                      e.target.classList.replace(
                        "text-gray-300",
                        "text-gray-900"
                      );
                    }}
                    onBlur={(e: any) => {
                      if (e.target.value === "") {
                        e.target.classList.replace(
                          "text-gray-900",
                          "text-gray-300"
                        );
                      }
                    }}
                    required
                  >
                    <option value="" disabled hidden>
                      {placeholders.style?.placeholder ||
                        contactFormFields.style.placeholder}
                    </option>
                    {contactFormConfig.contactForm.styles.map((style) => (
                      <option key={style?.name} value={style?.name}>
                        {style?.name}
                      </option>
                    ))}
                  </Field>
                  <div className="hidden lg:flex flex-wrap gap-x-4 gap-y-2">
                    {contactFormConfig.contactForm.styles.map((style) => (
                      <label key={style?.name}>
                        <Field
                          type="radio"
                          name={contactFormFields.style.name}
                          value={style?.name}
                          className="form-radio"
                          required
                        />
                        <span className="ml-2">{style?.name}</span>
                      </label>
                    ))}
                  </div>
                </label>
              </>
            )}
            <label
              htmlFor={contactFormFields.message.name}
              className="flex flex-col col-span-2"
            >
              <span className="font-bold text-gray-700 text-sm py-1">
                {contactFormFields.message.label}
              </span>
              <Field
                name={contactFormFields.message.name}
                component="textarea"
                placeholder={
                  placeholders.message?.placeholder ||
                  contactFormFields.message.placeholder
                }
                className="border-gray-300 border-solid border-2 p-2 h-auto col-span-2"
                rows="10"
                required
              />
            </label>
            {contactFormConfig?.contactForm?.agreement && (
              <label className="col-span-2 flex">
                <Field type="checkbox" name="agreement" required />
                <span className="ml-2 font-secondary text-sm">
                  <RichText>{contactFormConfig.contactForm.agreement}</RichText>
                </span>
              </label>
            )}
            <div className="flex justify-end col-span-2">
              <button
                disabled={isSubmitting}
                type="submit"
                className="py-2 px-4 bg-yellow-500 font-semibold disabled:opacity-25"
              >
                {!isSubmitting ? "Wyślij" : "Wysyłanie..."}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
