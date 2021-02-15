# CDP: Cine Debate Pandemia

La idea de este sitio es recopilar los mejores momentos de nuestro recorrido por el CDP 2020.

El proyecto está desarrollado con [Gatsby JS](https://www.gatsbyjs.com/) un framework de React Open Source. Y el template de 'starter' está basado en [Gatsby Starter Stellar](https://www.gatsbyjs.com/starters/codebushi/gatsby-starter-stellar).

Para utilizar Gatsby podés instalar gatsby-cli de forma global:

`npm install -g gatsby-cli`

Para levantar el proyecto en tu propia máquina y modificar la web app, luego tenés que clonar el repositorio:

`git clone https://github.com/kaenovsky/fluffy-garbanzo.git`

Y luego en la raíz del proyecto correr:

`gatsby develop`

El sitio se podrá ver en [localhost:8000](http://localhost:8000) mientras edites los archivos ubicados en `/src/` vas a ver los cambios reflejándose en directo en el navegador.

Los cambios realizados en la rama 'main' de este repositorio se reflejan en [cdp-fg.netlify.app](https://cdp-fg.netlify.app/), y los de la rama 'dev' en [dev-cdp-fg.netlify.app](https://dev-cdp-fg.netlify.app/).

Para contactarte con lxs admins de este proyecto, [sumate a nuestro canal de telegram](https://t.me/CineDebatePandemia).

## Git para todes

Vamos a ver el paso a paso para subir cosas acá usando Git:

1. Instalar **git** 
2. **Clonar** el repo 
3. Crear una **branch** 
4. Remixar archivos
5. Confirmar cambios con un **commit**
6. **Pushear** a nuestra branch
7. Hacer **pull request** para que nuestros cambios sean evaluados y, en caso de que esté todo bien, se pueda hacer un **merge**

### Step 1: Git
Para les que nunca usaron git ni línea de comandos vamos a bajar [Github Desktop](https://desktop.github.com/) 

Los pasos a seguir son los mismos que con los comandos de la terminal, pero Github Desktop nos va a dar una interfaz gráfica que quizás sea más amigable <3
 

### Step 2: Clonar el repo

Una vez instalado lo abren y vamos a:

- Current repository 
- Add 
- Clone repository...
- URL 
- Pegan la URL del repositorio que en este caso es https://github.com/kaenovsky/fluffy-garbanzo.git

Listo! Ya clonamos el repo, es decir que tenemos todos los archivos en nuestra compu. 
Además de los archivos propios del proyecto (HTML, CSS, assets y demás) tenemos una carpeta oculta **.git**. Aunque no la veamos, es la que contiene todo el **control de versiones**: cada commit, cada branch, el repo remoto. 

Toda la historia del repo está acá. Es lo que nos permite copiar, pegar, duplicar, remixar y romper los archivos sin miedo, si la cagamos git nos permite volver sobre nuestros pasos. Gracias git <3

Para todo esto primero vamos a hacer nuestra propia **branch**. 

### Step 3: Crear nuestra branch

> Qué es una branch? 
>
> Crear una branch es, básicamente, crear una línea temporal paralela (todo muy sci-fi) donde vamos a tener una copia exacta de los archivos de otra rama. En esta nueva rama tenemos la tranquilidad no afectar la copia original de los archivos, y la libertad de hacer lo que querramos con ellos.

Para eso vamos a:

- Current branch
- Name: Nombren como quieran, pero recomiendo usar nombres descriptivos: `feature/footer`, `fix/ajustes-mobile`, `assets/gifs`.
- Create branch based on... `dev`

Lo que hicimos acá es copiar todo lo que haya en la rama **dev** en nuestra rama propia nueva. 

Se recomienda hacer **una rama por tema**, ejemplo: si querés hacer algo en el menú hacé una rama, si después pintó cambiar algo en el footer hacé otra específica para eso. 
Podés hacer todo en una misma rama? Si. Es prolijo? No.


### Step 4: Remake, Remix, Rip-Off

Ahora que tenemos A Branch of One's Own ya podemos cerrar Github Desktop y hacer lo que querramos. Por ejemplo, podemos abrir el proyecto desde un editor de código y hacer algún cambio en `/src/pages/index.js` o subir imágenes a `src/assets/images`. 

- Para abrir la carpeta donde está el repo local desde Github Desktop podemos ir al menú **Repository > Show in finder**. 
- Para abrirlo en un editor de código se puede ir a **Repository > Open in Visual Studio Code** (o el editor que configuren desde **Preferencias**)

También pueden abrirlo manualmente, es lo mismo.

### Step 5: Commitear

Ahora tenemos que confirmar los cambios con un **commit**. 


> Qué es un commit? 
> 
> Es como un Ctrl + S, es un punto de guardado. Es como pararte en un punto de la línea de tiempo del proyecto, sacarle una foto al estado actual de sus archivos y ponerle un rótulo que diga qué hiciste ahí, para que podamos volver a ese punto.
>
>Por eso se recomienda que si hiciste un cambio que te sirve, por más que sea algo chiquitito, hagas un **commit**, así podés quedarte tranqui de que podés volver ahí si rompés algo. 

Volvemos a Github Desktop, y en la parte superior izquierda, abajo de Current Repository hay una pestaña de **Changes** donde figuran los archivos que cambiaron/agregaron.


- Seleccionamos los archivos que querramos incluir. 
- Abajo a la izquierda hay un recuadro para poner un mensaje de commit. De nuevo, pueden poner lo que quieran pero se recomienda ser descriptivos, ejemplo: "Subo imágenes de flyers", "Ajusto los estilos para mobile", "Agrego redes al footer", ponele.
- Commit to [nuestra branch]

Si van a la pestaña **History** pueden ver los commits del proyecto, pueden hacer todos los que quieran, no sean tímides.

### Step 6: Pushear
> Qué es un push? 
>  
> Es lo que hace que nuestra branch y sus commits, que hasta ahora sólo estuvieron en nuestra copia **local** (nuestra compu) suba al **remoto** (el que todes podemos ver [acá en el repo de github](https://github.com/kaenovsky/fluffy-garbanzo)).


Simplemente hacemos clic donde dice
- Push origin 


### Step 7: Pull request

> Qué es un Pull Request? 
> 
> El pull request es una solicitud para que los cambios de tu branch se comparen y se fusionen con otra branch **base**. 


Si hicieron push y no tienen más cambios Github Desktop les va a sugerir que creen un PR desde el botón `Create pull request`. Si hacen clic los lleva a una página en el navegador donde pueden comparar con otra rama y realizar el PR. 

Sino lo pueden hacer directo desde [este link](https://github.com/kaenovsky/fluffy-garbanzo/compare).

Si la compararan con `main` es muy probable que les diga "❌ Can’t automatically merge". 

Esto significa que algún archivo tiene conflictos (osea que en `main` hay un archivo que dice **X** en la línea 15, y en nuestra branch la misma línea del mismo archivo dice **Y**). En caso de mergearse habrá que revisar los conflictos manualmente y determinar qué versión queremos.

Seleccionamos `dev`, tendría que decir `✅ Able to merge` lo que significa que nuestros cambios pueden incorporarse automáticamente sin conflictos. 

Podemos hacer un resumen de lo que hicimos (opcional pero recomendable), etiquetar al alguien para que lo revise, abajo de todo podemos ver una comparativa de cada archivo a mergear. Cuando estamos le damos clic al botón verde que dice `Create pull request` y listo.

Al mergearse todos los cambios que hicimos en nuestra branch van a pasar a formar parte de la rama `dev`. 