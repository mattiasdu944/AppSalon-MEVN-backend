import mongoose from "mongoose";

export const validateObjectId = ( id ) => {
    if( !mongoose.Types.ObjectId.isValid(id) ){
        return false;
    }
    return true;
}