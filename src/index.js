const openFormula = require('./app')

openFormula()
    .then(app => app.listen(3005))
    .then(() => {
        console.log('Server started')
    })
    .catch(err => {
        console.error('caught error', err)
    })