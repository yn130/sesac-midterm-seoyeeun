const { todo } = require('../models/index');
// const { Op } = require('sequelize');

// 추가
exports.add = async(req, res) => {
    try {
        console.log(req.body)
        const { title, done } = req.body;
        const newTodo = await todo.create({
            title,
            done,
        });
        res.json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};



// 전체 조회
exports.getTodo = async(req, res) => {
    try {
        const todos = await todo.findAll();
        res.json(todos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }


}


// 특정 id 조회
exports.findId = async(req,res) => {
    try { 
        const { id } = req.params;

       
        const todo = await todo.findOne({
            where: { id }
        });

        res.json(todo); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


// 수정
exports.edit = async(req,res) => {
    try {
        const { id } = req.params;

        
        const updatedTodo = await todo.update(
            { done }, 
            { where: { id }} 
        );

        res.json(updatedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


// 삭제
exports.delete = async(req,res) => {

try {
        const { id } = req.params;
        const isDeleted = await todo.destroy({
            where: { id }
        });
        console.log(isDeleted);

        if (isDeleted) {
            return res.send(true);
        } else {
            return res.send(false);
        }
    }  catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}