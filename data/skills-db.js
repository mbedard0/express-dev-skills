const skills = [
  {language: 'JavaScript', learned: true, _id:1},
  {language: 'Python', learned: false, _id:2},
  {language: 'Java', learned: false, _id:3},
  {language: 'C++', learned: false, _id:4},
  {language: 'Ruby', learned: false, _id:5}
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, todos)
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(todo, callback) {
  skills.done = false
  skills.push(todo)
  return callback(null, todo)
}

function findByIdAndDelete(id, callback) {
  try { 
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedTodo = skills.splice(idx, 1)
    if (!deletedTodo.length ) throw new Error ('No todo was deleted')
    return callback(null, deletedTodo[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}