const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res, next) => {
  // find all categories
  console.log(`\n${req.method} request recieved from ${req.rawHeaders[3]}\n`)
  try {
    const categoryData = await Category.findAll({
      include: [
        {model: Product}
      ]
  })
    res.status(200).json(categoryData)
  } catch (err) {
      next(err)
  }
});

router.get('/:id', async (req, res, next) => {
  // find one category by its `id` value
  try {
    const singleCatData = await Category.findByPk(req.params.id, {
      include: [
        {model: Product}
      ]
    })

    if (!singleCatData) {
      res.status(404).json({message: 'No category found with this id'})
    }

    res.status(200).json(singleCatData)

  } catch (err) {
      next(err)
  }
});


// create a new category
router.post('/', (req, res, next) => {
  /* req.body should look like this...
    {
      category_name: "Basketball"
    }
  */
    Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      next(err)
    });
});


// update a category by its `id` value
router.put('/:id', (req, res, next) => {
  try{
    Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })

    res.status(200).json({message: `Category ${req.params.id} updated!`})

  } catch (err) {
      next(err)
  }

});


// delete a category by its `id` value
router.delete('/:id', async (req, res, next) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!categoryData) {
      res.status(404).json({message: 'No category found with this id!'})
    }

    res.status(200).json(categoryData)

  } catch (err) {
      next(err)
  }
});

module.exports = router;
