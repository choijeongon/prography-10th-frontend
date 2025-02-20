import { CardTitle } from "./card/CardTitle";
import { CardInput } from "./card/CardInput";

export interface BasicInfoProps {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
}

export const BasicInfo = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}: BasicInfoProps) => {
  return (
    <div className="w-full bg-white flex flex-col justify-start items-start rounded-lg mt-8 p-8 gap-8">
      <CardTitle
        title="기본 정보"
        description="연락 가능한 정보를 입력해주세요"
      />
      <CardInput
        inputType="text"
        id="name"
        label="성함을 입력해주세요"
        placeholder="예시 : 김프로그라피"
        isRequired={true}
        value={name}
        onChange={setName}
      />
      <CardInput
        inputType="email"
        id="email"
        label="이메일 주소를 입력해주세요"
        placeholder="예시 : example@prography.kr"
        isRequired={true}
        value={email}
        onChange={setEmail}
      />
      <CardInput
        inputType="text"
        id="phone"
        label="휴대폰 번호를 입력해주세요"
        placeholder="예시 : 010-1234-5678"
        isRequired={true}
        value={phone}
        onChange={setPhone}
      />
    </div>
  );
};
