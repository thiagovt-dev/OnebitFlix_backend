import { Response } from "express";
import { AuthorizationRequest } from "../middlewares/auth.js";
import { userService } from "../services/userService.js";

export const usersController = {
    watching: async (req: AuthorizationRequest, res: Response)=>{
        const {id} = req.user!

        try {
            const watching = await userService.getKeepWatchList(id)
            return res.json({watching})
        } catch (err) {
            if (err) {
              if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
              }
            }
        }
    }
}