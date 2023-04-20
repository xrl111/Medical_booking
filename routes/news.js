const express = require('express');
const router = express.Router();
const News = require('../models/news');

// Get all news
router.get('/', async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one news
router.get('/:id', getNews, (req, res) => {
  res.json(res.news);
});

// Create one news
router.post('/', async (req, res) => {
  const news = new News({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    image: req.body.image

  });
  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one news
router.patch('/:id', getNews, async (req, res) => {
  if (req.body.title != null) {
    res.news.title = req.body.title;
  }
  if (req.body.content != null) {
    res.news.content = req.body.content;
  }
  try {
    const updatedNews = await res.news.save();
    res.json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one news
router.delete('/:id', getNews, async (req, res) => {
  try {
    await res.news.remove();
    res.json({ message: 'Deleted News' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get single news object by id
async function getNews(req, res, next) {
  let news;
  try {
    news = await News.findById(req.params.id);
    if (news == null) {
      return res.status(404).json({ message: 'Cannot find news' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.news = news;
  next();
}

module.exports = router;
