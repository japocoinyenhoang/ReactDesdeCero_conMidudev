
//FUNCIONAL
/*const $app = document.getElementById("app");
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
*/

const $app = document.getElementById("app");
const h = React.createElement;

const Avatar = params => {
  const src=`https://randomuser.me/api/portraits/women/${params.id}.jpg`;
  return h('img', {src});
}

ReactDOM.render(h( Avatar, {id:22}), $app);