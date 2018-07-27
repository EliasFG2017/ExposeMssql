# ExposeMssql
servidor nodejs / mssql


# instalacio

npm install 

# run

node app.js   /  nodemon app


# Config
El archivo config tiene cosas que no uso, lo que si puse ahi son las credenciales para conectarse a sql server ( ahi pon tus credenciales de autentificacion con sql server) . EN mi caso el server es localhost ( localhost//SQLEXPRESS si instalaste el sql express), cree la bd de pruebas test, El puerto por defecto es el 1433( lo pongas a mano o no):

https://ibb.co/nO39To


# SQL SERVER
tienes que tener esta opcion habilitada:
https://www.dundas.com/support/learning/documentation/install-configure/how-to-enable-sql-server-authentication

En configuration manager de tu sql server
Ademas fijarte que el  server browser de sql server este activo. Sino esta activo busca como activar el servicio:
https://ibb.co/kEqaJo

Tambien esto
https://ibb.co/i64Kdo

el user por defecto de sql server auth es 'sa' y la pass nose. Si quieres cambiarselas puedes hacerlo desde el mssql studio

https://www.bitdefender.com/support/how-to-reset-sql-server-sa-password-using-microsoft-sql-server-management-studio-express-787.html

# exponer el sv al mundo
npm install -g localtunnel

Iniciar el sv en consola.

En otra consola ir al sv y usar:

lt --port XXXX --subdomain YYYYY

EL puerto tiene que ser el mismo en el que corre tu sv, en config puse 2200, y de ahi lo saca el sv. Cambialo si queires.
El subdomain es para que no te tire una pagina random.Sino que te genere algo siempre igual. EL YYYY es un numero.
En mi caso lo uso con mi rut:

lt --port 2200 --subdomain 176566477


me genera la pagina:
https://176566477.localtunnel.me

Resultado:
https://ibb.co/gmBPuT


Aun no haga para recibir todo por post( para enviar los parametros en el body y no en la url). Pero igual se puede usar asi como esta si no te complica mandar los parametros por url siempre:  ' asdassdasda/:param/:param1/etcc'.

Tambien tiene el util reply. Pero aun no lo incluyo. Para dar las respuesta custom que usan en dtic( es mas bonito responder con algo custom que un 200 y algo. Pero no es necesario)







