const md5 = require("md5");
const fetch = require("isomorphic-fetch");

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
      `https://us3.api.mailchimp.com/3.0/lists/9e35cf42df/members/${email}`,
      {
        method: "GET",
        headers: {
          Authorization: "apiKey 9c5ab3db130c9919bc70ba07bf146644-us3"
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
      `https://us3.api.mailchimp.com/3.0/lists/9e35cf42df/members`,
      {
        method: "POST",
        headers: {
          Authorization: "apiKey 9c5ab3db130c9919bc70ba07bf146644-us3",
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
