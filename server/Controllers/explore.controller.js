export const exploreRepo = async (req, res) => {
  const { language } = req.params;
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=30`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json({ repos: data.items });
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};
