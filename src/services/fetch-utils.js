import { client, checkError } from './client';

export const signUp = async (email, password) => {
  const response = await client.auth.signUp({ email, password });
  return response.user;
};

export const signIn = async (email, password) => {
  const response = await client.auth.signIn({ email, password });
  return response.user;
};

export const logout = async () => {
  await client.auth.signOut();
  location.replace('./auth');
};
