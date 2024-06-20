const mongoose = require('mongoose')

mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI

console.log('connecting to', url)

if (url && !mongoose.connection.readyState) mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  number: {
    type: String,
    minlength: 8,
    validate: {
      validator: function(value) {
        return /\d{2,3}-\d+/.test(value);
      },
      message: props => props.value+" is not a valid phone number"
    },
  }
})

PersonSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Person', PersonSchema)