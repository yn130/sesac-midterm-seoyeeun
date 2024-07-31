const express = require('express');
const app = express();
const PORT = 8080;
const todoRouter = require('./routes/todo');
const { sequelize } = require('./models/index')



app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use('/todos', todoRouter);

sequelize 
    // force: true; 서버 실행때 마다 테이블을 재 생성
    // force: false; 서버 실행 시 테이블이 없으면 생성
    .sync({ force: false})
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connection successed!');
            console.log(`Server is running! Port number is ${PORT} ...`);
        })
    })
    .catch((err) => {
        console.error(err);
    })