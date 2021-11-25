
let contador=1

document.addEventListener('DOMContentLoaded',(e)=>
{
    AgregarEventos();
})

const AgregarEventos= ()=>
{
    const buttonMenu = document.getElementById('bar-menu')
    const ventanaMenu= document.getElementById('content-menu__list')
    const menu= ventanaMenu.firstElementChild

    buttonMenu.addEventListener('click',()=>
    {
       
        const body = document.body
       /* if(ventanaMenu.className.includes('visible'))
        {
            body.style.overflowY = 'scroll';
    
        }
        else
        {
            body.style.overflowY = 'hidden';
        }*/
        ventanaMenu.classList.toggle('visible')
        menu.classList.toggle('menu-visible')
    })

      let boton = document.getElementById('Enviar')

      boton.addEventListener('click',(e)=>{

        e.preventDefault();
        let name= document.getElementById('name')
        let email= document.getElementById('email')
        let mensaje= document.getElementById('mensaje')

        console.log(name.value)
        console.log(email.value)
        console.log(mensaje.value)
      })


      setInterval(()=>
      {
          let source =''
    
          switch(contador)
          {
              case 1: source='images/banner.jpg';contador++;break;
              case 2: source='images/banner2.jpg';contador++;break;
              case 3: source='images/banner3.jpg';contador=1;break;
          }
     
          const banner = document.getElementById('baner')
          banner.src=source

      },10000)
}