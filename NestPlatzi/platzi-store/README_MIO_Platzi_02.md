# Rutas_Desarrollo - Inicio - 04-09-2024
Aprendizaje Ruta Desarrollo Fospuca
ruta:
    Curso de Backend con NestJS


ruta en casa:

    C:\Users\Magahr\Documents\cursos\Udemy-Principal
        C:\Users\Magahr\Documents\cursos\Udemy-Principal\Rutas_de_Desarrollo\NestPlatzi\platzi-store

ruta en trabajo:
    C:\Users\mhernandez.FOSPUCA\Documents\cursos\Udemy-Principal
         C:\Users\mhernandez.FOSPUCA\Documents\cursos\Udemy-Principal\Rutas_de_Desarrollo\NestPlatzi\platzi-store
   
Pasos:

1.- Bajar e instalar node js
   node-v20.17.0-x64.msi
   salir de visual code y volver a entrar 



1.- Instalar Nest
    npm install -g @nestjs/cli

    npm install  (en caso de cambiar de directorio o de dispositivo y debes hacerlo desde la carpeta del proyecto, en este caso platzi-store)

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

3.- Crear un nuevo projecto
    nest new platzi-store

4.- Entrar a la carpeta del proyecto
    cd platzi-store

5.- Iniciar el servidor de desarrollo o cuando se baja el repositorio a otra instalacion
    npm run start:dev

6.- Verificar el sitio 
    localhost:3001

    Para que esta ocupado en ese pueto:
    netstat -ano | findstr :3001

    Para cambirlo:
      netstat -ano | findstr :3000

      se hace en:
        main.ts en la carpeta src


control de cambio
11-09-2024 Making the new proyect nest-events-
asss
git commit - m "02-10-2024 Updating the repo"
git commit -m "25-10-2024 Changing the repo to another farder in fospuca"






..
  

   npm install --global yarn

3.- Installing the NestJSCLI
   yarn global add @nestjs/cli

4.- Ver la version 
    nest -v

    En caso que el pot 4 no funciones:
      npm install -g @nestjs/cli

      verificar que este en 
      npm list -g --depth=0 (ver si  esta @nestjs/cli  )

5.- Crear el proyecto
   nest new nestjs-tast-management


Control de Cambio
1.- 15-09-2024
    git commit -m "Fist Commit - configuration"

2.- "23-09-2024 Making the new proyect nest-events-
asss"
    
