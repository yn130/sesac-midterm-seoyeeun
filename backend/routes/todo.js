
const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo')

router.post('/', controller.add) ; // 추가 
router.get('/', controller.getTodo); // 조회
router.get('/:id', controller.findId) ;  // 특정 id 조회
router.patch('/:id', controller.edit) ;  // 수정
router.delete('/:id', controller.delete) ;  // 삭제

module.exports = router;