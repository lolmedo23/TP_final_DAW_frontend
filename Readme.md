El codigo de este repositorio es el desarrollo del frontend del trabajo final de la materia Desarrollo de aplicaciones multiplataforma. 
El enunciado se encuentra en el archivo Trabajo Práctico Desarrollo de Aplicaciones Multiplataforma.pdf
Desde la UI podra navegar en diferentes dispositivos obteniendo valores de la ultima medicion de humedad para el dispositivo.
En cada dispositivo podra ingresar a ver losgs y mediciones del mismo. 
Otra opcion que permite la UI es abrir y cerar una valvula dentro de un dispositivo, en ese caso genera registros de logs y al cerrar genera una nueva medicion.

El proyecto se encuentra en dos repositorios
para descargar el backend, el repositorio es https://github.com/lolmedo23/TP_Final_DAW.git y para descargar el prontend el repositorio es https://github.com/lolmedo23/TP_final_DAW_frontend.git


Pasos para ejecutar el proyecto

generar una carpeta con el nombre backend 
        >mkdir backend
y dentro de ella 
>cd backend
ejecutar en consola en comando para clonar el repositorio:
    >git clone https://github.com/lolmedo23/TP_Final_DAW.git

descargara la carpeta TP_Final_DAW, ingresar a ella ejecutando 
>cd TP_Final_DAW/
para ejecutar el backend ejecutar
docker-compose -f docker-compose.yml up

Para descargar el frontend, posicionarse en la misma carpeta donde se descargo el backend o cualquier path  y crear una carpeta llamada frontend
>mkdir frontend
ingresar a la carpeta frontend
> cd frontend
clonar el repositorio
git clone https://github.com/lolmedo23/TP_final_DAW_frontend.git
ingresar a la carpeta del proyecto 
>cd TP_final_DAW_frontend/
cambiar al branch master
>git checkout master
dentro de la carpeta TP_final_DAW_frontend y ya en el branch master, ejecutar el siguiente comando:
>npm install
luego, ejecutar
>ionic serve
o 
>ionic serve –lab
para ver en formato Androir y ios



Detalle API

Obtener todos los dispositivos
    http://localhost:3000/dispositivos

Obtener un dispositivo
    http://localhost:3000/dispositivos/:idDispositivo

Obtener la ultima medicion de un dispositivo
    http://localhost:3000/medicion/:idDispositivo

Obtener todas las mediciones de un dispositivo
    http://localhost:3000/medicion/:idDispositivo/todas

Obtener los logs de riego de un dispositivo
    http://localhost:3000/logRiegos/:idDispositivo

Agregar una medicion
    http://localhost:3000/medicion/agregarMedicion 
        Body raw Json: 
        {"fecha":"2020-11-26 21:19:41",
        "valor":30,
        "dispositivoId":4
        }   

Agregar un Log
    http://localhost:8000/logRiegos/agregarLog
        Body raw Json:
        {
        "apertura":1,
        "fecha":"2020-11-26 21:19:41",
        "electrovalvulaId":4
        }