import Dashboard from "./components/Dashboard";
import CommandPalette from "./components/CommandPalette";
import "./App.css";
import { Home, Book, Zap, Brain, Star, BarChart3, Search } from "lucide-react";
import { useEffect, useState } from "react";
import RuleBook from "./components/RuleBook";
export default function App() {
  const [active, setActive] = useState("rulebook");

  return (
    <div className="app">

      <CommandPalette/>

      <aside className="sidebar">

        <div className="logo">
          <div className="logo-circle">L</div>

          <div>
            <h2>Likee</h2>
            <small>Rule Assistant V5</small>
          </div>
        </div>

        <nav>

          <button
            className={active==="dashboard"?"active":""}
            onClick={()=>setActive("dashboard")}
          >
            <Home size={18}/>
            Dashboard
          </button>

          <button
            className={active==="rulebook"?"active":""}
            onClick={()=>setActive("rulebook")}
          >
            <Book size={18}/>
            RuleBook
          </button>

          <button
            className={active==="quick"?"active":""}
            onClick={()=>setActive("quick")}
          >
            <Zap size={18}/>
            Quick
          </button>

          <button
            className={active==="quiz"?"active":""}
            onClick={()=>setActive("quiz")}
          >
            <Brain size={18}/>
            Quiz
          </button>

          <button
            className={active==="favorites"?"active":""}
            onClick={()=>setActive("favorites")}
          >
            <Star size={18}/>
            Favorites
          </button>

          <button
            className={active==="stats"?"active":""}
            onClick={()=>setActive("stats")}
          >
            <BarChart3 size={18}/>
            Stats
          </button>

        </nav>

      </aside>

      <main className="content">

        <header className="hero">

          <div>
            <span className="badge">HyperSpeed</span>

            <h1>Likee Rule Assistant</h1>

            <p>
              Поиск правил за секунды • Ctrl + K
            </p>
          </div>

          <div className="search-box">
            <Search size={18}/>
            <input placeholder="нож, паспорт, вейп, roblox..." />
          </div>

        </header>

        <section className="actions">

          <div className="action reject">Reject</div>

          <div className="action conceal">Conceal</div>

          <div className="action tag">Tag A</div>

          <div className="action ignore">Ignore</div>

        </section>

       {active==="dashboard" && <Dashboard />}

        {active==="rulebook"&&(

          <section className="quick">

            <div className="section-title">
              <Book size={22}/>
              <h2>RuleBook</h2>
            </div>

            <RuleBook/>

          </section>

        )}

        {active==="quick"&&(

          <section className="quick">

            <div className="section-title">
              <Zap size={22}/>
              <h2>Quick Mode</h2>
            </div>

            <div className="actions">

              <div className="action reject">Reject</div>

              <div className="action conceal">Conceal</div>

              <div className="action tag">Tag A</div>

              <div className="action ignore">Ignore</div>

            </div>

          </section>

        )}

        {active==="quiz"&&(

          <section className="quick">

            <div className="section-title">
              <Brain size={22}/>
              <h2>Quiz</h2>
            </div>

            <p>
              Скоро появится экзамен на реальные кейсы из Rule Book.
            </p>

          </section>

        )}

        {active==="favorites"&&(

          <section className="quick">

            <div className="section-title">
              <Star size={22}/>
              <h2>Favorites</h2>
            </div>

            <p>
              Здесь будут сохранённые правила.
            </p>

          </section>

        )}

        {active==="stats"&&(

          <section className="quick">

            <div className="section-title">
              <BarChart3 size={22}/>
              <h2>Статистика</h2>
            </div>

            <p>
              Точность, ошибки и слабые категории появятся после тренажёра.
            </p>

          </section>

        )}

      </main>

    </div>
  );
}