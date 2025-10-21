import { Injectable } from '@angular/core';
import {AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient, User} from "@supabase/supabase-js";
import {environment} from "../environments/environment";
import {Profile} from "./models/profile";

@Injectable({
  providedIn: 'root'
})
export class Supabase {
  private supabase: SupabaseClient
  _session: AuthSession | null = null
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  getSession() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    });
    return this._session;
  }

  getCurrentUser() {
    return this.supabase.auth.getUser();
  }

  getProfile(user: User) {
    return this.supabase
      .from('Profiles')
      .select(`id, user_id, name`)
      .eq('user_id', user.id)
      .single();
  }

  createProfile(profile: Partial<Profile>) {
    return this.supabase
      .from('Profiles')
      .insert([
        { user_id: profile.user_id, name: profile.name },
      ]);
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({
      email,
      password,
    });
  }

}
