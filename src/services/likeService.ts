import { Like } from "../models/Like.js";

export const likeService = {
  create: async (userId: number, courseId: number) => {
    const like = Like.create({
      userId,
      courseId,
    });
    return like;
  },
  delete: async (userId: number, courseId: number) => {
    const favorite = Like.destroy({
      where: { userId, courseId },
    });
    return favorite;
  },
  isLiked: async (userId:number, courseId: number) =>{
    const like = await Like.findOne({where: {userId, courseId}})
    return like !== null ? true : false
  }
};
