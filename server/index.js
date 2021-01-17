require('dotenv').config();

const app = require('./app');

app.set('port', process.env.PORT || 3000 );
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}`);
});