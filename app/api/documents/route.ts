import { createClient } from '@/lib/supabase/server';
import { db } from '@/lib/db';
import { documents } from '@/drizzle/schema';
import { createDocumentSchema } from '@/lib/validators';
import { ensureUserExists } from '@/lib/auth-helpers';
import { NextResponse } from 'next/server';
import { eq, and, isNull, desc } from 'drizzle-orm';

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

    const userDocuments = await db
      .select()
      .from(documents)
      .where(and(eq(documents.user_id, user.id), isNull(documents.deleted_at)))
      .orderBy(desc(documents.created_at));

    return NextResponse.json({ success: true, data: userDocuments });
  } catch (error) {
    console.error('문서 조회 실패:', error);
    return NextResponse.json(
      { success: false, error: { code: 'FETCH_ERROR', message: '문서 조회에 실패했습니다' } },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
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
    const validatedData = createDocumentSchema.parse(body);

    const [document] = await db
      .insert(documents)
      .values({
        user_id: user.id,
        title: validatedData.title,
        content: validatedData.content,
        file_type: validatedData.file_type,
        status: 'completed',
      })
      .returning();

    return NextResponse.json({ success: true, data: document }, { status: 201 });
  } catch (error) {
    console.error('문서 생성 실패:', error);
    return NextResponse.json(
      { success: false, error: { code: 'CREATE_ERROR', message: '문서 생성에 실패했습니다' } },
      { status: 500 }
    );
  }
}
