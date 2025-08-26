import { db } from "@repo/db/index";
import { HTTPCodeText, p, verifyPassword } from "@repo/utils/index";
import { signInValidation } from "@repo/validations/index";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const parsed = signInValidation.safeParse({ email: username, password });
    if (!parsed.success)
      return done(null, false, { message: HTTPCodeText.BAD_REQUEST });

    const [err, user] = await p(
      db.user.findFirst({
        where: { email: parsed.data.email },
      }),
    );

    if (err)
      return done(err, false, { message: HTTPCodeText.INTERNAL_SERVER_ERROR });

    if (!user)
      return done(null, false, {
        message: "Email or password combination not matched",
      });

    const checkPassword = await verifyPassword(user.password!, password);

    if (!checkPassword) {
      return done(null, false, {
        message: "Email or password combination not matched",
      });
    }

    return done(
      null,
      {
        ...user,
        password: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      } as unknown as Express.User,
      {
        message: "Sign in success",
      },
    );
  }),
);

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser(async (user: Express.User, done) => done(null, user));

export default passport;
