import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { db } from "@repo/db/index";
import { env } from '@repo/env/index';
import { appRouter, createTRPCContext, trpcExpress } from '@repo/trpc/index';
import express from "express";
import session from "express-session";
import passport from "passport";
import authRoute from "./routes/auth-route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: env.NODE_ENV === "production" },
    store: new PrismaSessionStore(db, {
      checkPeriod: 2 * 60 * 1000, // prune expired entries every 2 minutes
    }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute);

app.use('/trpc', trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext: createTRPCContext
}))

app.listen(env.PORT, () => {
  console.log(`Server is running at http://localhost:${env.PORT}`);
});
