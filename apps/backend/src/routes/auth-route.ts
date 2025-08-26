import { saveToLog } from "@/lib/db";
import passport from '@/lib/passport';
import { User } from "@repo/db/index";
import { HTTPCode } from "@repo/utils/utils";
import { Router } from "express";
import { IVerifyOptions } from "passport-local";

export const authRoute: Router = Router();

authRoute.post("/credentials/sign-in", (req, res, next) =>
  passport.authenticate(
    "local",
    async (err: Error, user: User, info: IVerifyOptions) => {
      if (err) {
        const log = await saveToLog(req, "SIGN_IN", "ERROR", info.message, err);
        return res
          .status(HTTPCode.INTERNAL_SERVER_ERROR)
          .json({ message: err.message, id: log.id });
      }
      if (!user) {
        const log = await saveToLog(
          req,
          "SIGN_IN",
          "ERROR",
          "User or password not matched",
          err,
        );
        return res
          .status(HTTPCode.UNAUTHORIZED)
          .json({ message: info.message });
      }
      req.logIn(user, async (err) => {
        if (err) {
          const log = await saveToLog(
            req,
            "SIGN_IN",
            "ERROR",
            "Failed to login user",
            err,
          );
          return res
            .status(HTTPCode.INTERNAL_SERVER_ERROR)
            .json({ message: err.message, id: log.id });
        }

        await saveToLog(
          req,
          "SIGN_IN",
          "SUCCESS",
          `${user.email} Signed in successfully`,
        );

        return res.status(HTTPCode.OK).json({ message: info.message, user });
      });
    },
  )(req, res, next),);

export default authRoute;
