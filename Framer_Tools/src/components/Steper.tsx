import React from "react";
import { motion } from "framer-motion";

// Steps to upload a video on YouTube
const steps = [
  {
    title: "Step 1",
    description: "Open YouTube and sign in to your account.",
  },
  {
    title: "Step 2",
    description: "Click on the upload button in the top right corner.",
  },
  {
    title: "Step 3",
    description: "Select the video file you want to upload.",
  },
  {
    title: "Step 4",
    description: "Add a title, description, and tags to your video.",
  },
  {
    title: "Step 5",
    description: "Choose a thumbnail for your video.",
  },
  {
    title: "Step 6",
    description: "Click on the publish button to upload your video.",
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Stepper</h1>
      <div className="flex justify-center items-center space-x-4 mb-6">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`rounded-full w-16 h-16 flex items-center justify-center text-center font-semibold
                ${
                  index <= currentStep
                    ? "bg-green-500"
                    : index === currentStep
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-blue-400 cursor-pointer"
                }
                text-white`}
              onClick={() => setCurrentStep(index)}
            >
              {step.title}
            </motion.div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-10 ${
                  currentStep > index ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold mb-2">
          {steps[currentStep].title}
        </h2>
        <p className="text-gray-700">{steps[currentStep].description}</p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
