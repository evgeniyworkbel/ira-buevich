/** Taken from zod https://github.com/colinhacks/zod/blob/main/packages/zod/src/v4/core/regexes.ts */
export const EMAIL_REGEXP: RegExp =
  /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
