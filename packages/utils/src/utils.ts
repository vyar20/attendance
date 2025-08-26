import argon from 'argon2';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ZodSafeParseError } from 'zod';

export const isServer = typeof window === 'undefined' && typeof document === 'undefined';

export const hashPassword = async (password: string) =>
  await argon.hash(password, {
    type: argon.argon2id,
    memoryCost: 2 * 32,
    timeCost: 3,
    parallelism: 1,
  });

export const verifyPassword = async (hash: string, password: string) =>
  await argon.verify(hash, password);

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const p = <T>(promise: Promise<T>): Promise<[null, T] | [Error]> =>
  promise.then((data) => [null, data] as [null, T]).catch((err) => [null, err]);

export enum HTTPCode {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export enum HTTPCodeText {
  OK = 'OK',
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unauthorized',
  NOT_FOUND = 'Not Found',
  CONFLICT = 'Conflict',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
}

export const zodValidationHelper = <T>(parsed: ZodSafeParseError<T>)  => parsed.error.issues.map(err => err.message)