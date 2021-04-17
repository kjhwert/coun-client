import Profile1 from "../assets/img/profile1.png";
import Profile2 from "../assets/img/profile2.jpg";
import Profile3 from "../assets/img/profile3.jpg";
import Profile4 from "../assets/img/profile4.jpg";
import Profile5 from "../assets/img/profile5.jpg";
import Profile6 from "../assets/img/profile6.jpg";

export interface Profile {
  id: number;
  name: string;
  img: string;
  content: string;
}

export type Profiles = Array<Profile>;

export const profiles = [
  {
    id: 1,
    name: "김여환 선생님",
    img: Profile1,
    content: `
            <div class="text-12 flex flex-col p-2 w-full">
                <b>학위</b>
                <p class="mt-1 mb-2">
                    호서대학교 연합신학대학원 “목회상담학” 박사 (Ph.D.)<br>
                    호서대학교 연합신학대학원 “목회상담학” 석사 (Th.M.)<br>
                    광운대학교 정보복지대학원 “심리치료학” 석사
                </p>
                <b>경력</b>
                <p class="mt-1 mb-2">
                    호서대학교 연합신학대학원 목회상담학과 임상패널교수<br>
                    국제임상목회대학원 지도교수<br>
                    화성시 범죄피해자지원협의회위원 위촉<br>
                    서울지역 이혼 조정위원 위촉 제2004-026<br>
                    경기노인학대예방센타 사례판정위원<br>
                    한국여성의전화 가정폭력상담센타 소장<br>
                    정신분석상담학회 이사<br>
                    분당 샘물교회 담임목사 역임<br>
                    동탄 행복이가득한교회 담임목사 역임<br>
                    동탄빛교회 공동목회<br>
                    Chaplain healing counseling Mission center 원장<br>
                    동탄가정심리상담소 센터장
                </p>
                <b>저서</b>
                <p class="mt-1 mb-2">
                    「삐딱한 성장/결혼 바로 세우기」하나의학사<br>
                    「상담 심리학」양성사
                </p>
                <b>논문</b>
                <p class="mt-1 mb-2">
                    박사논문 “긴장에너지의 창조적 역학을 통한 자기성장에 관한 연구”<br>
                    석사논문 “가정폭력에 관한 정신분석학적 연구”<br>
                    『정신분석과 상담』학회지에 실린 논문<br>
                    “긴장방출에 관한 정신분석학적 연구”- 프로이트 관점<br>
                    “긴장방출에 관한 정신분석학적 연구”- 멜라니 클라인 관점<br>
                    “긴장방출에 관한 정신분석학적 연구”- 위니캇 관점<br>
                    “긴장방출에 관한 정신분석학적 연구”- 페어베언 관점<br>
                    “긴장방출에 관한 정신분석학적 연구”- 하인즈 코핫 관점
                </p>
            </div>
        `,
  },
  {
    id: 2,
    name: "서민지 선생님",
    img: Profile2,
    content: `
            <div class="text-12 flex flex-col p-2 w-full">
                <b>학위</b>
                <p class="mt-1 mb-2">
                    호서대학교 일반대학원 신학과 정신분석전공 박사수료<br>
                    호서대학교 연합신학대학원 목회상담학 석사(Th.M.)
                </p>
                <b>경력</b>
                <p class="mt-1 mb-2">
                정신분석아카데미 수원 전문독서클럽 패널교수<br>
                부부가족상담 부모교육협회 청소년 상담국장<br>
                동탄가정심리상담소 부모교육 워크샵 강사<br>
                기업체(KT) 지정 임직원 가족상담사<br>
                삼성노블카운티 미술치료 자격증반 강사
                </p>
                <b>자격증</b>
                <p class="mt-1 mb-2">
                가족상담사 1급 자격증<br>
                리더십지도사 자격증
                </p>
                <b>논문</b>
                <p class="mt-1 mb-2">
                석사논문 “불안의 선순환에 관한 연구” (2013)<br>
                학술논문 "믿음의 공간으로서의 실재계의 관한 연구" (2019)
                </p>
            </div>
        `,
  },
  {
    id: 3,
    name: "노윤정 선생님",
    img: Profile3,
    content: `
            <div class="text-12 flex flex-col p-2 w-full">
                <b>학위</b>
                <p class="mt-1 mb-2">
                호서대학교 일반대학원 신학과 “목회상담학/정신분석” 박사수료<br>
                호서대학교 연합신학대학원 “목회상담학” 석사 (Th.M.)<br>
                영남대학교 가정관리학과 졸업
                </p>
                <b>경력</b>
                <p class="mt-1 mb-2">
                중등정교사 2급자격증취득<br>
                경산여고, 점촌고등학교 근무<br>
                가족상담사 1급자격증취득<br>
                동탄 부모교육프로그램 강사
                </p>
                <b>논문</b>
                <p class="mt-1 mb-2">
                『성서와 정신분석』 학회지에 실린 논문<br>
                “기억과 억압에 관한 정신분석과 신경과학적 접근”<br>
                “증상의 의미에 관한 정신분석적 고찰”<br>
                “구조에 대한 정신분석적 고찰”<br>
                “라깡의 언어와 무의식”
                </p>
            </div>
        `,
  },
  {
    id: 4,
    name: "김옥환 선생님",
    img: Profile4,
    content: `
            <div class="text-12 flex flex-col p-2 w-full">
                <b>학위</b>
                <p class="mt-1 mb-2">
                호서대학교 일반대학원 “목회상담학/정신분석” 박사 (Ph.D.)<br>
                호서대학교 연합신학전문대학원 “목회상담학/정신분석” 석사 (M.T.S)
                </p>
                <b>경력</b>
                <p class="mt-1 mb-2">
                수원가정심리상담소 센터장<br>
                P.E.T 과정 · 의사소통 기술훈련<br>
                미술치료교육사<br>
                인간관계와 자기표현<br>
                가정폭력·성폭력 전문 상담<br>
                이음부모 교육 지도자<br>
                솔리언 또래 상담 지도자
                </p>
                <b>자격증</b>
                <p class="mt-1 mb-2">
                정신분석가<br>
                심리상담사 1급<br>
                평생교육사 2급<br>
                사회복지사 2급<br>
                가정폭력·성폭력 전문 상담사<br>
                미술치료교육사<br>
                리더십지도자<br>
                이음부모 교육 지도자<br>
                솔리언 또래 상담 지도자
                </p>
                <b>논문</b>
                <p class="mt-1 mb-2">
                『 The Psychoanalytic Biblical Studies 』 학회지에 실린 논문<br>
                표상에 대한 정신분석학적 고찰<br>
                표상에 대한 정신분석학적 연구<br>
                강박증의 치료적 변화에 대한 정신분석학적 고찰<br>
                시기심에 대한 목회상담학적 고찰<br>
                영성과 정신분석이 표상에 미치는 영향
                </p>
            </div>
        `,
  },
  {
    id: 5,
    name: "김현경 선생님",
    img: Profile5,
    content: `
            <div class="text-12 flex flex-col p-2 w-full">
                <b>학위</b>
                <p class="mt-1 mb-2">
                호서대학교 일반대학원 “목회상담학” 박사 재학 중 (Ph.D.)<br>
                호서대학교 연합신학전문대학원 “목회상담학” 석사 졸업 (MTS)<br>
                충남대학교 일반대학원 언어병리학과 석사 수료<br>
                우송대학교 언어치료학과
                </p>
                <b>경력</b>
                <p class="mt-1 mb-2">
                현 호서대학교 일반대학원 목회상담학과 독서클럽 패널교수<br>
                현 동탄가정심리상담소 언어치료사 · 정신분석상담사<br>
                현 이화아동발달교육원 언어치료사<br>
                전 대덕구장애인종합복지관 언어치료사<br>
                한국언어재활사협회 정회원<br>
                보건복지부 언어재활사
                </p>
                <b>논문</b>
                <p class="mt-1 mb-2">
                『성서와 정신분석』 학회지에 실린 논문<br>
                “공격성에 대한 정신분석학적 고찰”<br>
                “애도에 대한 정신분석학적 고찰”
                </p>
            </div>
        `,
  },
  {
    id: 6,
    name: "김성하 선생님",
    img: Profile6,
    content: `
            <div class="text-12 flex flex-col p-2 w-full">
                <b>학위</b>
                <p class="mt-1 mb-2">
                한신대학교 정신분석대학원 석사<br>
                한양대학교 상담심리학과 졸업
                </p>
                <b>경력</b>
                <p class="mt-1 mb-2">
                현, 동탄가정심리상담소 놀이치료사<br>
                점토치료사<br>
                놀이치료사
                </p>
                <b>자격증</b>
                <p class="mt-1 mb-2">
                사회복지사 2급
                </p>
            </div>
        `,
  },
];
