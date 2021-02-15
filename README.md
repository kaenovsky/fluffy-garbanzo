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

Vamos a ver el paso a paso para subir tus cambios al repo usando Github:

1. Instalar **git** 
2. **Clonar** el repo 
3. Crear una **branch** 
4. Remixear los archivos.
5. Confirmar los cambios con un **commit**
6. **Pushear** a nuestra branch
7. Hacer **pull request** para que nuestros cambios sean evaluados y, en caso de que esté todo bien, puedan ser incorporados a la branch pincipal sin romper nada :)

### Step 1: Git
Para les que nunca usaron git ni línea de comandos vamos a bajar [Github Desktop](https://desktop.github.com/) 

Los pasos a seguir son los mismos que con los comandos de la terminal, pero Github Desktop nos va a dar una interfaz gráfica que quizás sea más amigable <3
 
Lo instalan y lo abren

### Step 2: Clonar el repo

- Current repository 
- Add 
- Clone repository...
- URL 
- Pegan la URL del repositorio que en este caso es https://github.com/kaenovsky/fluffy-garbanzo.git

Listo! Ya clonamos el repo, es decir que tenemos todos los archivos en nuestra compu. 
Además de los archivos propios del proyecto (HTML, CSS, assets y demás) tenemos una carpeta oculta **.git**. Aunque no la veamos, es la que contiene todo el **control de versiones**: cada commit, cada branch, el repo remoto. 

La historia del repo está acá. Es lo que nos permite copiar, pegar, duplicar, remixar y romper los archivos sin miedo, si la cagamos git nos permite volver sobre nuestros pasos. Gracias git <3

### Step 3: Crear nuestra branch

Para esto primero necesitamos nuestra propia **branch**. Crear una branch es, básicamente, copiar los archivos en una línea temporal paralela (todo muy sci-fi) para no afectar los archivos originales del proyecto.

Vamos a:

- Current branch
- Name: 
  - Pueden nombrar la rama como quieran, pero recomiendo usar nombres descriptivos: `feature/footer`, `fix/ajustes-mobile`, `assets/gifs`.
- Create branch based on... `dev`

Lo que hicimos acá, es copiar todo lo que haya en la rama **dev**, dentro de nuestra rama propia. 

### Step 4: Remake, Remix, Rip-Off

Ahora que tenemos A Branch of One's Own ya podemos cerrar Github Desktop y hacer lo que querramos. Por ejemplo, abrir el proyecto desde un editor de código y hacer algún cambio en `/src/pages/index.js` o subir imágenes a `src/assets/images`. 

### Step 5: Commitear

Ahora tenemos que confirmar los cambios con un **commit**. Volvemos a Github Desktop, y en la parte superior izquierda, abajo de Current Repository hay una pestaña de **Changes**.

Recomiendo hacer un commit por cada cambio.

- Seleccionamos los archivos que querramos incluir. 
- Abajo a la izquierda hay un recuadro para poner un mensaje de commit. De nuevo, pueden poner lo que quieran pero se recomienda ser descriptivos, ejemplo: "Subo imágenes de flyers", "Ajusto los estilos para mobile", "Agrego redes al footer", ponele.
- Commit to [nuestra branch]

Si van a la pestaña History pueden ver su commit.

Qué es un commit? Es como hacer un Ctrl + S, es como un punto de guardado. Es como pararte en un punto de la línea de tiempo del proyecto, sacarle una foto al estado actual de sus archivos y ponerle un rótulo que diga qué hiciste ahí, para que si la cagamos podamos volver a ese punto.

### Step 6: Pushear


### Step 7: Pull request