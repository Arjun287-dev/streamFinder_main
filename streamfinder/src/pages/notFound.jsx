import { useState } from "react";
import FuzzyText from "../components/notFoundText";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // Define hover behavior states
  const [hoverIntensity] = useState(1.0); // default value
  const [enableHover] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center text-black">
        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={0.2}
          enableHover={enableHover}
            fontSize={150}
        >
          404
        </FuzzyText>
        <div>
        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={0.2}
          enableHover={enableHover}
          fontSize={80}
        
        >
          Page Not Found
        </FuzzyText>
        <div>

        <FuzzyText
          baseIntensity={0.1}
          hoverIntensity={0.2}
          enableHover={enableHover}
          fontSize={50}
          onClick={()=> navigate("/") }
        color="grey"
        >
          Go to Home
        </FuzzyText>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
