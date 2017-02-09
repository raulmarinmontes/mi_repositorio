
- Página actual: http://www.buscandoanemo.davidgomezq.com
- Página antigua: http://www.buscandoanemo.davidgomezq.com/old/
- Página del documento DRIVE: https://docs.google.com/document/d/1dBaB1eF_Ox0vH26HPM-wskxT4i5a_NBSvV7e0eC9iuA/edit

<h1>IMPORTANTE:</h1>

En el documento de **accesibilidad** tambien hay que añadir la validación de HTML y CSS. Cada uno hay que hacerla de la siguiente manera.

- **HTML** (https://validator.w3.org): Se pasan las páginas antiguas y las nuevas, se comenta lo que se ha solucionado de manera independendiente en cada una.
- **CSS** (http://jigsaw.w3.org/css-validator): Van a salir 1012381248732 errores asi que no hay que hacerle caso, porque son de las librerias que hemos utilizado. Se indica en el documento que los errores de CSS son causados por el uso de librerias externas (Bootstrap, Font-awesome...) y despues hay que indicar que los errores que teniamos eran por repetir el mismo color en los borders y backgrounds y que no son relevantes.
- **AA** (http://www.tawdis.net): Hay que meter las páginas antiguas y compararlas con las nuevas. Los errores que aparezcan se indica que no son necesarios solucionarlos porque blablablabla....


# Pagina de demostración

http://buscandoanemo.davidgomezq.com/

# Template Buscando a Nemo.
Links de interes
  - http://librosweb.es/libro/bootstrap_3/
  - http://getbootstrap.com/getting-started/
  - http://getbootstrap.com/examples/theme/
  - https://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez

# Comandos GIT de interes
Clonar el respositorio

```sh
$ git clone https://github.com/CeliaAlonso/RepositorioWebDAW.git
```

Volver a un commit y borrar todos los posteriores

```sh
$ git reset --hard 9744dde320765dbfc6e80559aca47271d4ce3945
```

Subir un nuevo commit

```sh
$ git add .
$ git commit -m "DESCRIPCIÓN DEL COMMIT"
$ git push
```

Actualizar el respositorio (IMPORTANTE HACER ANTES DE COMENZAR A TRABAJAR)

```sh
$ git pull
```

Configurar proxy de clase

```sh
$ git config --global http.proxy http://213.0.88.85:8080
$ git config --global https.proxy http://213.0.88.85:8080
```

Configurar usuario

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

# Documentación

Link:
  - https://drive.google.com/folderview?id=0B6eStVXbDuBYYVdRZXFvUWE0TEU&usp=sharing
