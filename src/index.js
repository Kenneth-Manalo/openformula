const openFormula = require('./app')
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || '8080'

openFormula()
    .then(app => app.listen(port))
    .then(() => {
        console.log('Server started')
    })
    .catch(err => {
        console.error('caught error', err)
    })