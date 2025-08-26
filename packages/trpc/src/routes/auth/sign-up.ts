import { publicProcedure, router } from "@/trpc";

 const signUp = router({
  signUp: publicProcedure
  .query(async () => 'Hello World')
 })

 export default signUp