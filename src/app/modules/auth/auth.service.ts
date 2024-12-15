import { Secret } from 'jsonwebtoken';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { ILoginUser, ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';


const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const httpStatus = await import('http-status-ts');
  const { email, password } = payload;

  //   check user existence
  const isUserExist = await User.isUserExist(email);

  if (!isUserExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(
      httpStatus.HttpStatus.UNAUTHORIZED,
      'Password is incorrect!',
    );
  }

  //   create access token & refresh token
  const { email: userEmail, password: userPassword } = isUserExist;

  const accessToken = jwtHelpers.createToken(
    { userEmail, userPassword },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = jwtHelpers.createToken(
    { email, password },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  const httpStatus = await import('http-status-ts');

  let verifiedToken = null;

  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret,
    );
  } catch (err) {
    throw new ApiError(
      httpStatus.HttpStatus.FORBIDDEN,
      'Invalid refresh token!',
    );
  }

  const { userId } = verifiedToken;

  const isUserExist = await User.isUserExist(userId);

  if (!isUserExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
  }

  // generate new token

  const newAccessToken = jwtHelpers.createToken(
    {
      email: isUserExist.email,
      password: isUserExist.password,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  loginUser,
  refreshToken
};
