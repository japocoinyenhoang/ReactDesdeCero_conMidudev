const $app = document.getElementById("app");
const Avatar = (param) => {
  const src=`https://randomuser.me/api/portraits/women/${param.id}.jpg`;
  return `<picture> <img src="${src}" /> ${param.name} </picture> `;
}

$app.innerHTML += Avatar({id: 11, name: "Jane"})
$app.innerHTML += Avatar({id: 5, name: "Yasmine"})