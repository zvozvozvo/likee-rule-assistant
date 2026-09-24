import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { rules } from "../data/rules";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }

      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const results = useMemo(() => {
    if (!query) return [];

    return rules
      .filter((r) => {
        const text = (
          r.title +
          " " +
          r.category +
          " " +
          r.keywords.join(" ")
        ).toLowerCase();

        return text.includes(query.toLowerCase());
      })
      .slice(0, 8);
  }, [query]);

  if (!open) return null;

  return (
    <div className="overlay" onClick={() => setOpen(false)}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <div className="paletteSearch">
          <Search size={18} />
          <input
            autoFocus
            placeholder="Нож, паспорт, вейп..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="paletteResults">
          {results.map((r) => (
            <div key={r.id} className="paletteItem">
              <div>
                <h4>{r.title}</h4>
                <small>{r.category}</small>
              </div>

              <span className={`status ${r.action.replace(" ", "")}`}>
                {r.action}
              </span>
            </div>
          ))}

          {!results.length && query && (
            <div className="empty">
              Ничего не найдено.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}