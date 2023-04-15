const express = require('express');
const { Patient } = require('../models/models.js');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phone, address } = req.body;
  
    try {
      const patient = await Patient.create({ name, email, phone, address });
      res.status(201).json(patient);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

router.get('/', async (req, res) => {
    try {
      const patients = await Patient.find();
      res.json(patients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const patient = await Patient.findById(id);
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      res.json(patient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
  
    try {
      const patient = await Patient.findByIdAndUpdate(
        id,
        { name, email, phone, address },
        { new: true }
      );
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      res.json(patient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;
