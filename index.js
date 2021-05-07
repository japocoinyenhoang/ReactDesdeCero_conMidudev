const $app = document.getElementById("app");
const Avatar = (param) => {
  const src=`https://randomuser.me/api/portraits/women/${param.id}.jpg`;
  return `<picture> <img src="${src}" /> <strong>${param.name} </string></picture> `;
}

$app.innerHTML += Avatar({id: 11, name: "Jane"})
$app.innerHTML += Avatar({id: 5, name: "Yasmine"})

$app.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('disabled')
  })
})