const express = require('express');
const router = express.Router();
const kal = require('./schema')

router.get('/courses', async (req, res) => {
    try{
        const exist = await kal.findOne();
        
            res.status(200).json(exist.kalvium);
        
    } catch(e){
        res.status(500).json({ error: e.message})
    }
})

router.get('/courses/:courseName', async (req, res) => {
    const courseName = req.params.courseName;
    try {
      const check = await kal.findOne();
      const course = check.kalvium.find(c => c.course === courseName);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router