import React, { useState } from "react";

export default function AboutMe() {
  const [isEnglish, setIsEnglish] = useState(true); 

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="md:text-4xl text-3xl font-bold text-gray-800 dark:text-gray-200">
          About Me
        </h1>
        <button
          onClick={toggleLanguage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold md:py-2 md:px-4 rounded">
          {isEnglish ? "한국어로 보기" : "Read in English"}
        </button>
      </div>

      {/* About Me Content */}
      <div className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
        {isEnglish ? (
          <div>
            <p>
              Hi, I’m 쇼크룩, and I’m passionate about building meaningful,
              user-friendly web applications! My journey into web development
              has been a blend of creativity, curiosity, and perseverance. I
              consider myself a lifelong learner, constantly pushing myself to
              learn new technologies, improve my craft, and build projects that
              I’m proud of.
            </p>
            <h2 className="text-2xl font-semibold mt-6">My Story</h2>
            <p>
              It all started with a passion for problem-solving and creating
              something out of nothing. Originally, my path was a little
              unconventional—I pursued a degree in Business Administration at
              Chonnam National University, where I honed my understanding of
              management, strategy, and decision-making. But my love for
              technology was always in the background. I found myself drawn to
              the world of code and design, where I could combine logic with
              creativity.
              <span className="py-2"></span>
              After teaching English in Uzbekistan and Korea, I realized I
              wanted to focus on building the future of the web. I took a deep
              dive into frontend development, where I began learning HTML, CSS,
              JavaScript, and eventually frameworks like React and Next.js. Web
              development became my medium to bring ideas to life, and I ve
              never looked back.
              <span className="py-2"></span>
              Every day is a new opportunity for me to learn something exciting,
              whether it s enhancing a user interface or diving deep into
              backend technologies like Node.js and MongoDB. I enjoy turning
              complex problems into simple, intuitive solutions. I am especially
              passionate about creating interactive, visually pleasing, and
              highly responsive applications.
            </p>
            <h2 className="text-2xl font-semibold mt-6">Skills & Expertise</h2>
            <p>
              Over the past two years, I’ve been consistently building my
              knowledge and skills in web development. Here’s a snapshot of the
              tools and technologies I’ve been working with:
            </p>
            <ul className="list-disc list-inside">
              <li>Frontend: React, Next.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express, MongoDB</li>
              <li>State Management: Redux, React Query</li>
              <li>Design: Figma for UI/UX</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6">What Drives Me</h2>
            <p>
              I love problem-solving, continuous learning, and collaborating
              with the developer community. Every day, I dedicate 4+ hours to
              improving my skills, whether it’s frontend design, backend
              solutions, or exploring new frameworks.
            </p>
            <h2 className="text-2xl font-semibold mt-6">Beyond Development</h2>
            <p>
              When I’m not coding, you’ll find me creating content on my YouTube
              channel with over 10,000 subscribers, exploring sustainable
              projects like animal snacks made from unused fruits, and
              connecting with cultures through languages like Korean, English,
              and Uzbek.
            </p>
            <h2 className="text-2xl font-semibold mt-6">My Ambitions</h2>
            <p>
              I’m excited to keep growing as a developer and blend my technical
              and business knowledge to create meaningful, impactful projects.
              I’m open to new opportunities and collaborations, so feel free to
              reach out!
            </p>
          </div>
        ) : (
          <div>
            <p>
              안녕하세요, 저는 쇼크룩이고, 의미 있고 사용자 친화적인 웹
              애플리케이션을 만드는 것에 열정이 있습니다! 제 웹 개발 여정은
              창의력, 호기심, 그리고 끈기로 가득 차 있었습니다. 저는 항상 새로운
              기술을 배우고, 제 기술을 향상시키고, 자랑스러운 프로젝트를 만드는
              데 몰두하고 있습니다.
            </p>
            <h2 className="text-2xl font-semibold mt-6">저의 이야기</h2>
            <p>
              모든 것은 문제 해결과 무에서 유를 창조하는 것에 대한 열정에서
              시작되었습니다. 원래 제 길은 조금 비전통적이었습니다. 저는
              전남대학교에서 경영학을 전공하며 관리, 전략, 의사결정에 대한
              이해를 키웠습니다. 하지만 제 뒤에는 항상 기술에 대한 사랑이
              있었습니다. 저는 논리와 창의성을 결합할 수 있는 코드와 디자인의
              세계에 끌리게 되었습니다.
              <div className="py-2"></div>
              우즈베키스탄과 한국에서 영어를 가르친 후, 저는 웹의 미래를 만드는
              데 집중하고 싶다는 것을 깨달았습니다. HTML, CSS, JavaScript를
              배우고 결국 React와 Next.js와 같은 프레임워크로 깊이 파고들며
              프론트엔드 개발에 뛰어들었습니다. 웹 개발은 제 아이디어를 실현할
              수 있는 매개체가 되었고, 저는 결코 뒤돌아보지 않았습니다.
              <div className="py-2"></div>
              매일매일은 저에게 흥미로운 무언가를 배울 수 있는 새로운
              기회입니다. 사용자 인터페이스를 개선하거나 Node.js와 MongoDB와
              같은 백엔드 기술에 깊이 들어가는 것까지 다양합니다. 저는 복잡한
              문제를 간단하고 직관적인 솔루션으로 바꾸는 것을 즐깁니다. 특히
              상호작용이 가능하고 시각적으로 매력적이며 매우 반응성이 뛰어난
              애플리케이션을 만드는 것에 열정을 가지고 있습니다.
            </p>

            <h2 className="text-2xl font-semibold mt-6">기술 및 전문 지식</h2>
            <p>
              지난 2년 동안, 저는 웹 개발에서 일관되게 지식과 기술을
              쌓아왔습니다. 제가 다뤄온 도구와 기술을 소개하자면 다음과
              같습니다:
            </p>
            <ul className="list-disc list-inside">
              <li>프론트엔드: React, Next.js, Tailwind CSS</li>
              <li>백엔드: Node.js, Express, MongoDB</li>
              <li>상태 관리: Redux, React Query</li>
              <li>디자인: Figma로 UI/UX 디자인</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6">저를 움직이는 것들</h2>
            <p>
              문제 해결을 사랑하고, 지속적으로 배우며 개발자 커뮤니티와 협업하는
              것을 즐깁니다. 매일 저는 4시간 이상을 제 기술을 향상시키는 데
              투자합니다. 그것이 프론트엔드 디자인이든, 백엔드 솔루션이든,
              새로운 프레임워크를 탐색하는 것이든 말이죠.
            </p>
            <h2 className="text-2xl font-semibold mt-6">개발 외의 삶</h2>
            <p>
              코딩을 하지 않을 때는 1만 명 이상의 구독자가 있는 제 유튜브
              채널에서 콘텐츠를 제작하거나, 버려진 과일로 만든 동물 간식과 같은
              지속 가능한 프로젝트를 탐구하고, 한국어, 영어, 우즈베크어와 같은
              언어를 통해 문화적 교류를 즐기고 있습니다.
            </p>
            <h2 className="text-2xl font-semibold mt-6">저의 야망</h2>
            <p>
              개발자로서 계속 성장하고 기술과 비즈니스 지식을 결합하여 의미 있고
              영향을 미칠 수 있는 프로젝트를 만들고 싶습니다. 새로운 기회와
              협업에 열려 있으니 언제든지 연락주세요!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
