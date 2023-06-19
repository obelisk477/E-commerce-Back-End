const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res, next) => {
  // find all tags
  // be sure to include its associated Product data
  console.log(`\n${req.method} request recieved from ${req.rawHeaders[3]}\n`)
  try {
    const tagsData = await Tag.findAll({
      include: [
        {model: Product, through: ProductTag, as: 'products'}
      ]
  })
    res.status(200).json(tagsData)
  } catch (err) {
    next(err)
  }
});


// find a single tag by its `id`
router.get('/:id', async (req, res, next) => {
  try {
    const singleProdData = await Tag.findByPk(req.params.id, {
      include: [
        {model: Product, through: ProductTag, as: 'products'}
      ]
    })

    if (!singleProdData) {
      res.status(404).json({message: 'No tag found with this id'})
    }

    res.status(200).json(singleProdData)

  } catch (err) {
      next(err)
  }
});

router.post('/', (req, res, next) => {
  // create a new tag
  /* req.body should look like this...
    {
      "tag_name": "purple"
    }
  */
    Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      next(err)
    });
});

router.put('/:id', (req, res, next) => {
  // update a tag's name by its `id` value
  try{
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    })

    res.status(200).json({message: `Tag ${req.params.id} updated!`})

  } catch (err) {
      next(err)
  }
});

router.delete('/:id', async (req, res, next) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!tagData) {
      res.status(404).json({message: 'No tag found with this id!'})
    }

    res.status(200).json(tagData)

  } catch (err) {
      next(err)
  }
});

module.exports = router;
