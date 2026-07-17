const { F_Select, F_Insert } = require('../controller/masterController');

const BankuraApiRouter = require('express').Router()
const db_id = 2

BankuraApiRouter.post("/get_res", async (req, res) => {
    var data = req.body.data
    var res_dt = await F_Select(db_id, data.select, data.table_name, data.where, data.order, data.flag);
    res.send(res_dt)
});

BankuraApiRouter.post("/data_insert", async (req, res) => {
    var data = req.body.data
    console.log(data);
    // console.log(new Date(fld[0].split('=')[1].trim()));
    // fld[0].split("=")[1] = new Date(fld[0].split("=")[1].trim());
    // fld = fld.join("=");
    // data.fields
    var res_dt = await F_Insert(db_id, data.table_name, data.fields, data.val, data.values, data.whr, data.flag);
    console.log(res_dt);
    res.send(res_dt);
});

module.exports = {BankuraApiRouter}