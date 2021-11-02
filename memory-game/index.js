    //ASGINAMOS EL NOMBRE DEL ID A UNA CONSTANTE
    const celeste = document.getElementById('celeste')
    const violeta = document.getElementById('violeta')
    const naranja = document.getElementById('naranja')
    const verde = document.getElementById('verde')
    const btnEmpezar = document.getElementById('btnEmpezar')
    const ULTIMO_NIVEL = 2;


    class Juego {
      constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
      }
      inicializar() {
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)

        btnEmpezar.classList.toggle('hide')

        //btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
          celeste,
          violeta,
          naranja,
          verde
        }
      }
      // toggleBtnEmpezar() {
      //   if (btnEmpezar.classList.contains('hide')) {
      //     btnEmpezar.classList.remove('hide')
      //   } else {
      //     btnEmpezar.classList.add('hide')
      //   }
      // }

      generarSecuencia() {
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
      }

      siguienteNivel() {
        //inicializando el subnivel
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
      }

      transformarNumeroAColor(numero) {
        switch (numero) {
          case 0:
            return 'celeste';
          case 1:
            return 'violeta';
          case 2:
            return 'naranja';
          case 3:
            return 'verde';
        }
      }

      transformarColorANumero(numero) {
        switch (numero) {
          case 'celeste':
            return 0;
          case 'violeta':
            return 1;
          case 'naranja':
            return 2;
          case 'verde':
            return 3;
        }
      }

      iluminarSecuencia() {
        /*aplicamos i < this.nivel porque el numero del nivel 
        corresponde al numero de elementos que le usuario 
        modificara y tendra que seguir */

        for (let i = 0; i < this.nivel; i++) {
          const color = this.transformarNumeroAColor(this.secuencia[i])
          // Ej: const color = "verde"

          setTimeout(() => this.iluminarColor(color), 1000 * i)
          //colocar x * i nos permite acumular tiempo en función del for

        }
      }

      iluminarColor(color) {
        //Colocando la clase que ilumina el color
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
      }

      apagarColor(color) {
        //Quitando la clase que ilumina el color
        this.colores[color].classList.remove('light')
      }

      agregarEventosClick() {
        //para obtener el input agregando un manejador de eventos (click)
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
      }

      eliminarEventosClick() {
        //para remover el input agregado al manejador de eventos (click)
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
      }

      //los metodos que se llaman en el event listener suelen tener en la funcion un parametro ev

      elegirColor(ev) { //le asignamos su target dataset // un evento (ev)
        const nombreColor = ev.target.dataset.color
        // daset almacena valores 

        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        // algoritmo d la funcion del juego
        if (numeroColor === this.secuencia[this.subnivel]) {
          this.subnivel++
          if (this.subnivel === this.nivel) {
            this.nivel++
            this.eliminarEventosClick()
            if (this.nivel === (ULTIMO_NIVEL + 1)) {
              //gano
              this.ganoElJuego()
            } else {
              //no la invocamos Aqui ()pero lo hara en el tiempo determinado 
              //Aqui sale error porque this es windows y deberia seguir siendo el juego usamos BIND
              setTimeout(this.siguienteNivel, 1500)
            }
          }
        } else {
          //perdio
          this.perdioElJuego()
        }
      }
      ganoElJuego() {
        swal("Succes!!", "Congrats you won the game", "success")
          .then(() => {
            //this.eliminarEventosClick() ya esta en funcion gnao juego
            this.inicializar()
          })

      }
      perdioElJuego() {
        swal("Wrong :(", "Try it again!!", "error")
          .then(() => {
            //this.eliminarEventosClick() ya esta en funcion gnao juego
            this.eliminarEventosClick()
            this.inicializar()
          })

      }

    }
    function empezarJuego() {
      window.juego = new Juego()
    }
