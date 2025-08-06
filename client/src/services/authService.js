const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const handleGoogleAuth = () => {
  if (!BACKEND_URL) {
    console.error(
      "VITE_BACKEND_URL is not defined in your environment variables"
    );
  }
  window.location.href = `${BACKEND_URL}/auth/google`;
};
 