/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const client = require('mailchimp-marketing');
function getRequestParams(email, subscribedTo) {
  // get env variables
  const API_KEY = process.env.MAIL_API_KEY;
  const LIST_ID = process.env.MAIL_LIST_ID;
  // mailchimp datacenter - mailchimp api keys always look like this:
  // fe4f064432e4684878063s83121e4971-us6
  // We need the us6 part
  const DATACENTER = process.env.MAIL_API_KEY.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  client.setConfig({
    apiKey: process.env.MAIL_API_KEY,
    server: process.env.MAIL_SERVER_PREFIX,
  });

  // Add aditional params here. See full list of available params:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      SUBTO: subscribedTo,
    },
  };

  // Api key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email, subscribedTo } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Forgot to add your email?',
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email, subscribedTo);

    const response = await axios.post(url, data, { headers });

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error:
        "Oops, something went wrong... Send us an email at service@dystopi.com and we'll add you to the list.",
    });

    // Report error to Sentry or whatever
  }
};
