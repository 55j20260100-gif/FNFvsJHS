const FunkinFont = new FontFace(
  "FunkinFont",
  "url(assets/FunkinFont.ttf)"
);

document.body.style.backgroundColor = "black";

const MainLoadingMusic = new Audio("assets/FunkinBGM.wav");

FunkinFont.load().then(() => {
  document.fonts.add(FunkinFont);

  document.body.style.fontFamily = "FunkinFont";

  const main = document.createElement("div");
  main.textContent = "A FNF Mod";
  main.style.fontFamily = "FunkinFont";
  main.style.color = "white";

  document.body.appendChild(main);
});
