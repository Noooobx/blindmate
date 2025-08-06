import { handleGoogleLogin } from "../../use-cases/auth/googleAuth.js";

export const authController = {
  handleGoogleCallback: async (req, res) => {
    const googleUser = req?.session?.passport?.user;
    try {
      const user = await handleGoogleLogin(googleUser);
      console.log(user);
      //res.json({"message":"suuccess"});
      res.redirect(`${process.env.CALLBACK_URL_FRONTEND}`);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Login failed" });
    }
  },
};
