import { useMemo, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { rules } from "../data/rules";

const colors = {
  Reject: "#ef4444",
  Conceal: "#f59e0b",
  TagA: "#2563eb",
  Ignore: "#64748b",
};

export default function RuleBook() {
  const [category, setCategory] = useState("Все");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return rules.filter((r) => {
      const text = (r.title + " " + r.keywords.join(" ")).toLowerCase();
      return (
        (category === "Все" || r.category === category) &&
        text.includes(query.toLowerCase())
      );
    });
  }, [category, query]);

  const [selected, setSelected] = useState(rules[0]);

  const current =
    filtered.find((r) => r.id === selected.id) || filtered[0] || rules[0];

  const cats = ["Все", ...new Set(rules.map((r) => r.category))];

  return (
    <div className="rb2">

      <div className="rb2-top">
        <div>
          <h2>RuleBook</h2>
          <span>{rules.length} правил</span>
        </div>

        <div className="rb2-search">
          <Search size={18}/>
          <input
            placeholder="Поиск..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rb2-body">

        <aside className="rb2-cats">
          {cats.map((c)=>(
            <button
              key={c}
              className={category===c?"active":""}
              onClick={()=>setCategory(c)}
            >
              {c}
            </button>
          ))}
        </aside>

        <section className="rb2-list">
          {filtered.map((r)=>(
            <button
              key={r.id}
              className={current.id===r.id?"item active":"item"}
              onClick={()=>setSelected(r)}
            >
              <div className="left">
                <div
                  className="dot"
                  style={{background:colors[r.action.replace(" ","")]}}
                />
                <div>
                  <h4>{r.title}</h4>
                  <span>{r.category}</span>
                </div>
              </div>

              <ChevronRight size={18}/>
            </button>
          ))}
        </section>

        <aside className="rb2-info">

          <div
            className="result"
            style={{
              background:colors[current.action.replace(" ","")]+"22",
              borderColor:colors[current.action.replace(" ","")]
            }}
          >
            {current.action}
          </div>

          <h2>{current.title}</h2>

          <div className="box danger">
            <small>БАНИТЬ</small>
            <p>{current.ban}</p>
          </div>

          {current.allow&&(
            <div className="box success">
              <small>МОЖНО</small>
              <p>{current.allow}</p>
            </div>
          )}

          {current.trap&&(
            <div className="box warning">
              <small>ЛОВУШКА</small>
              <p>{current.trap}</p>
            </div>
          )}

        </aside>

      </div>

    </div>
  );
}