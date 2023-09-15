const Schema = mongoose.Schema;
const productSchema = new Schema({
    articleNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      description: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      price: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      picture: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      category: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      numberAvailable: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
});

const customerDataSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      phoneNumber: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: false,
      },
      email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      city: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },     
      postcode: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
      address: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        lowercase: true,
      },
});