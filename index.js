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
const {useState} = React   // esto es lo mismo que const useState = React.useState

    const Avatar = (props) => {
      /*Forma larga    
      const state = useState(true)
      const enable = state[0]
      const setEnabled = state[1] vs forma corta:*/

      const[enabled, setEnabled] = useState(true)

      const src = `https://randomuser.me/api/portraits/women/${props.id}.jpg`;

      let pictureClassName = '';
      
      if (props.size === 'small') {
          pictureClassName = "is-small";
        }else if (props.size === 'large') {
          pictureClassName = "is-large"
      };

      //const pictureClassName = props.size === 'small' ? 'is-small':'';
      const imgClassName = enabled ? '' : 'disabled';
      

      return (
      <picture className={pictureClassName}>
        <img 
          onClick={() => setEnabled(!enabled)}
          className={imgClassName} 
          src={src} />
        <span>{props.name}</span>
        </picture>)
    };


    ReactDOM.render(
      <div>
        
        <Avatar id= {22} name="Sam" size="small"/>
        <Avatar id= {45} name="Linda" />
        <Avatar id= {12} name="Linda" size="large"/>
      </div>, $app
);

