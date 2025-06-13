import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <div className="text-green-600 font-bold text-3xl mb-4">
        Payment Successful 🎉
      </div>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Success;