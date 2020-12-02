const FormulaParser = require('hot-formula-parser').Parser;
const parser = new FormulaParser();

const setvar = (req, res) => {

    var array = req.query.variables;
    array.forEach(function (item, index) {
        item = JSON.parse(item);
        var key = Object.keys(item)[0];
        parser.setVariable(key, item[key]);
    });

    var resultObj = parser.parse(req.query.formula);

    res.json(resultObj);
}

module.exports = setvar