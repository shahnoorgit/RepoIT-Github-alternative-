import User from "../models/user.model.js";
export const userProfileandRepo = async (req, res) => {
  const { username } = req.params;
  try {
    const Userresponse = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const user = await Userresponse.json();
    const repoRes = await fetch(user.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = await repoRes.json();
    res.status(200).json({ user, repos });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

export const LikedProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findById(req.user._id.toString());
    console.log(user, "auth user");
    const Likeuser = await User.findOne({ username });

    if (!Likeuser) {
      return res.status(404).json({ error: "user is not RepoIT Member" });
    }

    if (user.likedProfiles.includes(Likeuser.username)) {
      return res.status(400).json({ error: "User already liked" });
    }
    Likeuser.likedby.push({
      username: user.username,
      avatarUrl: user.avatarUrl,
      likeddate: Date.now(),
    });
    user.likedProfiles.push(Likeuser.username);
    //await Likeuser.save();
    //await user.save();
    await Promise.all([Likeuser.save(), user.save()]);
    res.status(200).json({ message: "User Liked!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLikes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id.toString());
    res.status(200).json({ likedby: user.likedby });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
