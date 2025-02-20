import { CardRadio } from "./card/CardRadio";
import { CardTitle } from "./card/CardTitle";

export interface PersonalInfoProps {
  isAgree: boolean | null;
  setIsAgree: (isAgree: boolean | null) => void;
}

export const PersonalInfo = ({ isAgree, setIsAgree }: PersonalInfoProps) => {
  return (
    <div className="w-full bg-white flex flex-col justify-start items-start rounded-lg mt-8 p-8">
      <CardTitle
        title="개인정보 수집 동의"
        description="프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다"
      />
      <div className="w-full flex flex-col justify-start items-start p-4 border border-gray-200 rounded mt-2">
        <div className="text-left font-semibold w-full">
          <p>수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내</p>
          <p>수집 항목: 이름, 이메일, 핸드폰 번호, 학교 정보 및 직장 정보</p>
          <p>보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기</p>
          <br />
          <p>
            개인정보 수집여부 동의 여부를 체크해주세요.{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col justify-start items-start mt-3 gap-4">
            <CardRadio
              value={isAgree === true}
              text="개인정보 수집 여부에 동의합니다"
              name="personalInfo"
              onChange={() => setIsAgree(true)}
            />
            <CardRadio
              value={isAgree === false}
              text="개인정보 수집 여부에 동의하지 않습니다"
              name="personalInfo"
              onChange={() => setIsAgree(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
