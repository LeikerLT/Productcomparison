import { Schema, models, model, Model } from "mongoose";

export interface IUser {
    _id: string;
    username: string;
    password: string;
    name: string;
    surname: string;
    email: string;
}

const UserSchema: Schema = new Schema<IUser>({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    surname: { type: String },
    email: { type: String },
});

export const User: Model<IUser, {}, {}, {}, any> = models.users
    ? models.users
    : model<IUser>("users", UserSchema);
