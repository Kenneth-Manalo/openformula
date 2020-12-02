const FormulaList = require('hot-formula-parser').SUPPORTED_FORMULAS;

const formulalist = (req, res) => {

    res.json({
        formulas: FormulaList
    })
}

module.exports = formulalist