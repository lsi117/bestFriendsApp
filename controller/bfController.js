const Shelters = require('../model/bfModel.js')

const bfController = {}

bfController.index = (req, res) => {
  Shelters.findAll().then((allData) => {
    console.log(allData)
    res.render('bfAllView',
      {allData: allData,
      auth: (req.user) ? true : false,})
  }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })};

      bfController.single = (req,res) =>{
    Shelters.findById(req.params.id)
    .then(allData =>{
      res.status(200).render('single.ejs',{
        allData: allData,
        auth: (req.user) ? true : false,
      })
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })
  }

    bfController.create = (req, res) =>{
    Shelters.create({
      name: req.body.name,
      zipcode: req.body.zipcode,
      description: req.body.description,
      pets: req.body.pets,
      }).then(allData =>{
      res.redirect(`/bfAllView/${allData.id}`)
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })
  }



  bfController.edit = (req,res) =>{
    Shelters.findById(req.params.id)
    .then(allData => {
      res.status(200).render('edit.ejs', {
        allData: allData,
        auth: (req.user) ? true : false,
      })
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })
    }


  bfController.update = (req,res) =>{
    Shelters.update({
      name: req.body.name,
      zipcode: req.body.zipcode,
      description: req.body.description,
      pets: req.body.pets,
    }, req.params.id)
    .then(allData =>{
      res.redirect(`/bfAllView/${allData.id}`)
    }).catch(err =>{
      console.log(err)
      res.status(500).json({err})
    })

  }

bfController.delete = (req, res) => {
  Shelters.destroy(req.params.id)
    .then(() => {
      res.redirect('/bfAllView');
    }).catch(err => {
      res.status(500).json({
        err,
      });
    });
};




module.exports = bfController
