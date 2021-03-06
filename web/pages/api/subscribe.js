export default async (req, res) => {
  // Fetch the environment variables.
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const DATACENTER = API_KEY.split("-")[1];

  // Fetch the members list
  const getList = await fetch(
    `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    { headers: { Authorization: `apikey ${API_KEY}` }, method: "GET" }
  );
  const list = await getList.json();

  // Destructure the email address from the request body.
  const { email } = req.body;

  if (!email) {
    // Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // The status of 'subscribed' is equivalent to a double opt-in.
    const data = {
      email_address: email,
      status: "subscribed",
    };

    // Check Email isn't already subscribed
    if (
      list.members
        .map((member) => member.email_address)
        .includes(data.email_address)
    ) {
      return res.status(400).json({
        error: `This email address has already been subscribed`,
      });
    }

    // Send a POST request to Mailchimp.
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    // Swallow any errors from Mailchimp and return a better error message.
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot us an email at veggiessimorecipes@gmail.com and we'll add you to the list.`,
      });
    }

    // If its passed everything above, it was successful
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
