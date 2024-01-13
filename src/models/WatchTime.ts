import { DataTypes, Model } from "sequelize";
import { database } from "../database/index.js";


export interface WatchTimeAttributes {
  seconds: number;
  userId: number;
  episodeId: number;
}

export interface WatchTimeInstance extends Model<WatchTimeAttributes>, WatchTimeAttributes {}

export const WatchTime = database.define<WatchTimeInstance, WatchTimeAttributes>("WatchTime", {
  seconds: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: { model: "users", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  episodeId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: { model: "episodes", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
});
