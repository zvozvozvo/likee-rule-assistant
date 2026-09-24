import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dash">
      <div className="dash-hero">
        <div>
          <span className="pill">HyperSpeed</span>
          <h1>Likee Rule Assistant</h1>
          <p>43 правила • поиск за секунды • Ctrl + K</p>
        </div>

        <div className="dash-search">
          🔍 Поиск...
        </div>
      </div>

      <div className="dash-stats">
        <div className="card blue"><span>📚</span><h2>43</h2><p>Правила</p></div>
        <div className="card red"><span>🟥</span><h2>27</h2><p>Reject</p></div>
        <div className="card yellow"><span>🟨</span><h2>8</h2><p>Conceal</p></div>
        <div className="card purple"><span>🧠</span><h2>100</h2><p>Quiz</p></div>
      </div>

      <div className="dash-grid">
        <div className="panel">
          <h3>⚡ Быстрые действия</h3>

          <div className="quick-grid">
            <button>🔫 Оружие</button>
            <button>🚬 Вейп</button>
            <button>📄 Паспорт</button>
            <button>🚆 Зацепер</button>
            <button>💉 Наркотики</button>
            <button>🎰 Казино</button>
          </div>
        </div>

        <div className="panel">
          <h3>🔥 Частые ошибки</h3>

          <div className="row"><span>Паспорт в кадре</span><b className="r">Reject</b></div>
          <div className="row"><span>Вейп взрослого</span><b className="y">Conceal</b></div>
          <div className="row"><span>Зацепер</span><b className="r">Reject</b></div>
          <div className="row"><span>Буддийская свастика</span><b className="g">Ignore</b></div>
        </div>
      </div>

      <div className="panel">
        <h3>⌨️ Горячие клавиши</h3>

        <div className="keys">
          <div><kbd>Ctrl + K</kbd><span>Поиск правил</span></div>
          <div><kbd>Esc</kbd><span>Закрыть поиск</span></div>
          <div><kbd>Quick</kbd><span>Быстрый помощник</span></div>
        </div>
      </div>
    </div>
  );
}