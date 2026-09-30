const Font = new FontFace(
  "FunkinFont"
  "url(assets/FunkinFont.ttf)"
);
const MainLoadingMusic = new Audio("assets/FunkinBgm.wav");
FunkinFont.load().then(() -> {
  document.fonts.add(Font);
  document.body.style.fontFamily = "FunkinFont";
)};

const main = document.createElement("div");
main.textContent = "A FNF Mod"
img.style.display = "none";
