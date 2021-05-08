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

//DECLARATIVO con REACT en crudo, esto no se hace ya 
/*const $app = document.getElementById("app");
const h = React.createElement;

const Avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
  return h("img", { src });
};

//para renderizar un elemento
//ReactDOM.render(h( Avatar, {id:22}), $app);

//para renderizar dos elementos
ReactDOM.render(
  h("div", null, [h(Avatar, { id: 22 }), h(Avatar, { id: 25 })]),
  $app
);*/

//para no tener que ahcerlo de esa forma y poder JSX tenemos que importar otro script ademas de  un script babel 
const $app = document.getElementById("app");


    const Avatar = (params) => {
      const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
      return (
      <picture>
        <img src={src} />
        <span>{params.name}</span>
        </picture>)
    };


    ReactDOM.render(
      <div>
        <Avatar id= {12} name="Linda"/>
        <Avatar id= {22} name="Sam"/>
      </div>, $app
);
