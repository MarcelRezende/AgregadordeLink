function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile-photo")

  if (html.classList.contains("light")) {
    img.src = "./Assets/avatar-IA-2.png"
  } else {
    img.src = "./Assets/avatar.png"
  }
}

//if (html.classList.contains("light")) {
//  html.classList.remove("light")
// } else {
//   html.classList.add("light")
// }

// TOGGLE SUBSTITUI ISSO TUDO!!!!!!

// PEGAR A TAG IMG
