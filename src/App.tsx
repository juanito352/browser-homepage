import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import WeatherBox from "./components/layout/WeatherBox";
import TimeBox from "./components/layout/TimeBox";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import ShortcutsBar from "./components/layout/ShortcutsBar";

export default function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast("You are now online!", {
        icon: "🟢",
        duration: 1500,
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast("You are offline!", {
        icon: "🔴",
        duration: 1500,
      });
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between h-full relative">
      {isSearchFocused && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/10 transition-all duration-300 pointer-events-none z-5" />
      )}

      <div className="relative">
        <Toaster />
        <div className="relative text-end p-4 text-sm">
          <span
            className={`inline-block px-3 py-1 rounded-full border-2 
      ${
        isOnline
          ? "bg-[#00d390] border-[#00d390] text-[#004c39]"
          : "bg-[#ff637d] border-[#ff637d] text-[#4d0218]"
      }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>
        </div>

        <div className="grid grid-cols-3 w-full mt-6">
          <div className="flex justify-start">
            <WeatherBox />
          </div>

          <div className="flex justify-center flex-col items-center mt-10">
            <h1 className="font-pacifico text-5xl mb-6">Welcome, Boss!</h1>
            <TimeBox />
          </div>
        </div>
      </div>

      <ShortcutsBar />

      <div
        className={`absolute left-0 right-0 transition-all duration-300 z-10 ${
          isSearchFocused ? "top-1/2 -translate-y-1/2" : "bottom-10"
        }`}
      >
        <SearchBar setFocused={setIsSearchFocused} />
      </div>
    </div>
  );
}
