import "./App.css";

const projects = [
  {
    title: "MyToDo",
    description: "할 일을 관리하는 To-Do 앱입니다.",
    link: "https://mytodo-app-basic.vercel.app/",
    emoji: "✅"
  },
  {
    title: "MyDataInsight",
    description: "데이터를 분석하고 시각화하는 앱입니다.",
    link: "https://mydatainsight.vercel.app/",
    emoji: "📊"
  },
  {
    title: "MyTechResearch",
    description: "기술 트렌드를 조사하는 앱입니다.",
    link: "https://my-tech-research.vercel.app/",
    emoji: "🔍"
  }
];

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>내 포트폴리오</h1>
        <p className="subtitle">배포한 프로젝트 모음입니다</p>
      </header>

      <div className="card-grid">
        {projects.map((p) => (
          
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="card"
            key={p.title}
          >
            <div className="card-emoji">{p.emoji}</div>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <span className="card-link">프로젝트 보러가기 →</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;