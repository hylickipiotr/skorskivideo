import { Formik, Form, Field, FormikHelpers } from "formik";
import React from "react";
import {
  useContactFormQuery,
  useSendEmailMutation,
} from "../../generated/graphql";
import { useToasts } from "react-toast-notifications";
import { mapArrayToObject } from "../../utils/mapArrayToObject";

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
          <Form className="grid grid-cols-2 gap-4">
            <Field
              type="text"
              name="firstname"
              placeholder={placeholders.firstname?.placeholder || "Imię"}
              className="border-gray-300 border-solid border-2 p-2 col-span-2 lg:col-span-1"
              required
            />
            <Field
              type="email"
              name="email"
              placeholder={placeholders.email?.placeholder || "Twój email"}
              className="border-gray-300 border-solid border-2 p-2 col-span-2 lg:col-span-1"
              required
            />
            <Field
              type="text"
              name="date"
              onFocus={(e: any) => (e.target.type = "date")}
              placeholder={
                placeholders.date?.placeholder || "Data uroczystości"
              }
              className="border-gray-300 border-solid border-2 p-2 col-span-2 lg:col-span-1"
              required
            />
            <Field
              type="text"
              name="place"
              placeholder={
                placeholders.place?.placeholder || "Miejsce uroczystości (sala)"
              }
              className="border-gray-300 border-solid border-2 p-2 col-span-2 lg:col-span-1"
              required
            />
            {contactFormConfig?.contactForm?.styles && (
              <>
                <Field
                  component="select"
                  name="style"
                  className="lg:hidden bg-white border-gray-300 border-solid border-2 p-2 col-span-2 text-gray-300"
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
                  <option value="" disabled selected hidden>
                    {placeholders.style?.placeholder || "Styl uroczystości"}
                  </option>
                  {contactFormConfig.contactForm.styles.map((style) => (
                    <option key={style?.name} value={style?.name}>
                      {style?.name}
                    </option>
                  ))}
                </Field>
                <div className="hidden lg:flex flex-wrap col-gap-4 row-gap-2 col-span-2">
                  {contactFormConfig.contactForm.styles.map((style) => (
                    <label key={style?.name}>
                      <Field
                        type="radio"
                        name="style"
                        value={style?.name}
                        className="form-radio"
                        required
                      />
                      <span className="ml-2">{style?.name}</span>
                    </label>
                  ))}
                </div>
              </>
            )}
            <Field
              name="message"
              component="textarea"
              placeholder={
                placeholders.message?.placeholder || "W czy możemy Ci pomóc?"
              }
              className="border-gray-300 border-solid border-2 p-2 h-auto col-span-2"
              rows="10"
              required
            />
            {contactFormConfig?.contactForm?.agreement && (
              <label className="col-span-2">
                <Field type="checkbox" name="agreement" required />
                <span className="ml-1 font-secondary text-sm">
                  {contactFormConfig.contactForm.agreement}
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
