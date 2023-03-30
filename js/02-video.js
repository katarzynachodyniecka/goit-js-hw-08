import Player from "@vimeo/player";
import _ from "lodash";
// Zainicjalizuj odtwarzacz w pliku skryptu tak, jak opisano w sekcji pre-existing player, ale weź pod uwagę to, że odtwarzacz dodano jako pakiet npm, a nie poprzez CDN.
//
//
// Zbadaj dokumentację metody on() i zacznij śledzić zdarzenie timeupdate - czyli aktualizacje czasu odtwarzania.
//
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const timeCurr = "videoplayer-current-time";

const updateTime = throttle(
  (data) => localStorage.setItem(timeCurr, Math.floor(timeEl.seconds)),
  1000
);
//
// Zapisuj czas odtwarzania w local storage. Niech kluczem w storage będzie "videoplayer-current-time".
//
//
// Przy przeładowywania strony używaj metody setCurrentTime() aby wznowić odtwarzanie od zapisanego momentu.
//
//
// Dodaj do projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania aktualizował się w storage nie częściej niż raz na sekundę.
player.setCurrentTime(localStorage.getItem(timeCurr));
player.on("timeCurr", updateTime);
