import * as skillsDB from '../data/skills-db.js'


function index(req, res) {
  skillsDB.find({}, function(error, skills) {
    res.render('skills/index', {
      skills,
      error
    })
  })
}

function show(req, res) {
  skillsDB.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill,
      error,
    })
  })
}

export {
  index,
  show
}