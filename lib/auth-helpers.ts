import { db } from '@/lib/db';
import { users } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import type { User } from '@supabase/supabase-js';

/**
 * users 테이블에 사용자가 없으면 자동으로 생성
 * Supabase Auth와 DB 동기화
 */
export async function ensureUserExists(authUser: User): Promise<void> {
  console.log('[DEBUG] ensureUserExists - Checking user:', authUser.id);
  
  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.id, authUser.id));

  if (!existingUser) {
    console.log('[DEBUG] ensureUserExists - Creating user in database');
    await db.insert(users).values({
      id: authUser.id,
      email: authUser.email!,
      name: authUser.user_metadata?.name || authUser.email?.split('@')[0],
      avatar_url: authUser.user_metadata?.avatar_url,
    });
    console.log('[DEBUG] ensureUserExists - User created successfully');
  } else {
    console.log('[DEBUG] ensureUserExists - User already exists');
  }
}
