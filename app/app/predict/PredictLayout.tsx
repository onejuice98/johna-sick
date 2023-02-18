import React from "react";

const PredictLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>My Predict</h2>
      {children}
    </div>
  );
};

export default PredictLayout;
