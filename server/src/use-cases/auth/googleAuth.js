import { userRepository } from "../../infrastructure/database/userRepository.js";

export const handleGoogleLogin = async (googleUser) => {
  // 1. Check if user already exists by Google ID
  let user = await userRepository.findByGoogleId(googleUser.id);

  if (user) {
    return user; //Existing user → LOGIN
  } else {
    // 2. Extract needed info from Google profile
    const { displayName, id } = googleUser;
    const userEmail = googleUser?.emails[0]?.value;

    // 3. Create new user in DB → SIGNUP
    user = await userRepository.create({
      email: userEmail,
      displayName: displayName,
      googleId: id,
    });

    return user;
  }
};
