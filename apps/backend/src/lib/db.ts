import { db, LogStatus, LogType, Prisma, User } from "@repo/db/index";
import { Request } from "express";

export const saveToLog = async (
  req: Request,
  type: LogType,
  status: LogStatus,
  message: string,
  error?: Error,
) => {
  const user = req.user as User;
  const ipAddress = req.ip;
  const userAgent = req.get("User-Agent");

  return await db.log.create({
    data: {
      type,
      status,
      message,
      ipAddress,
      userAgent,
      userId: user?.id,
      error: error ? (error as unknown as Prisma.InputJsonValue) : undefined,
    },
  });
};
