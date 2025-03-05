import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "~/server/api/routers/user";
import { gameRouter } from "~/server/api/routers/game";
import { matchmakingRouter } from "~/server/api/routers/matchmaking";
import { chatRouter } from "~/server/api/routers/chat";

export const appRouter = createTRPCRouter({
  user: userRouter,
  game: gameRouter,
  matchmaking: matchmakingRouter,
  chat: chatRouter,
});

export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
