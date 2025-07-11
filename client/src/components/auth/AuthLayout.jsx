import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/Loading.json";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50 px-6 py-12 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background animation (optional) */}
      {/* <Player
        autoplay
        loop
        src={animation}
        className="absolute inset-0 w-full h-full z-0 opacity-10 pointer-events-none"
      /> */}

      <div className="max-w-md w-full bg-white bg-opacity-90 backdrop-blur-md shadow-xl rounded-3xl px-8 py-10 sm:px-10 relative z-10">
        <h2 className="text-3xl  font-semibold text-center text-blue-700 mb-10">
          {title}
        </h2>

        {subtitle && (
          <p className="text-center text-gray-500 mb-8">{subtitle}</p>
        )}

        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
