export default async (req, res) => {
  // Destructure the email address from the request body.
  const { email } = req.body;

  const data = { email_address: email };

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

  // Check if email is on the list
  if (
    list.members
      .map((member) => member.email_address)
      .includes(data.email_address)
  ) {
    return res.status(200).json({ onList: true });
  } else {
    return res.status(200).json({ onList: false });
  }
};
