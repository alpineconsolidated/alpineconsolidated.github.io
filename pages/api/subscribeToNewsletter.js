const md5 = require("md5");
const fetch = require("isomorphic-fetch");

const dataCenter = process.env.MAILCHIMP_DATA_CENTER;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
const apiKey = process.env.MAILCHIMP_API_KEY;

export default async function subscribeToNewsletter(req, res) {
  const email = req.body.email;
  const emailHash = md5(email.toLowerCase());
  const subscriber = await checkNewsletterSubscriber(emailHash);
  if (subscriber.status === "subscribed") {
    return res.send({ success: true });
  }

  const response = await postNewsletterSubscriber(req.body);

  response.status === "subscribed"
    ? res.send({ success: true })
    : res.send({ success: false });
}

const checkNewsletterSubscriber = async email => {
  try {
    const res = await fetch(
      `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/${email}`,
      {
        method: "GET",
        headers: {
          Authorization: apiKey
        }
      }
    );
    const json = res.json();
    return json;
  } catch (err) {
    return err;
  }
};

const postNewsletterSubscriber = async data => {
  try {
    const res = await fetch(
      `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_address: data.email,
          status: "subscribed"
        }),
        json: true
      }
    );
    const json = await res.json();
    return json;
  } catch (err) {
    return err;
  }
};
