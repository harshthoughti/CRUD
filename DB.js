//create

const userSchema = new mongoose.schema({

  Name : String,

  phoneNumber : Number,

  empCode : Number

});

const User = mongoose.model("User",userSchema)

const user1 = new User({

  Name : Rahul,

  phoneNumber : 123456,

  empCode : 2348623

});

user1.save();


const user2 = new User({

  Name : Ravi,

  phoneNumber : 451426,

  empCode : 1256326

});

user2.save();

//read

User.find().limit(1);

//update

User.updateOne({

  {_id : }, //specific id of 1st document
  {Name : Pranay}

});

//delete

User.deleteOne({ phoneNumber : 1256326 });
