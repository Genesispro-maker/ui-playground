export function formatTime(time: number): string {
  if (isNaN(time)) return "0:00";

  const abs = Math.abs(time);

  const min = Math.floor(abs / 60);
  const sec = Math.floor(abs % 60);

  return `${min}:${sec.toString().padStart(2, "0")}`;
}
