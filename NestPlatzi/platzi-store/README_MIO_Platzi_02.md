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

7.- Creacion de un controlador
    
    nest g controller controllers/products
    nest g controller controllers/products --flat (si no quiero que cree una carpeta por tipo de controlador)

8.- Creación de un servicio
    
    nest g s services/products 
    (nest g s services/products --flat (para no crear la subcarpeta) )

control de cambio
11-09-2024 Making the new proyect nest-events-
asss
git commit - m "02-10-2024 Updating the repo"
git commit -m "25-10-2024 Changing the repo to another farder in fospuca"
git commit -m "10-02-2025 Changing the repo to another farder in fospuca"
git commit -m "11-02-2025 Changing the repo to another farder in fospuca, course 9/23"
git commit -m "12-02-2025 I making the others controllers, first order, course 9/23"
git commit -m "13-02-2025 I making the others controllers, first customer, brand, user, course 9/23"
git commit -m "13-02-2025 I making the others controllers, first customer, brand, user, course 10/23"
git commit -m "14-02-2025 Using Imsomia, post course 11/23"
git commit -m "17-02-2025 Using Imsomia, post course 12/23 in the middle"
git commit -m "19-02-2025 Using Imsomia, put, delete course 12/23 in the middle"
git commit -m "20-02-2025 Using status code"

git commit -m "24-02-2025 Understanding service"
git commit -m "26-02-2025 Building a product service"
git commit -m "05-03-2025 Building a product service"
git commit -m "06-03-2025 Testing a product service"
git commit -m "07-03-2025 Testing a product service- Clase 16 de 23 - Manejo de errores con throw y NotFoundException"
git commit -m "10-03-2025 Testing a product service- Clase 17 de 23 - Starting class 17"
git commit -m "11-03-2025 Creating your on pipe- Clase 18 de 23 - Starting class 18"
git commit -m "12-03-2025 Creating your on pipe- Clase 18 de 23 - Starting class 18"
git commit -m "13-03-2025 Finiching creating your on pipe and startin Creating your DTO"
git commit -m "14-03-2025 Finiching Creating your DTO"
git commit -m "17-03-2025 Starting - 20 - Validation paranmetes "

git commit -m "21/03/2025 Creating the others components"

git commit -m "26/03/2025 Creating the others components"
git commit -m "31/03/2025 Creating categories entity"
git commit -m "01/04/2025 Creating customer entity"
git commit -m "02/04/2025 Creating user service"
git commit -m "04/04/2025 Creating BRAND service"
git commit -m "04/04/2025 Creating BRAND pipe"
git commit -m "08/04/2025 Creating ORDER with all validation"
git commit -m "09/04/2025 Updating until ORDER with all validation"

git commit -m "10/04/2025 Updating until BRAND CONTROLER"
git commit -m "11/04/2025 Updating until Customer CONTROLER"

git commit -m "14/04/2025 Updating category"
git commit -m "16-04-2025 Updating user, controler and servive. this is not finished"
git commit -m "21-04-2025 Updating user, controler and servive. this is not finished"
git commit -m "22-04-2025 Updating user, controler and servive finished but i have to test"

git commit -m "24-04-2025 I am testing user, controler and servive finished but i have to test"

git commit -m "25-04-2025 I tested the decorator POST in allitems"
git commit -m "28-04-2025 I tested the decorator POST in Order, Brand, Customer, User"
git commit -m "29-04-2025 I testing Category"
git commit -m "02-05-2025 I testing Category"



git commit -m "05-05-2025 finish course"
git commit -m "14-05-2025 refactur the project with the new course, class 2. I did product, categories and user"

git commit -m "15-05-2025 refactur the project with the new course, class 3. I did product, categories and user, but i have to move brands to products"

git commit -m "16-05-2025 I'm in clas 4. I updating the project find one orden with one product"
git commit -m "19-05-2025 I'm in clas 4. I updating the project find one orden with one product"




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
1.- git commit -m "Updating  - 07/02/2025"

