const sgMail = require("@sendgrid/mail");

export default async function sendEmail(req, res) {
  const formData = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "y3times@gmail.com",
    from: "no-reply@e-spres-oh.com",
    subject: "New mail from contact form on -- www.placeholder.com --",
    text: `You are receiving this email because somebody sent a message through the contact form on -- www.placeholder.com --
      Name: ${formData.name} Phone:${formData.phone} Email: ${formData.email} Message: ${formData.message}`,
    html: `<p>You are receiving this email because somebody sent a message through the contact form on -- www.placeholder.com --</p>
      <h3>Name: ${formData.name}</h3><p>Phone: ${formData.phone}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ success: true, msg: "Message sent successfully." });
  } catch (error) {
    console.log("ERROR", error);
    res
      .status(400)
      .send({ success: false, msg: "Message not sent. Please try again." });
  }
}