import { Search } from "lucide-react";
import { useState } from "react";
import type { KeyboardEvent } from "react";

export default function SearchBar({ setFocused }: { setFocused: (focused: boolean) => void }) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      const q = encodeURIComponent(query.trim());
      window.location.href = `https://google.com/search?q=${q}`;
    }
    if (e.key === "Escape") {
      setFocused(false);
    }
  };

  return (
    <div className="flex justify-center items-center m-18 text-white">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search..."
          className="bg-white/20 rounded-md p-3 pl-12 text-xl xs:w-sm sm:w-md md:w-xl focus:outline-none shadow-lg"
        />
      </div>
    </div>
  );
}
