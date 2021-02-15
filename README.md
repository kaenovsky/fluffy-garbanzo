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
3. Partiendo de la branch principal (dev), crear una **branch** nueva donde realizaremos nuestros cambios
4. Crear/subir/remixear los archivos.
5. Hacer un **commit**, es decir confirmar nuestros cambios.
6. **Pushear** los cambios a nuestra branch
7. Hacer un **pull request** para que nuestros cambios sean evaluados y, en caso de que esté todo bien, puedan ser incorporados a la branch pincipal sin romper nada :)

Para quienes nunca usaron git ni la terminal de comandos, vamos a hacerlo a través de Github Desktop que lo descargan de acá

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

Además de los archivos propios del proyecto tenemos una carpeta oculta **.git**. Aunque no la veamos ni la toquemos directamente, es la que contiene todo el control de versiones del repo: cada commit, cada branch. Y es lo que nos permite meter la pata sabiendo que podemos volver sobre nuestros cambios. 

Así podemos abrir, chusmear, duplicar, remixar y romper los archivos sin miedo, total si la cagamos podemos volver sobre nuestros pasos. 

### Step 3: Crear nuestra branch

Pero para esto primero necesitamos tener nuestra propia **branch**. Crear una branch es, básicamente, copiar los archivos de desarrollo en una línea temporal paralela (todo muy sci-fi) para no afectar la rama principal del proyecto.

- Current branch
- Name: 
  - Pueden nombrar la rama como quieran, pero recomiendo usar nombres descriptivos: `feature/footer`, `fix/ajustes-mobile`, `assets/gifs`.
- Create branch based on... `dev`

Lo que hicimos acá, es copiar todo lo que haya en la rama **dev**, dentro de nuestra rama.


### Step 4: Remake, Remix, Rip-Off: Nuestros cambios
### Step 5: Commitear
### Step 6: Pushear
### Step 7: Pull request