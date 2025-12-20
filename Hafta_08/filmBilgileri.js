const titleInput = document.getElementById("film-adi");
const scoreInput = document.getElementById("imdb");
const posterInput = document.getElementById("afis");
const descInput = document.getElementById("aciklama");
const updateBtn = document.getElementById("update-card");

const titlePreview = document.getElementById("preview-title");
const scorePreview = document.getElementById("preview-score");
const posterPreview = document.getElementById("preview-poster");
const descPreview = document.getElementById("preview-desc");
const posterOverlay = document.getElementById("poster-overlay");
const posterUrlInput = document.getElementById("poster-url-input");
const posterCancel = document.getElementById("poster-cancel");
const posterSave = document.getElementById("poster-save");
const textOverlay = document.getElementById("text-overlay");
const textTitle = document.getElementById("text-title");
const textInput = document.getElementById("text-input");
const textArea = document.getElementById("text-area");
const textCancel = document.getElementById("text-cancel");
const textSave = document.getElementById("text-save");

let activeTextField = null;

const storageKey = "filmBilgileriState";

const loadState = () => {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return;
  }

  try {
    const state = JSON.parse(raw);
    if (state.title) {
      titleInput.value = state.title;
      titlePreview.textContent = state.title;
    }
    if (state.score) {
      scoreInput.value = state.score;
      scorePreview.textContent = `IMBD Puani: ${state.score}`;
    }
    if (state.poster) {
      posterInput.value = state.poster;
      posterPreview.src = state.poster;
    }
    if (state.desc) {
      descInput.value = state.desc;
      descPreview.textContent = state.desc;
    }
  } catch {
    localStorage.removeItem(storageKey);
  }
};

const saveState = () => {
  const state = {
    title: titleInput.value.trim(),
    score: scoreInput.value.trim(),
    poster: posterInput.value.trim(),
    desc: descInput.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
};

loadState();

updateBtn.addEventListener("click", () => {
  const title = titleInput.value.trim() || "Film Basligi";
  const score = scoreInput.value.trim() || "-";
  const poster = posterInput.value.trim();
  const desc = descInput.value.trim() || "Film aciklamasi...";

  titlePreview.textContent = title;
  scorePreview.textContent = `IMBD Puani: ${score}`;
  descPreview.textContent = desc;

  if (poster) {
    posterPreview.src = poster;
  }

  saveState();
});

const openPosterEditor = () => {
  posterUrlInput.value = posterInput.value.trim() || posterPreview.src;
  posterOverlay.classList.add("active");
  posterOverlay.setAttribute("aria-hidden", "false");
  posterUrlInput.focus();
};

const closePosterEditor = () => {
  posterOverlay.classList.remove("active");
  posterOverlay.setAttribute("aria-hidden", "true");
};

posterPreview.addEventListener("dblclick", openPosterEditor);
posterCancel.addEventListener("click", closePosterEditor);
posterOverlay.addEventListener("click", (event) => {
  if (event.target === posterOverlay) {
    closePosterEditor();
  }
});

posterSave.addEventListener("click", () => {
  const poster = posterUrlInput.value.trim();
  if (poster) {
    posterInput.value = poster;
    posterPreview.src = poster;
  }
  closePosterEditor();
  saveState();
});

const openTextEditor = ({ label, value, field, useTextarea }) => {
  activeTextField = field;
  textTitle.textContent = label;
  textInput.classList.toggle("hidden", useTextarea);
  textArea.classList.toggle("hidden", !useTextarea);
  if (useTextarea) {
    textArea.value = value;
    textArea.focus();
  } else {
    textInput.value = value;
    textInput.focus();
  }
  textOverlay.classList.add("active");
  textOverlay.setAttribute("aria-hidden", "false");
};

const closeTextEditor = () => {
  textOverlay.classList.remove("active");
  textOverlay.setAttribute("aria-hidden", "true");
  activeTextField = null;
};

titlePreview.addEventListener("dblclick", () => {
  openTextEditor({
    label: "Film Basligi",
    value: titleInput.value.trim() || titlePreview.textContent.trim(),
    field: "title",
    useTextarea: false,
  });
});

scorePreview.addEventListener("dblclick", () => {
  const previewScore = scorePreview.textContent
    .replace("IMBD Puani:", "")
    .trim();
  openTextEditor({
    label: "IMBD Puani",
    value: scoreInput.value.trim() || previewScore,
    field: "score",
    useTextarea: false,
  });
});

descPreview.addEventListener("dblclick", () => {
  openTextEditor({
    label: "Film Aciklamasi",
    value: descInput.value.trim() || descPreview.textContent.trim(),
    field: "desc",
    useTextarea: true,
  });
});

textCancel.addEventListener("click", closeTextEditor);
textOverlay.addEventListener("click", (event) => {
  if (event.target === textOverlay) {
    closeTextEditor();
  }
});

textSave.addEventListener("click", () => {
  const value = (textArea.classList.contains("hidden")
    ? textInput.value
    : textArea.value
  ).trim();

  if (activeTextField === "title") {
    const safeTitle = value || "Film Basligi";
    titleInput.value = value;
    titlePreview.textContent = safeTitle;
  }

  if (activeTextField === "score") {
    const safeScore = value || "-";
    scoreInput.value = value;
    scorePreview.textContent = `IMBD Puani: ${safeScore}`;
  }

  if (activeTextField === "desc") {
    const safeDesc = value || "Film aciklamasi...";
    descInput.value = value;
    descPreview.textContent = safeDesc;
  }

  closeTextEditor();
  saveState();
});
