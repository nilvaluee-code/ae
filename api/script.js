export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.policeroleplay.community/v1/server",
      {
        headers: {
          Authorization: process.env.ERLC_API_KEY
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch ER:LC data" });
  }
}
