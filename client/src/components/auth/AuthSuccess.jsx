// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthSuccess = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://blindmate.onrender.com/auth/me", {
//       credentials: "include",
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Not logged in");
//         return res.json();
//       })
//       .then((data) => {
//         console.log("Logged-in user", data);
//         // Optionally store user data in context/local storage here
//         navigate("/dashboard"); // or home page
//       })
//       .catch(() => {
//         navigate("/login"); // or show error
//       });
//   }, [navigate]);

//   return <p>Authenticating...</p>;
// };

// export default AuthSuccess;
