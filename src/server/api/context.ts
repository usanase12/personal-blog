import { db } from '../db'; // adjust if needed

export async function createContext() {
  return { db };
}
export type Context = Awaited<ReturnType<typeof createContext>>;