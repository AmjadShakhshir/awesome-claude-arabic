---
gated: true
layout: default
mermaid: true
title: "Claude Cowork × Apify × VibeProspecting | سير عمل البحث الذكي عن وظائف"
---

<script>
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({ startOnLoad: true, theme: 'dark' });
  }
</script>

<div data-lang="ar">

<p><a href="{{ site.baseurl }}/workflows/">← العودة لسير العمل</a></p>

<h1>🔍 سير عمل البحث الذكي عن وظائف — Claude Cowork × Apify × VibeProspecting</h1>

<p>كنت تدور على وظائف يدوياً كل يوم — لحد ما سويت هذا. ربطت <strong>Apify</strong> مع <strong>VibeProspecting</strong> داخل <strong>Claude Cowork</strong> مباشرةً عبر Connectors، وصار يجيبلي الوظائف مرتّبة حسب score لعندي كل صبح تلقائياً — مع CV تبعتي. مو تحتاج تكتب أي شي. بس تصحى تلقى الملف جاهز.</p>

<p><strong>الهدف:</strong> قائمة وظائف حديثة مرتّبة حسب درجة التطابق مع سيرتك الذاتية — تلقائياً كل صباح — بدون مغادرة Claude Cowork.</p>

<hr>

<h2>خريطة سير العمل</h2>

<div class="mermaid">
flowchart LR
    A([Claude Cowork]) --> B[+ زر]
    B --> C[Connectors]
    C --> D1[Apify ✓]
    C --> D2[VibeProspecting ✓]
    D1 --> E[لصق API Token]
    D2 --> F[تسجيل الدخول]
    E & F --> G[تشغيل البرومبت]
    G --> H{Claude Cowork يُنسّق}
    H --> I[Apify يسحب وظائف LinkedIn]
    H --> J[VibeProspecting يُقيّم التطابق]
    I & J --> K[جدول مرتّب حسب Score]
    K --> L[جدولة يومية 🌅]
    L --> M([الجدول جاهز كل صباح])
</div>

<hr>

<h2>لمن هذه الصفحة؟</h2>
<ul>
  <li>الباحثون عن عمل الذين يريدون تسريع عملية البحث</li>
  <li>المحترفون الذين يريدون وظائف مطابقة لملفهم لا مجرد قوائم عشوائية</li>
  <li>أي شخص يريد أن يصحى كل صباح على قائمة وظائف جاهزة بدون تدخل يدوي</li>
</ul>

<h2>ملاحظة عن اللغة</h2>
<p>البرومبت مكتوب بالإنجليزية عمداً — أدوات البحث وAPIs وإخراج الجداول تعمل بشكل أفضل بالإنجليزية.</p>

<hr>

<h2>الأدوات المطلوبة</h2>

<table>
  <thead>
    <tr><th>الأداة</th><th>الدور</th><th>المصادقة</th><th>التكلفة</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://claude.ai/cowork" target="_blank" rel="noopener">Claude Cowork</a></td>
      <td>طبقة التنسيق المركزية</td>
      <td>حساب Claude</td>
      <td>مشمول في خطة Claude</td>
    </tr>
    <tr>
      <td><a href="https://apify.com/curious_coder/linkedin-jobs-scraper" target="_blank" rel="noopener">Apify — LinkedIn Jobs Scraper</a></td>
      <td>سحب وظائف LinkedIn</td>
      <td>API Token (مجاني للبداية)</td>
      <td>Free tier متاح</td>
    </tr>
    <tr>
      <td><a href="https://vibeprospecting.com" target="_blank" rel="noopener">VibeProspecting</a></td>
      <td>تقييم التطابق مع ملفك</td>
      <td>تسجيل دخول — بيتا خاص حالياً</td>
      <td>Waitlist مجاني</td>
    </tr>
    <tr>
      <td>سيرتك الذاتية</td>
      <td>معيار المقارنة</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

<blockquote>
<strong>ملاحظة:</strong> VibeProspecting في بيتا خاص حالياً. إذا لم يكن Connector متاحاً لك بعد، يمكنك تشغيل الـ workflow بـ Apify فقط وإضافة VibeProspecting لاحقاً حين يُطلق للعموم.
</blockquote>

<hr>

<h2>الخطوات — كل شيء داخل Claude Cowork</h2>

<h3>الخطوة 1 — افتح Claude Cowork</h3>
<p>اذهب إلى <a href="https://claude.ai/cowork" target="_blank" rel="noopener">claude.ai/cowork</a> وسجّل دخولك. ابدأ محادثة جديدة.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/1.png" alt="شاشة Claude Cowork — قائمة زر + مفتوحة تعرض خيار Connectors" loading="lazy">
  <figcaption>
    <span data-lang="ar">شاشة Claude Cowork — اضغط + في أسفل مربع الكتابة لتظهر القائمة التي تتضمن Connectors</span>
    <span data-lang="en">Claude Cowork — press + at the bottom of the composer to open the menu, which includes Connectors</span>
  </figcaption>
</figure>

<h3>الخطوة 2 — اضغط على زر + واختر Connectors</h3>
<p>في أسفل مربع الكتابة، اضغط <strong>+</strong> ثم اختر <strong>Connectors</strong> من القائمة.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/2.png" alt="لوحة Connectors في Cowork مع زر + لإضافة أدوات جديدة" loading="lazy">
  <figcaption>
    <span data-lang="ar">لوحة Connectors — اضغط + في الزاوية العلوية اليمنى لفتح الدليل وإضافة Apify</span>
    <span data-lang="en">Connectors panel — tap + in the top-right corner to open the directory and add Apify</span>
  </figcaption>
</figure>

<h3>الخطوة 3 — فعّل Apify و VibeProspecting</h3>
<p>ابحث عن <strong>Apify</strong> واضغط <strong>+</strong> لتفعيله. ثم ابحث عن <strong>VibeProspecting</strong> واضغط <strong>+</strong> أيضاً.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/3.png" alt="دليل Connectors مع نتائج البحث عن Apify" loading="lazy">
  <figcaption>
    <span data-lang="ar">دليل Connectors — ابحث عن «apify» ثم اضغط + لإضافته. كرر مع VibeProspecting</span>
    <span data-lang="en">Connectors directory — search "apify" then click + to add it. Repeat for VibeProspecting</span>
  </figcaption>
</figure>

<h3>الخطوة 4 — احصل على Apify API Token والصقه</h3>
<p>افتح تبويباً جديداً وانتقل إلى <strong>Apify Console</strong> ← <strong>Settings</strong> ← <strong>Integrations</strong>. انسخ الـ <strong>API Token</strong> الخاص بك، ثم عُد إلى Cowork والصقه داخل مربع المصادقة الخاص بـ Apify Connector.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/4.png" alt="Apify Console — Settings → API &amp; Integrations مع زر نسخ الـ API Token" loading="lazy">
  <figcaption>
    <span data-lang="ar">Apify Console → Settings (①) → API &amp; Integrations (②) — انسخ الـ Personal API Token بالضغط على أيقونة النسخ (③)</span>
    <span data-lang="en">Apify Console → Settings (①) → API &amp; Integrations (②) — copy your Personal API Token using the copy icon (③)</span>
  </figcaption>
</figure>

<h3>الخطوة 5 — أضف سيرتك الذاتية وشغّل البرومبت</h3>

<p>عندك خياران لإدخال سيرتك الذاتية — اختر الأنسب لك:</p>

<div class="lang-tip">
<p><strong>الخيار أ — لصق النص (الأسرع):</strong> انسخ نص سيرتك الذاتية والصقه مكان <code>[PASTE CV HERE]</code> في البرومبت أدناه. الأفضل للـ CVs بتنسيق نصي بسيط.</p>
<p><strong>الخيار ب — إرفاق ملف (الأدق):</strong> اضغط على زر المرفق 📎 في Cowork قبل إرسال البرومبت وارفع ملف CVتبعك (PDF أو DOCX أو TXT). ثم اكتب <code>(see attached CV)</code> مكان <code>[PASTE CV HERE]</code>. الأفضل للـ CVs ذات التنسيق المعقد. إذا فشل الرفع، انتقل للخيار أ.</p>
</div>

<span class="prompt-label">Prompt (English — شغّله داخل Claude Cowork)</span>
<pre class="prompt-box">You have access to Apify (LinkedIn Jobs Scraper) and VibeProspecting via your connected tools.

**My CV / Resume:**
[PASTE CV HERE — or write "(see attached CV)" if you uploaded the file]

**Target city:** [YOUR CITY, e.g., Riyadh / Dubai / London / Remote]

---

**Task:**

Step 1 — Use the Apify LinkedIn Jobs Scraper connector to pull job postings from LinkedIn in [YOUR CITY] published in the past 24 hours.

Step 2 — Use VibeProspecting to evaluate each role against my CV and assign a fit score out of 10 based on:
- Role alignment
- Responsibilities overlap
- Required skills match
- Relevant experience
- Seniority level match

Step 3 — Merge and deduplicate all results.

**Output format — return only this table, no commentary:**

| Role | Company | Posted | Source | Fit Score | Apply Link |

**Filtering rules:**
- Include only jobs posted in the last 24 hours
- Include only jobs with a fit score above 7
- Sort by: highest fit score first, then most recent
- Limit to top 10 results
- Keep scoring strict — avoid inflated ratings</pre>

<h3>الخطوة 6 — جدوِل البرومبت يومياً</h3>
<p>بعد أن تتأكد أن النتائج صحيحة، استخدم ميزة الجدولة في Cowork لتشغيل هذا البرومبت تلقائياً كل صباح. أو بديلاً، فعّل <strong>Scheduled Run</strong> مباشرةً من Apify Console لتشغيل السكريبر كل ليلة ثم تشغيل البرومبت صباحاً.</p>

<hr>

<h2>علامات الناتج الجيد</h2>
<ul>
  <li>الجدول يحتوي فقط الأعمدة الستة المطلوبة</li>
  <li>جميع الوظائف منشورة خلال آخر ٢٤ ساعة</li>
  <li>درجات التطابق منطقية — لا توجد درجات ٩ أو ١٠ لوظائف غير ذات صلة</li>
  <li>روابط التقديم تعمل وتشير مباشرة للإعلان الأصلي</li>
  <li>لا يوجد تعليق إضافي خارج الجدول</li>
</ul>

<h2>أخطاء شائعة</h2>
<ul>
  <li><strong>نسيان إضافة CV:</strong> بدونه لا يستطيع Cowork حساب درجة التطابق بدقة</li>
  <li><strong>Apify API Token منتهي أو غلط:</strong> تأكد من صلاحيته في Apify Console</li>
  <li><strong>VibeProspecting Connector غير متاح بعد:</strong> احذف Step 2 وشغّل بـ Apify فقط مؤقتاً</li>
  <li><strong>مدينة غير محددة:</strong> استخدم اسم المدينة بالإنجليزية — مثل "Riyadh" لا "السعودية"</li>
  <li><strong>حد تطابق منخفض:</strong> ٥ أو أقل يعطيك وظائف غير مناسبة — الافتراضي ٧ هو الأنسب</li>
</ul>

<h2>كيف تحسن النتيجة؟</h2>
<ul>
  <li>وسّع نافذة الوقت إلى "past 48 hours" إذا كانت النتائج قليلة</li>
  <li>خفّض الحد الأدنى إلى ٦ إذا أردت عدداً أكبر</li>
  <li>أضف كلمات مفتاحية تقنية محددة من CVتبعك لتحسين دقة التطابق</li>
</ul>

</div>

<div data-lang="en">

<p><a href="{{ site.baseurl }}/workflows/">← Back to Workflows</a></p>

<h1>🔍 Claude Cowork × Apify × VibeProspecting — Smart Job Search Workflow</h1>

<p>Connect Apify and VibeProspecting as Connectors inside Claude Cowork. Run one prompt. Get a daily ranked job list against your CV — automatically every morning, without leaving Cowork.</p>

<p><strong>Goal:</strong> A ranked, recent job shortlist matched to your resume — delivered automatically each morning with zero manual searching.</p>

<hr>

<h2>Workflow map</h2>

<div class="mermaid">
flowchart LR
    A([Claude Cowork]) --> B[+ Button]
    B --> C[Connectors]
    C --> D1[Apify ✓]
    C --> D2[VibeProspecting ✓]
    D1 --> E[Paste API Token]
    D2 --> F[Sign in]
    E & F --> G[Run the prompt]
    G --> H{Claude Cowork orchestrates}
    H --> I[Apify scrapes LinkedIn jobs]
    H --> J[VibeProspecting scores fit]
    I & J --> K[Ranked table by score]
    K --> L[Daily schedule 🌅]
    L --> M([Results ready every morning])
</div>

<hr>

<h2>Who is this for?</h2>
<ul>
  <li>Job seekers who want to automate their daily search</li>
  <li>Professionals who want role-matched results, not random listings</li>
  <li>Anyone who wants to wake up to a ready ranked shortlist every morning</li>
</ul>

<h2>Language note</h2>
<p>The prompt is in English — search tools, APIs, and table output work better in English.</p>

<hr>

<h2>Tools required</h2>

<table>
  <thead>
    <tr><th>Tool</th><th>Role</th><th>Auth</th><th>Cost</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://claude.ai/cowork" target="_blank" rel="noopener">Claude Cowork</a></td>
      <td>Central orchestration layer</td>
      <td>Claude account</td>
      <td>Included in Claude plan</td>
    </tr>
    <tr>
      <td><a href="https://apify.com/curious_coder/linkedin-jobs-scraper" target="_blank" rel="noopener">Apify — LinkedIn Jobs Scraper</a></td>
      <td>Scrape LinkedIn job postings</td>
      <td>API Token (free tier available)</td>
      <td>Free tier available</td>
    </tr>
    <tr>
      <td><a href="https://vibeprospecting.com" target="_blank" rel="noopener">VibeProspecting</a></td>
      <td>CV-fit scoring</td>
      <td>Sign in — private beta</td>
      <td>Free waitlist</td>
    </tr>
    <tr>
      <td>Your CV / resume</td>
      <td>Scoring benchmark</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

<blockquote>
<strong>Note:</strong> VibeProspecting is currently in private beta. If the Connector isn't yet available to you, run the workflow with Apify only and add VibeProspecting later when it opens up.
</blockquote>

<hr>

<h2>Steps — everything inside Claude Cowork</h2>

<h3>Step 1 — Open Claude Cowork</h3>
<p>Go to <a href="https://claude.ai/cowork" target="_blank" rel="noopener">claude.ai/cowork</a>, log in, and start a new conversation.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/1.png" alt="Claude Cowork + button menu open showing the Connectors option" loading="lazy">
  <figcaption>Claude Cowork — press + at the bottom of the composer to open the menu, which includes Connectors</figcaption>
</figure>

<h3>Step 2 — Click + and choose Connectors</h3>
<p>At the bottom of the chat composer, press <strong>+</strong> then select <strong>Connectors</strong> from the menu.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/2.png" alt="Connectors panel in Cowork showing existing connectors and a + button to browse the directory" loading="lazy">
  <figcaption>Connectors panel — tap + in the top-right corner to open the directory and add Apify</figcaption>
</figure>

<h3>Step 3 — Activate Apify and VibeProspecting</h3>
<p>Search for <strong>Apify</strong> and click <strong>+</strong> to activate it. Then search <strong>VibeProspecting</strong> and click <strong>+</strong> to activate it too.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/3.png" alt="Connectors directory search showing Apify in the results" loading="lazy">
  <figcaption>Connectors directory — search "apify" then click + to add it. Repeat for VibeProspecting</figcaption>
</figure>

<h3>Step 4 — Get your Apify API Token and paste it</h3>
<p>Open a new tab, go to <strong>Apify Console → Settings → Integrations</strong>, copy your <strong>API Token</strong>, then return to Cowork and paste it into the Apify connector's auth dialog.</p>

<figure class="workflow-figure">
  <img src="{{ site.baseurl }}/assets/img/workflows/4.png" alt="Apify Console Settings — API &amp; Integrations page showing Personal API tokens with a copy button" loading="lazy">
  <figcaption>Apify Console → Settings (①) → API &amp; Integrations (②) — copy your Personal API Token using the copy icon (③)</figcaption>
</figure>

<h3>Step 5 — Add your CV and run the prompt</h3>

<p>Two ways to provide your CV — pick one:</p>

<div class="lang-tip">
<p><strong>Option A — Paste (fastest):</strong> Copy your CV text and paste it in place of <code>[PASTE CV HERE]</code> in the prompt below. Best for plain-text CVs.</p>
<p><strong>Option B — Attach a file (most accurate):</strong> Click the 📎 attachment button in Cowork before sending, upload your CV file (PDF, DOCX, or TXT), then write <code>(see attached CV)</code> in place of <code>[PASTE CV HERE]</code>. Best for formatted CVs. If the upload fails, switch to Option A.</p>
</div>

<span class="prompt-label">Prompt (run this inside Claude Cowork)</span>
<pre class="prompt-box">You have access to Apify (LinkedIn Jobs Scraper) and VibeProspecting via your connected tools.

**My CV / Resume:**
[PASTE CV HERE — or write "(see attached CV)" if you uploaded the file]

**Target city:** [YOUR CITY, e.g., Riyadh / Dubai / London / Remote]

---

**Task:**

Step 1 — Use the Apify LinkedIn Jobs Scraper connector to pull job postings from LinkedIn in [YOUR CITY] published in the past 24 hours.

Step 2 — Use VibeProspecting to evaluate each role against my CV and assign a fit score out of 10 based on:
- Role alignment
- Responsibilities overlap
- Required skills match
- Relevant experience
- Seniority level match

Step 3 — Merge and deduplicate all results.

**Output format — return only this table, no commentary:**

| Role | Company | Posted | Source | Fit Score | Apply Link |

**Filtering rules:**
- Include only jobs posted in the last 24 hours
- Include only jobs with a fit score above 7
- Sort by: highest fit score first, then most recent
- Limit to top 10 results
- Keep scoring strict — avoid inflated ratings</pre>

<h3>Step 6 — Schedule it daily</h3>
<p>Once you confirm the results look right, use Cowork's scheduling feature to run this prompt automatically every morning. Alternatively, activate a <strong>Scheduled Run</strong> directly in the Apify Console to scrape overnight and trigger the prompt first thing in the morning.</p>

<hr>

<h2>What good output looks like</h2>
<ul>
  <li>The table has exactly the six required columns</li>
  <li>All jobs were posted within the past 24 hours</li>
  <li>Fit scores are realistic — no 9s or 10s for loosely-related roles</li>
  <li>Apply links go directly to the original job posting</li>
  <li>No extra commentary outside the table</li>
</ul>

<h2>Common mistakes</h2>
<ul>
  <li><strong>Missing CV:</strong> Without it Cowork can't score fit accurately</li>
  <li><strong>Invalid or expired Apify token:</strong> Verify it in Apify Console → Settings → Integrations</li>
  <li><strong>VibeProspecting connector not yet available:</strong> Remove Step 2 and run with Apify only temporarily</li>
  <li><strong>Vague city:</strong> Use English city name — "Riyadh" not "Saudi Arabia"</li>
  <li><strong>Fit score threshold too low:</strong> 5 or below returns off-target results — 7 is the recommended default</li>
</ul>

<h2>How to improve results</h2>
<ul>
  <li>Expand time window to "past 48 hours" if results are thin</li>
  <li>Lower minimum score to 6 if you want more options</li>
  <li>Add specific technical keywords from your CV to improve scoring precision</li>
</ul>

</div>
</div>

<div data-lang="en">

<p><a href="{{ site.baseurl }}/">← Back to Home</a></p>

<h1>🔍 LinkedIn Job Search Workflow</h1>

<p>This prompt automates job hunting by combining Google search results (via Claude) with LinkedIn job data (via Apify). The output is a ranked table of the best-matching roles for your resume — filtered by recency and fit score.</p>

<p><strong>Goal:</strong> Produce a recent, ranked shortlist of jobs that match your resume so you can spend less time searching manually and more time applying strategically.</p>

<h2>Who is this for?</h2>
<ul>
  <li>Job seekers who want to speed up their search process</li>
  <li>Professionals who want role-matched results, not random job listings</li>
  <li>Anyone using Claude or ChatGPT alongside Apify to automate job search workflows</li>
</ul>

<h2>Language note</h2>
<p>The prompt is intentionally in English — search tools, APIs, and table output work better in English. You can add Arabic instructions above the prompt if your preferred tool supports it.</p>

<h2>Tools required</h2>
<ul>
  <li><strong>Claude or ChatGPT:</strong> For Google search and job extraction</li>
  <li><strong>Apify:</strong> An active account with the <a href="https://apify.com/curious_coder/linkedin-jobs-scraper" target="_blank">LinkedIn Jobs Scraper</a> — requires an API key</li>
  <li><strong>Your resume:</strong> As plain text pasted inside the prompt, or as an attached file if your tool supports attachments</li>
</ul>

<hr>

<h2>Steps</h2>
<ol>
  <li>Paste your resume into the <code>[PASTE YOUR CV/RESUME HERE]</code> placeholder in the prompt</li>
  <li>Set your target city in <code>[YOUR CITY]</code></li>
  <li>Adjust the time window and minimum fit score if needed</li>
  <li>Run the prompt in Claude or ChatGPT — ensure the tool has web search access enabled</li>
  <li>If using Apify separately, run the scraper first, then paste results into a follow-up message</li>
</ol>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Please review the resume below and identify [YOUR CITY]-based job openings that align with the candidate's skills and experience.

**Resume:**
[PASTE YOUR CV/RESUME HERE]

---

**Search Instructions:**

Evaluate each job against the CV and assign a fit score out of 10 based on:
- Role alignment
- Responsibilities overlap
- Required skills match
- Relevant experience
- Seniority level match

**Step 1 — Google Search (via Claude):**
Search Google for [YOUR CITY]-based job postings published within the past [TIME WINDOW, e.g., past 24 hours].

**Step 2 — LinkedIn Search (via Apify):**
Use the Apify LinkedIn Jobs Scraper to gather LinkedIn jobs posted in [YOUR CITY] within the past [TIME WINDOW, e.g., past 24 hours].

**Step 3 — Merge Results:**
Combine and deduplicate results from both sources.

---

**Output Format:**
Return only a table with these exact columns:

| Role | Company | Posted | Source | Fit Score | Apply Link |

**Filtering Rules:**
- Include only jobs posted within the last [TIME WINDOW, e.g., 24 hours]
- Include only jobs with a fit score above [MIN FIT SCORE, e.g., 7]
- Sort by: 1. Most recently posted, then 2. Highest fit score
- Limit output to the top [TOP N RESULTS, e.g., 10] results
- Keep scoring strict — avoid inflated ratings
- Return only the table, no additional commentary</pre>

<h2>Signs of good output</h2>
<ul>
  <li>The table contains only the six required columns</li>
  <li>All jobs were posted within the specified time window</li>
  <li>Fit scores are realistic — no 9s or 10s for loosely related roles</li>
  <li>Apply links are direct and point to the original job posting</li>
  <li>No extra commentary outside the table</li>
</ul>

<h2>Common mistakes</h2>
<ul>
  <li><strong>Not pasting your resume:</strong> Without it the model cannot calculate accurate fit scores</li>
  <li><strong>City too vague:</strong> "Europe" or "Nordics" returns unfocused results — use the exact city name</li>
  <li><strong>Fit threshold too low:</strong> Setting it at 5 or below brings in poor-match roles — 7 is a practical default</li>
  <li><strong>Web search not enabled:</strong> Confirm your tool has internet access turned on before running</li>
  <li><strong>Missing Apify API key:</strong> The scraper will not run without a valid key</li>
</ul>

<h2>How to refine the result</h2>
<ul>
  <li>Tune the fit threshold gradually (start at 7, then move to 6 if results are too narrow)</li>
  <li>Run a second pass with tighter resume-based keywords (tools, stack, domain focus)</li>
  <li>Manually review top 3 results, then rerun the prompt with your feedback to improve precision</li>
</ul>

<div class="lang-tip">
<p>💡 <strong>Customization tips:</strong></p>
<ul>
  <li>Change <code>[YOUR CITY]</code> to any city — e.g., Riyadh, Dubai, Cairo, London, Helsinki</li>
  <li>Extend <code>[TIME WINDOW]</code> to "past 48 hours" or "past week" if the market is slow</li>
  <li>Lower <code>[MIN FIT SCORE]</code> to 6 if you want a wider set of results</li>
  <li>If you are not using Apify, remove Step 2 and adjust the prompt to rely on Google only</li>
</ul>
</div>

</div>
