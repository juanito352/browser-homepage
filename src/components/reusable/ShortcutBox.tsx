import type { Shortcut } from "../../types/Shortcut";

export default function ShortcutBox({ shortcut }: { shortcut: Shortcut }) {
  return (
    <a
      href={shortcut.url}
      rel="noopener noreferrer"
      className="w-28 h-28 rounded-2xl bg-white/20 backdrop-blur-md flex flex-col items-center justify-center shadow-md shadow-black/20 hover:scale-110 hover:bg-white/30 transition-all duration-200 cursor-pointer"
    >
      <img
        src={`https://icons.duckduckgo.com/ip3/${
          new URL(shortcut.url).hostname
        }.ico`}
        alt={shortcut.name}
        className="w-10 h-10 mb-2"
      />

      <p className="text-sm font-medium text-white drop-shadow">
        {shortcut.name}
      </p>
    </a>
  );
}
