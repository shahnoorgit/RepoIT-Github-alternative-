export async function ensureSAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(process.env.CLIENT_BASE_URL + "/login");
  }
}
