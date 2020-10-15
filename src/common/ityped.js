import { init } from "ityped";

export function ityped(ele, strings) {
  const oneElement = document.querySelector(ele);
  init(oneElement, {
    showCursor: true,
    strings: strings,
    loop: false,
    startDelay:0, 
    onFinished: function () {
      const oneElement = document.querySelector(".ityped-cursor");
      oneElement.style.display = "none";
    },
  });
};