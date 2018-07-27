# ExposeMssql
servidor nodejs / mssql


# instalacio

npm install 

# run

node app.js   /  nodemon app


# Config
El archivo config tiene cosas que no uso, lo que si puse ahi son las credenciales para conectarse a sql server ( ahi pon tus credenciales de autentificacion con sql server):

"datasources": {
        "user": 'sa',
        "password": 'adsttt123',
        "server": 'localhost',
        "database": 'test',
        "port": '1433'
    },

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



