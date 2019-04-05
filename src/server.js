import express from 'express';
import db from './config/db';
import user from './routes/user'

const app = express();

db.authenticate()
    .then(() => console.log('Database is connected...'))
    .catch((err) => console.log(err))
    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({message : 'welcome to weather app'})    
})
app.use('/user', user);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

export default app;