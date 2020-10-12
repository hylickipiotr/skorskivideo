module.exports = {
  definition: `
    input Agreement {
      value: Boolean!
      content: String!
    }

    input EmailOptions {
      firstname: String!
      email: String!
      date: String!
      place: String!
      style: String!
      message: String!
      agreement: Agreement!
    }
`,
  mutation: `
    sendEmail(options: EmailOptions!): Boolean!
`,
  resolver: {
    Mutation: {
      sendEmail: {
        resolverOf: "plugins::email.Email.send",
        resolver: (obj, { options }, { context }) => {
          return new Promise(async (resolve, reject) => {
            try {
              const { email, body, subject } = await strapi.services[
                "contact-form"
              ].find();
              const emailTemplate = {
                subject: subject,
                text: body,
                html: body,
              };
              await strapi.plugins["email"].services.email.sendTemplatedEmail(
                {
                  to: email,
                  from: email,
                  replyTo: options.email,
                },
                emailTemplate,
                {
                  options,
                }
              );
              resolve(true);
            } catch (err) {
              console.log(err);
              resolve(false);
            }
          });
        },
      },
    },
  },
};
