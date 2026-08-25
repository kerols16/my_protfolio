// ===== إعدادات الاتصال بـ Supabase =====
const SUPABASE_URL = "https://wvbcqgnhdltodoupblbg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2YmNxZ25oZGx0b2RvdXBibGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUxMTU1OTEsImV4cCI6MjEwMDY5MTU5MX0.kK0HfbwkgP2LxNh-EfBBcWw-2R4IUKoO80RXb5-3Lig";

// دالة عامة لجلب أي جدول من Supabase
export async function fetchFromSupabase(table, query = "") {
    const url = `${SUPABASE_URL}/rest/v1/${table}?${query}`;
    const res = await fetch(url, {
        headers: {
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
        }
    });
    if (!res.ok) {
        console.error(`Supabase fetch failed for table "${table}"`, res.status);
        return [];
    }
    return res.json();
}