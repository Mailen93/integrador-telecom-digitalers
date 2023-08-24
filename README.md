# Manejo de NPM

# Instalar dependencia de PROYECTO:
Se va a agregar una propiedad en package.json => dependencies
https://npmjs.com/package/bootstrap

npm i <nombre-de-dependencia>
npm i bootstrap@latest #Ultima version
npm i bootstrap@5.0.1 #Instalación de versión específica

# Para instalar una dependencia (libreria, biblioteca) de DESARROLLO:
npm i <nombre-de-dependencia>
npm i nombreDependencia --save-dev #versión de bandera (flag)
npm i vite@latest -D #Versión corta


# Para desinstalar una dependencia
npm uninstall <nombre-el-paquete>

# ¿Que significan los simbolos en las dependencias y devDependencias?
= o (sin simibolo): Congelo la versión actual y no se actualiza a menos que específicamente le diga

(caret) [acento circunflejo]: Va a congelar solo la versión mayor (primer numerito), va a poder actualizarse a versiones compatibles y parches

 (virgurilla) [tilde ]: va a congelar la version mayor y menor, solo se va a poder actualizar los parches (el 3er numerito)

## IMPORTANTE: Hay varias herramientas para el manejo de dependencias:
* npm
* yarn
* pnpm

**NOTA**: Si empiezo a trabajar un poroyecto con npm, no cambio de herramienta durante todo el proceso o ciclo de vida del desarrollo. Lo mismo con yarn y pnpm.

# Para verificar si hay una nueva versión de la lkibrería que tengo:
npm outdated: Me permite chequear con respecto al repositorio de npmjs, si hay una actualización de las librerías que estoy usando