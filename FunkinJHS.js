const Font = new FontFace(
  "FunkinFont"
  "url(assets/FunkinFont.ttf)"
);

document.body.style.backgroundColor = "black";
const MainLoadingMusic = new Audio("assets/FunkinBgm.wav");
FunkinFont.load().then(() => {
  document.fonts.add(Font);
  document.body.style.fontFamily = "FunkinFont";
)};

const main = document.createElement("div");
main.textContent = "A FNF Mod"
main.style.fontFamily = "FunkinFont";
document.body.appendChild(main);
img.style.display = "none";
