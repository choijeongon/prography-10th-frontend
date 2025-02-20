import { CardRadio } from "./card/CardRadio";
import { CardTitle } from "./card/CardTitle";

export interface ApplyInfoProps {
  applySector: string;
  setApplySector: (applySector: string) => void;
}

export const ApplyInfo = ({ applySector, setApplySector }: ApplyInfoProps) => {
  return (
    <div className="w-full bg-white flex flex-col justify-start items-start rounded-lg mt-8 p-8">
      <CardTitle
        title="지원 정보"
        description="지원하고자 하는 분야를 선택해주세요"
      />
      <div className="w-full flex flex-col justify-start items-start p-8 border border-gray-200 rounded mt-2">
        <div className="text-left font-semibold w-full">
          <p>
            지원 분야를 선택해주세요.
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col justify-start items-start mt-3 gap-4">
            <CardRadio
              value={applySector === "frontend"}
              text="프론트엔드"
              name="applySector"
              onChange={() => setApplySector("frontend")}
            />
            <CardRadio
              value={applySector === "backend"}
              text="백엔드"
              name="applySector"
              onChange={() => setApplySector("backend")}
            />
            <CardRadio
              value={applySector === "design"}
              text="디자인"
              name="applySector"
              onChange={() => setApplySector("design")}
            />
            <CardRadio
              value={applySector === "android"}
              text="안드로이드"
              name="applySector"
              onChange={() => setApplySector("android")}
            />
            <CardRadio
              value={applySector === "ios"}
              text="iOS"
              name="applySector"
              onChange={() => setApplySector("ios")}
            />
            <CardRadio
              value={applySector === "po"}
              text="Product Owner"
              name="applySector"
              onChange={() => setApplySector("po")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
