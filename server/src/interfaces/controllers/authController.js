import { handleGoogleLogin } from "../../use-cases/auth/googleAuth.js";

export const authController = {
  handleGoogleCallback: async (req, res) => {
    const googleUser = req?.session?.passport?.user;
    try {
      const user = await handleGoogleLogin(googleUser);
      //res.json({"message":"suuccess"});
      res.redirect(`https://blindmate-bnef.vercel.app/auth/success`);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Login failed" });
    }
  },
};
