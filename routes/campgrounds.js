const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');

const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isCampgroundAuthor, validateCampground } = require('../middleware');

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground))

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isCampgroundAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isCampgroundAuthor, catchAsync(campgrounds.deleteCampground))

router.get('/:id/edit', isLoggedIn, isCampgroundAuthor, catchAsync(campgrounds.renderEditForm))

module.exports = router;