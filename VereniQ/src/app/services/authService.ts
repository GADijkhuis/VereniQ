import {Supabase} from "../supabase";

export async function signUpUser(email: string, password: string): Promise<{ success: boolean; message: string }> {
  const supabase = new Supabase();
  const response = await supabase.signUp(email, password);
  console.log(response);
  if (response.error) {
    return { success: false, message: response.error.message };
  } else {
    return { success: true, message: 'User signed up successfully' };
  }
}
