import { UserModel } from "../../models/User.model.js"

export const userRepository = {
    findByGoogleId : async (id) => UserModel.findOne({googleId:id}),
    create : async (userData) => new UserModel(userData).save(),
}