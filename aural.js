module.exports = function Aural(name, schema, voice){
    this.name = name
    this.schema = schema
    this.voice = voice
}

function printAural(schema) {
  console.log(schema.name)
  console.log(schema.schema)
  console.log(schema.voice)
}
