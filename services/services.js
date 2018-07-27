var sql = require('mssql');
var config = require('../config');

function getProcesos(req, response) {   //get all
//--------------
var conn = new sql.ConnectionPool(config.datasources);
conn.connect().then(function () {
    var request = new sql.Request(conn);
    request.query("select * from testing").then(function (recordSet) {
        console.log(recordSet.recordsets);
        response.json(recordSet.recordsets);
        conn.close();

    }).catch(function (err) {
        console.log(err);
        conn.close();
    });
}).catch(function (err) {
    console.log(err);
});
//------------
};

module.exports = {
    getProcesos
};
