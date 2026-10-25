import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const indiaTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    function sync() {
      clearTimeout(timer);
      if (document.hidden) return;
      setNow(new Date());
      // Schedule against the real minute boundary, rather than accumulating interval drift.
      timer = setTimeout(sync, 60_000 - (Date.now() % 60_000) + 20);
    }
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  const value = indiaTime.format(now);
  const hour = Number(value.split(":")[0]);
  const DayIcon = hour >= 6 && hour < 18 ? Sun : Moon;
  return (
    <div
      className="flex items-center gap-2.5 whitespace-nowrap"
      title="Local time in India · UTC+05:30"
    >
      <DayIcon className="size-3.5 text-primary/75" aria-hidden="true" />
      <span className="text-[9px] font-medium tracking-[0.16em] text-[#999]">
        INDIA
      </span>
      <span className="text-[11px] text-[#444]" aria-hidden="true">
        /
      </span>
      <time
        dateTime={now.toISOString()}
        aria-label={`${value} India Standard Time`}
        className="font-mono text-[13px] font-medium tracking-[0.04em] text-[#e5e5e5] tabular-nums"
      >
        {value}
      </time>
      <span className="text-[8px] tracking-wider text-[#777]">IST</span>
    </div>
  );
}
