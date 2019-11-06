const md5 = require("md5");
const fetch = require("isomorphic-fetch");

const dataCenter = process.env.MAILCHIMP_DATA_CENTER;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
const apiKey = process.env.MAILCHIMP_API_KEY;

const dataCenter_TEC = process.env.MAILCHIMP_DATA_CENTER_TEC;
const audienceId_TEC = process.env.MAILCHIMP_AUDIENCE_ID_TEC;
const apiKey_TEC = process.env.MAILCHIMP_API_KEY_TEC;

export default async function subscribeToNewsletter(req, res) {
  const email = req.body.email;
  const emailHash = md5(email.toLowerCase());
  const route = req.body.route;

  const subscriber = await checkNewsletterSubscriber(emailHash, route);
  if (subscriber.status === "subscribed") {
    return res.send({ success: true });
  }

  const response = await postNewsletterSubscriber(req.body);

  response.status === "subscribed"
    ? res.send({ success: true })
    : res.send({ success: false });
}

const checkNewsletterSubscriber = async (email, route) => {
  try {
    const res = await fetch(
      `https://${
        route === "alpine" ? dataCenter : dataCenter_TEC
      }.api.mailchimp.com/3.0/lists/${
        route === "alpine" ? audienceId : audienceId_TEC
      }/members/${email}`,
      {
        method: "GET",
        headers: {
          Authorization: route === "alpine" ? apiKey : apiKey_TEC
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
      `https://${
        data.route === "alpine" ? dataCenter : dataCenter_TEC
      }.api.mailchimp.com/3.0/lists/${
        data.route === "alpine" ? audienceId : audienceId_TEC
      }/members`,
      {
        method: "POST",
        headers: {
          Authorization: data.route === "alpine" ? apiKey : apiKey_TEC,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_address: data.email,
          status: "subscribed",
          tags: [
            `${
              data.route === "alpine"
                ? "www.alpineconsolidated.com"
                : "alpineTEC.vc"
            }`
          ]
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
