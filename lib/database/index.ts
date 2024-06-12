import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
//reade up serveless function/environment

//initialise a caced variable
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGO_URI) throw new Error("MONGO_URI is MISSING");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: "evently",
      bufferCommands: false,
    });


cached.conn = await cached.promise;

return cached.conn;

  // if(cached.promise){
  //     return cached.promise;
  // }
  // const promise = mongoose.connect(process.env.MONGO_URI,{
  //     useNewUrlParser:true,
  //     useUnifiedTopology:true,
  //     useCreateIndex:true,
  //     useFindAndModify:false,
  // });
  // cached.conn = mongoose.connection;
  // cached.promise = promise;
  // return promise;
};
