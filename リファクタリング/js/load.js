const load = {
  barStyles: [
    "is-primary",
    "is-success",
    "is-warning",
    "is-error",
    "is-pattern",
  ],
  start(loadTime_ms) {
    this.loadTitle(loadTime_ms / 3);
    this.loadBar(loadTime_ms);
  },
  loadTitle(loadTime_ms, titleText = "TETSUYA SATO") {
    const title = document.getElementById("title_txt");
    const titleArr = Array.from(titleText);
    const id = setInterval(() => {
      title.textContent += titleArr.shift();
      if (titleArr.length === 0) clearInterval(id);
    }, loadTime_ms / titleArr.length);
  },
  loadBar(loadTime_ms, divisionNum = 1000) {
    const bar = document.getElementById("progressBar");
    const style =
      this.barStyles[Math.floor(Math.random() * this.barStyles.length)];
    bar.classList.add("nes-progress", style);
    bar.max = 100;
    bar.value = 0;
    const id = setInterval(() => {
      bar.value += 1;
      if (bar.value === 100) clearInterval(id);
    }, loadTime_ms / divisionNum);
  },
};
