import Process1 from "../assets/icon/process1.png";
import Process2 from "../assets/icon/process2.png";
import Process3 from "../assets/icon/process3.png";
import Process4 from "../assets/icon/process4.png";

export interface Process {
  title: string;
  img: string;
  content: string;
}

export type Processes = Array<Process>;

export const processes: Processes = [
  {
    title: "초기면담",
    img: Process1,
    content:
      "처음오시는 분들의 필수과정으로 사전 면담과정의 초기 상담을 하게 됩니다.",
  },
  {
    title: "심리검사",
    img: Process2,
    content: "상담자가 필요하다고 판단할 때에는 심리검사를 실시할 수 있습니다.",
  },
  {
    title: "심리치료",
    img: Process3,
    content:
      "고백에 대한 공감과 피드백을 통한 회복, 치료, 변화의 과정으로 나아 갑니다.",
  },
  {
    title: "상담종결",
    img: Process4,
    content:
      "만족할만한 시점이 오면 종결 계획을 세우고 일정기간 상담후 종결하게 됩니다.",
  },
];
