---
layout: default
title: "سير عمل البحث عن وظائف عبر LinkedIn | LinkedIn Job Search Workflow"
---

<div data-lang="ar">

<p><a href="{{ site.baseurl }}/">← العودة للرئيسية</a></p>

<h1>🔍 سير عمل البحث عن وظائف عبر LinkedIn</h1>

<p>هذا البرومبت يساعدك على أتمتة البحث عن وظائف مناسبة لملفك الشخصي — عبر دمج نتائج من Google (بمساعدة Claude) ومن LinkedIn مباشرةً (بمساعدة Apify). الناتج النهائي جدول مرتّب بأعلى الوظائف تطابقاً مع سيرتك الذاتية.</p>

<h2>لمن هذه الصفحة؟</h2>
<ul>
  <li>الباحثون عن عمل الذين يريدون تسريع عملية البحث</li>
  <li>المحترفون الذين يريدون وظائف مطابقة لملفهم لا مجرد قوائم عشوائية</li>
  <li>أي شخص يستخدم Claude أو ChatGPT مع Apify لأتمتة سير عمل البحث الوظيفي</li>
</ul>

<h2>ملاحظة عن اللغة</h2>
<p>البرومبت مكتوب بالإنجليزية عمداً — أدوات البحث وAPIs وإخراج الجداول تعمل بشكل أفضل بالإنجليزية. يمكنك إضافة تعليمات بالعربية فوق البرومبت إذا أردت.</p>

<h2>الأدوات المطلوبة</h2>
<ul>
  <li><strong>Claude أو ChatGPT:</strong> للبحث عبر Google واستخراج الوظائف</li>
  <li><strong>Apify:</strong> حساب نشط مع <a href="https://apify.com/curious_coder/linkedin-jobs-scraper" target="_blank">LinkedIn Jobs Scraper</a> — يتطلب API key</li>
  <li><strong>سيرتك الذاتية:</strong> كنص داخل البرومبت أو كملف مرفق إذا كانت الأداة تدعم المرفقات</li>
</ul>

<hr>

<h2>الخطوات</h2>
<ol>
  <li>الصق سيرتك الذاتية داخل المتغير <code>[PASTE YOUR CV/RESUME HERE]</code> في البرومبت</li>
  <li>حدد المدينة أو المنطقة في <code>[YOUR CITY]</code></li>
  <li>عدّل نافذة الوقت والحد الأدنى للتطابق إذا أردت</li>
  <li>شغّل البرومبت في Claude أو ChatGPT — تأكد أن الأداة تملك صلاحية البحث على الإنترنت</li>
  <li>إذا كنت تستخدم Apify بشكل منفصل، شغّل السكريبر أولاً ثم الصق النتائج في محادثة جديدة</li>
</ol>

<span class="prompt-label">Prompt (English)</span>
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

<h2>علامات الناتج الجيد</h2>
<ul>
  <li>الجدول يحتوي فقط الأعمدة الستة المطلوبة</li>
  <li>جميع الوظائف منشورة داخل النافذة الزمنية المحددة</li>
  <li>درجات التطابق منطقية — لا توجد درجات ٩ أو ١٠ لوظائف غير ذات صلة</li>
  <li>روابط التقديم تعمل وتشير مباشرة إلى الإعلان الأصلي</li>
  <li>لا يوجد تعليق إضافي خارج الجدول</li>
</ul>

<h2>أخطاء شائعة</h2>
<ul>
  <li><strong>عدم لصق السيرة الذاتية:</strong> بدونها لا يستطيع النموذج حساب درجة التطابق بدقة</li>
  <li><strong>مدينة غير محددة بما يكفي:</strong> "أوروبا" أو "الشمال" سيعطيك نتائج فضفاضة — استخدم اسم المدينة بالإنجليزية</li>
  <li><strong>حد تطابق منخفض جداً:</strong> ٥ أو أقل سيعطيك وظائف غير مناسبة — الافتراضي ٧ هو الأنسب</li>
  <li><strong>عدم منح Claude صلاحية البحث:</strong> تأكد أن وضع البحث على الإنترنت مفعّل إذا كانت الأداة تدعمه</li>
  <li><strong>نسيان API key في Apify:</strong> السكريبر لن يعمل بدون مفتاح صالح</li>
</ul>

<div class="lang-tip">
<p>💡 <strong>تخصيص البرومبت:</strong></p>
<ul>
  <li>غيّر <code>[YOUR CITY]</code> إلى أي مدينة — مثل Riyadh, Dubai, Cairo, London</li>
  <li>وسّع <code>[TIME WINDOW]</code> إلى "past 48 hours" أو "past week" إذا كانت السوق بطيئة</li>
  <li>خفّض <code>[MIN FIT SCORE]</code> إلى ٦ إذا أردت عدداً أكبر من النتائج</li>
  <li>إذا لم تستخدم Apify، احذف الخطوة الثانية وعدّل النص ليعتمد على Google فقط</li>
</ul>
</div>

</div>

<div data-lang="en">

<p><a href="{{ site.baseurl }}/">← Back to Home</a></p>

<h1>🔍 LinkedIn Job Search Workflow</h1>

<p>This prompt automates job hunting by combining Google search results (via Claude) with LinkedIn job data (via Apify). The output is a ranked table of the best-matching roles for your resume — filtered by recency and fit score.</p>

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
