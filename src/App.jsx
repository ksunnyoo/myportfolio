const projects = [
  {
    title: "MyToDo",
    description: "할 일을 관리하는 To-Do 앱입니다.",
    link: "https://mytodo-app-basic.vercel.app/"
  },
  {
    title: "MyDataInsight",
    description: "데이터를 분석하고 시각화하는 앱입니다.",
    link: "https://mydatainsight.vercel.app/"
  },
  {
    title: "MyTechResearch",
    description: "기술 트렌드를 조사하는 앱입니다.",
    link: "https://my-tech-research.vercel.app/"
  }
];

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>내 포트폴리오</h1>
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {projects.map((p) => (
          <div key={p.title} style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "20px" }}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">
              프로젝트 보러가기 →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;