import supabase from "./supabase";
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  //1. Check if session is there
  const { data: session } = await supabase.auth.getSession();
  //2 If no session, return.
  if (!session.session) return null;
  //3. If yes, return the user
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  console.log(data);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
