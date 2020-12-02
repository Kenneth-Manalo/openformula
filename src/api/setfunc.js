const FormulaParser = require('hot-formula-parser').Parser;
const parser = new FormulaParser();

const setfunc = (req, res) => {

    if (Boolean(req.query.formula)) {
        parser.setFunction(req.query.name, function (params) {
            const arrVar = []
            const arrParam = []

            params.forEach(function (item, index) {
                arrVar.push('var' + index)
                arrParam.push(item)
            });

            var strVar = arrVar.join(",");
            var strParam = arrParam.join(",");

            const formula = new Function(strVar, req.query.formula);

            return formula(strParam)
        });
    }

    var resultObj = parser.parse(req.query.function);
    res.json(resultObj);
}

module.exports = setfunc