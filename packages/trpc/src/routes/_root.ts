import { router } from "@/trpc";
import signUp from "./auth/sign-up";

export const appRouter = router({
    auth: signUp
})

export type AppRouter = typeof appRouter;