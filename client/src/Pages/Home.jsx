import PatientCard from "../components/PatientCard";
import CaretakerCard from "../components/CaretakerCard";

const Home = () => {
  return (
    <div className="w-full">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex-col items-center justify-center p-6">
        <div
          className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl 
        flex items-center justify-center mx-auto mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart w-10 h-10 text-white"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-[700] text-center">
            Welcome to MediCare Companion
          </h1>
          <p className="text-[20px] font-[400] text-[#64748b] text-center">
            Your trusted partner in medication management. Choose your role to
            get started with personalized features.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PatientCard />
          <CaretakerCard />
        </div>
        <p className="text-sm text-center mt-9 text-muted-foreground text-[#64748b]">
          You can switch between roles anytime after setup
        </p>
      </div>
    </div>
  );
};

export default Home;
