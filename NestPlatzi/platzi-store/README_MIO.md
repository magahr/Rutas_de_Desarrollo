# Rutas_de_Desarrollo

# Rutas_Desarrollo - Inicio - 04-09-2024
Aprendizaje Ruta Desarrollo Fospuca
ruta:
    Curso de Backend con NestJS
   
Pasos:


1.- Bajar e instalar node js
   node-v20.17.0-x64.msi
   salir de visual code y volver a entrar 

1.- Instalar Nest
    npm install -g @nestjs/cli

   verificar que este en 
    npm list -g --depth=0 (ver si  esta @nestjs/cli  )
    nest  --help
   (deberia mostrar todos los comandos)
    nest -v
   (debria mostrar la version)

2.- Instalar en Visual Code
    
    ESLint  
    Prettier 
    EditorConfig
    Material Icon Theme

3.- Crear un nuevo projecto
    nest new platzi-store

4.- Entrar a la carpeta del proyecto
    cd platzi-store

5.- Iniciar el servidor de desarrollo
    npm run start:dev   (se activa el servidor y se pueden hacer modificaciones sin necesidad de reiniciar el servidor )

6.- Verificar el sitio 
    localhost:3000

7.- En caso que no funcione escribir:
   
    npm install @nestjs/common

8.- Crear el archivo 
    .editorconfig (permite manejar el mismo estandar en los editores) 
    ruta:
    NestPlatzi\platzi-store
    Rutas_de_Desarrollo\NestPlatzi\platzi-store\.editorconfig

9.-  Creacion de controladores desde la consola

      nest g cor controllers/categories --flat
      src/controllers/categories.controller.ts (aqui es donde queda)

10.- 








Control de cambio al 09/10/2024

git commit -m "03-10-2024 Starting - Configuration - Video 5  de 23"

git commit -m "04-10-202 - My first commit - understanding" 

git commit -m "07-10-2024 - Understandig GET - with params - I'm going the GET: parámetros query8 / 23 video" 

git commit -m "09-10-2024 - Updating news products and catergories that make with the console  9 / 23 video" 

what happend


