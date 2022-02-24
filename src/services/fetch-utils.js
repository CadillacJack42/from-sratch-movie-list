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

export const updateWatchlist = async (movie) => {
  const response = await client.from('watch_list').insert([movie]);
  checkError(response);
};

export const myWatchList = async (user_id) => {
  const response = await client.from('watch_list').select().order('watched').match({ user_id });
  return checkError(response);
};

export const markWatched = async (id) => {
  const response = await client.from('watch_list').update({ watched: true }).match({ api_id: id });
  return checkError(response);
};
export const clearWatchList = async (user_id) => {
  const response = await client.from('watch_list').delete().match({ user_id });
  return checkError(response);
};
