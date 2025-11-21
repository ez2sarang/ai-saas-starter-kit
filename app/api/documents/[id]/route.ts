import { createClient } from '@/lib/supabase/server';
import { db } from '@/lib/db';
import { documents } from '@/drizzle/schema';
import { ensureUserExists } from '@/lib/auth-helpers';
import { NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
    }

    await ensureUserExists(user);

    const { id } = await params;

    const [deletedDocument] = await db
      .update(documents)
      .set({ deleted_at: new Date() })
      .where(and(eq(documents.id, id), eq(documents.user_id, user.id)))
      .returning();

    if (!deletedDocument) {
      return NextResponse.json({ error: '문서를 찾을 수 없습니다' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: deletedDocument });
  } catch (error) {
    console.error('문서 삭제 실패:', error);
    return NextResponse.json(
      { success: false, error: { code: 'DELETE_ERROR', message: '문서 삭제에 실패했습니다' } },
      { status: 500 }
    );
  }
}
