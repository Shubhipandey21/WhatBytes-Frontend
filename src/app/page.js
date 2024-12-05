import SkillWiseAnalysis from "../components/SkillWiseAnalysis";
import QuestionAnalysis from "../components/QuestionAnalysis";
import ComparisonGraph from "../components/ComparisonGraph";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import SkillTestCard from "../components/SkillTestCard";

export default function Home() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row max-w-full mx-auto bg-white shadow rounded-lg p-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow mx-3">
          <div className="grid grid-cols-1 gap-8">
            <SkillTestCard />
            <div>
              <ComparisonGraph />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/4 space-y-6 mt-6 lg:mt-0">
          <SkillWiseAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}

