import Logo from "../assets/images/logo.png";

export const HomeView = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-center h-screen">
        <img src={Logo} alt="logo" />
        <h1 className="text-3xl font-bold mt-6">
          안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Prography입니다.
        </h1>
        <h3 className="text-2xl font-bold mt-12 text-blue-500">
          드디어 Prography 10기 모집이 시작되었습니다.
        </h3>
        <p className="text-xl mt-4">
          Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring){" "}
          <br />총 6개의 파트를 모집합니다.
        </p>
        <p className="text-lg mt-8 leading-loose">
          ✓ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,
          <br />
          ✓ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,
          <br />
          ✓ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,
          <br />
        </p>
        <h3 className="text-3xl font-bold mt-12 text-blue-500">
          "프로답게, 재미있게"
        </h3>
        <p className="text-xl mt-4">
          재미있는 작당을 함께 만들어갈 10기에 합류하세요.
        </p>

        <p className="text-xl mt-12">
          📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요 👇🏻
        </p>

        <a
          className="text-blue-500 mt-8 font-bold"
          href="https://prography-admin.notion.site/apply-prography10"
        >
          프로그라피 10기 모집 자세히 알아보기
        </a>
        <a
          className="text-blue-500 mt-4 font-bold"
          href="https://prography.org"
        >
          🏡 공식 홈페이지
        </a>
        <a
          className="text-blue-500 mt-4 font-bold"
          href="https://www.instagram.com/prography_official"
        >
          🔗 인스타그램
        </a>
      </div>
    </>
  );
};
