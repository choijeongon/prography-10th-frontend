import { useState } from "react";
import { PersonalInfo } from "./funnel/PersonalInfo";
import { BasicInfo } from "./funnel/BasicInfo";
import { ApplyInfo } from "./funnel/ApplyInfo";
import { Complete } from "./funnel/Complete";
import { PGButton } from "../components/button/PGButton";
import { StepCard } from "./funnel/step/StepCard";

export interface UserInfo {
  isAgree: boolean | null;
  name: string;
  email: string;
  phone: string;
  applySector: string;
}

export const FunnelView = () => {
  // const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<
    "personalInfo" | "basicInfo" | "applyInfo" | "complete"
  >("personalInfo");

  const [stepIndex, setStepIndex] = useState(1);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    isAgree: null,
    name: "",
    email: "",
    phone: "",
    applySector: "frontend",
  });

  const checkIsDisabled = () => {
    if (step === "personalInfo") {
      return userInfo.isAgree === null;
    } else if (step === "basicInfo") {
      return (
        userInfo.name === "" || userInfo.email === "" || userInfo.phone === ""
      );
    }
    return false;
  };

  const handleSetIsAgree = (isAgree: boolean | null) => {
    setUserInfo({ ...userInfo, isAgree });
  };

  const handleSetName = (name: string) => {
    setUserInfo({ ...userInfo, name });
  };

  const handleSetEmail = (email: string) => {
    setUserInfo({ ...userInfo, email });
  };

  const handleSetPhone = (phone: string) => {
    setUserInfo({ ...userInfo, phone });
  };

  const handleSetApplySector = (applySector: string) => {
    setUserInfo({ ...userInfo, applySector });
  };

  const handleNextStep = () => {
    if (step === "personalInfo") {
      setStep("basicInfo");
      setStepIndex(stepIndex + 1);
    } else if (step === "basicInfo") {
      setStep("applyInfo");
      setStepIndex(stepIndex + 1);
    } else if (step === "applyInfo") {
      setStep("complete");
      setStepIndex(stepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (step === "basicInfo") {
      setStep("personalInfo");
      setStepIndex(stepIndex - 1);
    } else if (step === "applyInfo") {
      setStep("basicInfo");
      setStepIndex(stepIndex - 1);
    }
  };

  return (
    <>
      <div className="w-full h-32 bg-white flex justify-center items-center rounded-lg">
        <h1 className="text-3xl font-bold">Prography 10기 지원서</h1>
      </div>
      <div className="w-full h-24 bg-white flex justify-center items-center rounded-lg mt-8">
        <StepCard step={stepIndex} />
      </div>
      {step === "personalInfo" && (
        <PersonalInfo
          isAgree={userInfo.isAgree}
          setIsAgree={handleSetIsAgree}
        />
      )}
      {step === "basicInfo" && (
        <BasicInfo
          name={userInfo.name}
          setName={handleSetName}
          email={userInfo.email}
          setEmail={handleSetEmail}
          phone={userInfo.phone}
          setPhone={handleSetPhone}
        />
      )}
      {step === "applyInfo" && (
        <ApplyInfo
          applySector={userInfo.applySector}
          setApplySector={handleSetApplySector}
        />
      )}
      {step === "complete" && <Complete />}
      {step !== "complete" && (
        <div className="w-full h-16 bg-white rounded-lg p-8 flex flex-row justify-between items-center mt-8">
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
            disabled={checkIsDisabled()}
            onClick={handleNextStep}
          />
        </div>
      )}
    </>
  );
};
