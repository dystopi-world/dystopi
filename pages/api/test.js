const client = require('mailchimp-marketing');

client.setConfig({
  apiKey: process.env.MAIL_API_KEY,
  server: process.env.MAIL_SERVER_PREFIX,
});

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Forgot to add your email?',
    });
  }
  if (req.method === 'PUT') {
    try {
      const response = await client.lists.setListMember(
        process.env.MAIL_LIST_ID,
        req.body.email,
        req.body.type === 'newsletter'
          ? {
              email_address: req.body.email,
              status: 'subscribed',
              merge_fields: {
                NEWSLETTER: 'subscribed',
              },
            }
          : {
              email_address: req.body.email,
              status: 'subscribed',
              merge_fields: {
                PRESALE: 'subscribed',
              },
            }
      );
      return res.status(201).json({ error: null });
    } catch (error) {
      return res.status(400).json({
        error:
          "Oops, something went wrong... Send us an email at service@dystopi.com and we'll add you to the list.",
      });
    }
  }
}

/**
 *
 * SUBSCRIBER_HASH === EMAIL / MD5 HASHED EMAIL / CONTACT ID
 *
 *
 */
