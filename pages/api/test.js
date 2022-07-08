const client = require('mailchimp-marketing');

client.setConfig({
  apiKey: process.env.MAIL_API_KEY,
  server: process.env.MAIL_SERVER_PREFIX,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = await client.lists.getListMembersInfo(
      process.env.MAIL_LIST_ID
    );
    res.status(200).json({ listMembers: response });
  }
  if (req.method === 'PUT') {
    const response = await client.lists.setListMember(
      process.env.MAIL_LIST_ID,
      'subscriber_hash',
      { email_address: 'Marcel81@gmail.com', status_if_new: 'pending' }
    );
    console.log(response);
  }
}

/**
 *
 * SUBSCRIBER_HASH === EMAIL / MD5 HASHED EMAIL / CONTACT ID
 *
 *
 */
