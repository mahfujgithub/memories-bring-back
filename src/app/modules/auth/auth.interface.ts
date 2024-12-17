import { Model } from "mongoose";

export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  email: string;
  role: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type AuthModel = Model<ILoginUser, Record<string, unknown>>;