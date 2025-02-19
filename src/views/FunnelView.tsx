import { useState } from "react";
import { PersonalInfo } from "./funnel/PersonalInfo";
import { BasicInfo } from "./funnel/BasicInfo";
import { ApplyInfo } from "./funnel/ApplyInfo";
import { Complete } from "./funnel/Complete";
import { PGButton } from "../components/button/PGButton";

export const FunnelView = () => {
  // const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<
    "personalInfo" | "basicInfo" | "applyInfo" | "complete"
  >("personalInfo");

  const handleNextStep = () => {
    if (step === "personalInfo") {
      setStep("basicInfo");
    } else if (step === "basicInfo") {
      setStep("applyInfo");
    } else if (step === "applyInfo") {
      setStep("complete");
    }
  };

  const handlePrevStep = () => {
    if (step === "basicInfo") {
      setStep("personalInfo");
    } else if (step === "applyInfo") {
      setStep("basicInfo");
    }
  };

  return (
    <>
      {step === "personalInfo" && <PersonalInfo />}
      {step === "basicInfo" && <BasicInfo />}
      {step === "applyInfo" && <ApplyInfo />}
      {step === "complete" && <Complete />}
      {step !== "complete" && (
        <div className="w-full h-16 bg-white rounded-lg p-8 flex flex-row justify-between items-center">
          <PGButton
            label="뒤로"
            width="86px"
            height="36px"
            backgroundColor={step === "personalInfo" ? "#6b7073" : "#4696ff"}
            fontColor="white"
            disabled={step === "personalInfo"}
            onClick={handlePrevStep}
          />
          <PGButton
            label={step === "applyInfo" ? "제출하기" : "다음"}
            width="86px"
            height="36px"
            backgroundColor="#4696ff"
            fontColor="white"
            onClick={handleNextStep}
          />
        </div>
      )}
    </>
  );
};
