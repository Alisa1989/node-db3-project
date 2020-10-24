const { innerJoin } = require("../data/config")
const db = require("../data/config")

function find(){
        return db("schemes")  
}

function findById(id){
    return db("schemes")
    .where({id})
}

function findSteps(id){
    return db("schemes as sc")
    .innerJoin("steps as st", "st.scheme_id", "sc.id")
    .where("st.scheme_id", id)
    .select("sc.scheme_name","st.step_number","instructions")
}

function add(schema){
    // const [id] = db("schemes")
    // .insert(schema)
    // const newSchema = db("schemes").where({id}).first()
    // return newSchema
    return db("schemes").insert(schema)
}

function update(changes, id) {
    return db('schemes').where('id', id).update(changes)
  }

function remove(id){
    return db("schemes")
    .where("id", id)
    .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

