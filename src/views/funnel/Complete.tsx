import Lottie from "lottie-react";
import checkLottie from "../../assets/lottie/check-lottie.json";
import { PGButton } from "../../components/button/PGButton";
import { useNavigate } from "react-router";

export const Complete = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full bg-white flex flex-col justify-start items-center rounded-lg mt-8 p-8 gap-4">
      <div style={{ width: 100, height: 100 }}>
        <Lottie animationData={checkLottie} loop={true} />
      </div>
      <h1 className="text-2xl font-bold">지원이 완료되었습니다!</h1>
      <p className="text-gray-500 text-center mb-4">
        프로그라피 10기에 지원해주셔서 감사합니다. <br />
        서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
      </p>
      <PGButton
        label="홈으로 돌아가기"
        onClick={handleClickHome}
        width="180px"
        height="50px"
        backgroundColor="oklch(0.623 0.214 259.815)"
        fontColor="white"
        disabled={false}
      />
    </div>
  );
};
