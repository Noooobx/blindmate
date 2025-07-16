export const registerUser = (req, res) => {

  console.log(req.body.email)
  const { email } = req.body;
  res.json({ message: `User registered with email: ${email}` });
};
