import { createClient } from '@/lib/supabase/server';
import { db } from '@/lib/db';
import { user_settings } from '@/drizzle/schema';
import { ensureUserExists } from '@/lib/auth-helpers';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
    }

    await ensureUserExists(user);

    let [settings] = await db
      .select()
      .from(user_settings)
      .where(eq(user_settings.user_id, user.id));

    if (!settings) {
      [settings] = await db
        .insert(user_settings)
        .values({
          user_id: user.id,
          llm_provider: 'lmstudio',
          llm_model: 'kimi-k2-thinking',
        })
        .returning();
    }

    return NextResponse.json({ success: true, data: settings });
  } catch (error) {
    console.error('설정 조회 실패:', error);
    return NextResponse.json(
      { success: false, error: { code: 'FETCH_ERROR', message: '설정 조회에 실패했습니다' } },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
    }

    await ensureUserExists(user);

    const body = await request.json();

    const [updatedSettings] = await db
      .update(user_settings)
      .set({
        ...body,
        updated_at: new Date(),
      })
      .where(eq(user_settings.user_id, user.id))
      .returning();

    return NextResponse.json({ success: true, data: updatedSettings });
  } catch (error) {
    console.error('설정 수정 실패:', error);
    return NextResponse.json(
      { success: false, error: { code: 'UPDATE_ERROR', message: '설정 수정에 실패했습니다' } },
      { status: 500 }
    );
  }
}
