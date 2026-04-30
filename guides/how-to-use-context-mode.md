---
gated: true
layout: default
title: "وضع السياق — Context Mode | دليل استخدام عملي"
---

<div data-lang="ar">

<p><a href="{{ site.baseurl }}/">← العودة للرئيسية</a></p>

<h1>🧠 Context Mode — حل مشكلة نافذة السياق</h1>

<p>
كل مرة تطلب فيها من نموذج الذكاء الاصطناعي قراءة ملف، جلب صفحة ويب، أو تشغيل أمر — تُضخ البيانات الخام مباشرةً في نافذة السياق.
Playwright snapshot = 56 KB. عشرون issue على GitHub = 59 KB. سجل access واحد = 45 KB.
بعد 30 دقيقة، ينتهي 40% من نافذة السياق. وعند ضغط المحادثة، ينسى النموذج ما كان يعمل عليه.
</p>

<p>
<strong>Context Mode</strong> هو خادم MCP يحل هذه المشكلة من أربع جهات دفعة واحدة.
</p>

<hr>

<h2>المشكلة بالأرقام</h2>

<div class="lang-tip">
<p><strong>ما يحدث بدون Context Mode:</strong></p>
<ul>
  <li>كل استدعاء أداة يضخ بياناته كاملةً في السياق</li>
  <li>جلسة عمل من 30 دقيقة تستهلك النافذة بأكملها</li>
  <li>عند الضغط، النموذج ينسى الملفات المفتوحة، المهام الجارية، والقرارات السابقة</li>
  <li>المستخدم مضطر لإعادة الشرح من البداية</li>
</ul>
</div>

<div class="lang-tip" style="background:#f0fff4; border-color:#68d391;">
<p><strong>ما يحدث مع Context Mode:</strong></p>
<ul>
  <li>315 KB من المخرجات الخام → 5.4 KB فعلي في السياق</li>
  <li>مدة الجلسة المنتجة: من 30 دقيقة → 3 ساعات</li>
  <li>بعد الضغط، النموذج يكمل من حيث توقف بالضبط</li>
</ul>
</div>

<hr>

<h2>الحلول الأربعة</h2>

<h3>١. حفظ السياق (Context Saving)</h3>
<p>
أدوات sandbox تعالج البيانات الخام في بيئة معزولة — فقط النتيجة المُلخَّصة تدخل السياق.
الفارق: 56 KB → 299 B. أي 99% توفير.
</p>

<div class="lang-tip">
<p><strong>المنطق الذي يغير طريقة التفكير:</strong><br>
بدلاً من أن يقرأ النموذج 50 ملفاً ليعدّ الدوال فيها، يكتب سكريبتاً يقوم بالعدّ ويطبع النتيجة فقط.
سكريبت واحد يحل محل 10 استدعاءات ويوفر 100x من السياق.</p>
<pre><code>// Before: 47 × Read() = 700 KB في السياق
// After:  1 × ctx_execute() = 3.6 KB
ctx_execute("javascript", `
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts'));
  files.forEach(f => console.log(f + ': ' +
    fs.readFileSync('src/'+f,'utf8').split('\\n').length + ' lines'));
`);</code></pre>
</div>

<h3>٢. استمرارية الجلسة (Session Continuity)</h3>
<p>
كل تعديل ملف، عملية git، مهمة، خطأ، وقرار مستخدم يُحفظ في قاعدة بيانات SQLite.
عند ضغط المحادثة، لا تُعاد البيانات كلها إلى السياق — بل يُفهرَس كل شيء ويُسترجع منه فقط ما هو ذو صلة.
النموذج يكمل من آخر نقطة توقف دون أن يسألك عن شيء.
</p>

<h3>٣. التفكير بالكود (Think in Code)</h3>
<p>
مبدأ جوهري: النموذج يُولِّد الكود الذي يُحلِّل البيانات، ولا يُحلِّل البيانات بنفسه.
هذا يُطبَّق على 11 لغة برمجة: JavaScript، TypeScript، Python، Shell، Ruby، Go، Rust، PHP، Perl، R، وElixir.
</p>

<h3>٤. ضغط المخرجات (Output Compression)</h3>
<p>
تخفيض 65–75% من توكنات المخرجات مع الحفاظ على الدقة التقنية الكاملة.
حذف الحشو، التحيات، والشروحات المطولة. فقط الجوهر.
</p>

<hr>

<h2>كيف تثبته</h2>

<h3>Claude Code (الأسهل — marketplace)</h3>
<pre><code>/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode</code></pre>
<p>أعد تشغيل Claude Code، ثم تحقق:</p>
<pre><code>/context-mode:ctx-doctor</code></pre>

<h3>VS Code Copilot</h3>
<p>١. ثبّت globally:</p>
<pre><code>npm install -g context-mode</code></pre>
<p>٢. أنشئ ملف <code>.vscode/mcp.json</code> في مشروعك:</p>
<pre><code>{
  "servers": {
    "context-mode": {
      "command": "context-mode"
    }
  }
}</code></pre>
<p>٣. أعد تشغيل VS Code. للتحقق: اكتب <code>ctx stats</code> في Copilot Chat.</p>

<h3>Cursor</h3>
<pre><code>npm install -g context-mode</code></pre>
<p>أنشئ <code>.cursor/mcp.json</code>:</p>
<pre><code>{
  "mcpServers": {
    "context-mode": {
      "command": "context-mode"
    }
  }
}</code></pre>

<h3>Gemini CLI</h3>
<pre><code>npm install -g context-mode</code></pre>
<p>أضف إلى <code>~/.gemini/settings.json</code> كل إعدادات mcpServers والـ hooks — التفاصيل الكاملة في <a href="https://github.com/mksglu/context-mode" target="_blank" rel="noopener">الـ README الرسمي</a>.</p>

<hr>

<h2>الأدوات الأساسية</h2>

<div class="lang-tip">
<table>
<tr><th>الأداة</th><th>الوظيفة</th><th>التوفير</th></tr>
<tr><td><code>ctx_execute</code></td><td>تشغيل كود في 11 لغة. فقط stdout يدخل السياق</td><td>56 KB → 299 B</td></tr>
<tr><td><code>ctx_batch_execute</code></td><td>تشغيل أوامر متعددة في استدعاء واحد</td><td>986 KB → 62 KB</td></tr>
<tr><td><code>ctx_execute_file</code></td><td>معالجة الملفات في sandbox. المحتوى لا يُرى</td><td>45 KB → 155 B</td></tr>
<tr><td><code>ctx_fetch_and_index</code></td><td>جلب URL وفهرسته. كاش 24 ساعة تلقائي</td><td>60 KB → 40 B</td></tr>
<tr><td><code>ctx_search</code></td><td>البحث في المحتوى المُفهرَس</td><td>استرجاع عند الطلب</td></tr>
<tr><td><code>ctx_stats</code></td><td>تقرير التوفير وإحصائيات الجلسة</td><td>—</td></tr>
</table>
</div>

<hr>

<h2>متى تستخدمه؟</h2>

<ul>
  <li>جلسات عمل طويلة مع Claude Code أو Copilot أو Cursor</li>
  <li>عند العمل مع repos كبيرة أو قراءة ملفات كثيرة</li>
  <li>عند استخدام Playwright أو جلب بيانات من APIs</li>
  <li>في المشاريع التي تستمر على مدى أيام وتحتاج استمرارية</li>
  <li>عند تحليل logs، CSVs، أو مخرجات ضخمة</li>
</ul>

<hr>

<h2>أوامر الاستخدام اليومي</h2>

<p>اكتبها مباشرةً في جلسة AI — النموذج يستدعي الأداة تلقائياً:</p>

<pre><code>ctx stats    ← تقرير التوفير وإحصائيات الجلسة
ctx doctor   ← تشخيص التثبيت والـ hooks
ctx upgrade  ← تحديث للإصدار الأخير
ctx insight  ← لوحة تحليلات شخصية (تفتح في المتصفح)</code></pre>

<hr>

<h2>الخصوصية</h2>

<div class="lang-tip">
<p>
Context Mode لا يرسل أي شيء إلى الخارج. لا telemetry، لا cloud sync، لا حساب مطلوب.
كل شيء محلي: السكريبتات تعمل في subprocess معزول، قواعد البيانات في مجلد home.
البيانات الخام — الملفات، الـ APIs، الـ snapshots — لا تغادر الـ sandbox أبداً.
</p>
</div>

<hr>

<h2>مصادر إضافية</h2>

<ul>
  <li><a href="https://github.com/mksglu/context-mode" target="_blank" rel="noopener">المستودع الرسمي على GitHub ←</a></li>
  <li><a href="https://www.youtube.com/watch?v=QUHrntlfPo4" target="_blank" rel="noopener">مشاهدة الـ demo على YouTube ←</a></li>
  <li><a href="{{ site.baseurl }}/guides/">← العودة لصفحة الأدلة</a></li>
</ul>

</div>

<div data-lang="en">

<p><a href="{{ site.baseurl }}/">← Back to Home</a></p>

<h1>🧠 Context Mode — Solving the Context Window Problem</h1>

<p>
Every time you ask an AI model to read a file, fetch a webpage, or run a command — raw data is dumped directly into the context window.
A Playwright snapshot costs 56 KB. Twenty GitHub issues cost 59 KB. One access log — 45 KB.
After 30 minutes, 40% of your context window is gone. When the conversation compacts, the model forgets which files it was editing, what tasks are in progress, and what you last asked for.
</p>

<p>
<strong>Context Mode</strong> is an MCP server that solves this problem from four directions at once.
</p>

<hr>

<h2>The Problem in Numbers</h2>

<div class="lang-tip">
<p><strong>Without Context Mode:</strong></p>
<ul>
  <li>Every tool call dumps its full output into context</li>
  <li>A 30-minute working session exhausts the entire window</li>
  <li>On compaction, the model forgets open files, running tasks, and past decisions</li>
  <li>You have to re-explain everything from scratch</li>
</ul>
</div>

<div class="lang-tip" style="background:#f0fff4; border-color:#68d391;">
<p><strong>With Context Mode:</strong></p>
<ul>
  <li>315 KB of raw output → 5.4 KB in context</li>
  <li>Productive session time: from ~30 minutes → ~3 hours</li>
  <li>After compaction, the model picks up exactly where it left off</li>
</ul>
</div>

<hr>

<h2>Four Solutions in One</h2>

<h3>1. Context Saving</h3>
<p>
Sandbox tools process raw data in an isolated subprocess — only the summarized result enters context.
A Playwright snapshot goes from 56 KB to 299 B. 99% reduction.
</p>

<div class="lang-tip">
<p><strong>The paradigm shift:</strong><br>
Instead of reading 50 files to count functions, the model writes a script that does the counting and logs only the result.
One script replaces 10 tool calls and saves 100x context.</p>
<pre><code>// Before: 47 × Read() = 700 KB in context
// After:  1 × ctx_execute() = 3.6 KB
ctx_execute("javascript", `
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts'));
  files.forEach(f => console.log(f + ': ' +
    fs.readFileSync('src/'+f,'utf8').split('\\n').length + ' lines'));
`);</code></pre>
</div>

<h3>2. Session Continuity</h3>
<p>
Every file edit, git operation, task, error, and user decision is tracked in SQLite.
When the conversation compacts, context-mode indexes events into FTS5 and retrieves only what's relevant via BM25 search.
The model continues from your last prompt without asking you to repeat anything.
</p>

<h3>3. Think in Code</h3>
<p>
The core principle: the model generates code that analyzes data, rather than analyzing data directly.
Supported in 11 languages: JavaScript, TypeScript, Python, Shell, Ruby, Go, Rust, PHP, Perl, R, and Elixir.
</p>

<h3>4. Output Compression</h3>
<p>
65–75% reduction in output tokens while maintaining full technical accuracy.
Drops filler, pleasantries, and verbose explanations. Only substance remains.
</p>

<hr>

<h2>Installation</h2>

<h3>Claude Code (easiest — plugin marketplace)</h3>
<pre><code>/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode</code></pre>
<p>Restart Claude Code, then verify:</p>
<pre><code>/context-mode:ctx-doctor</code></pre>

<h3>VS Code Copilot</h3>
<p>1. Install globally:</p>
<pre><code>npm install -g context-mode</code></pre>
<p>2. Create <code>.vscode/mcp.json</code> in your project:</p>
<pre><code>{
  "servers": {
    "context-mode": {
      "command": "context-mode"
    }
  }
}</code></pre>
<p>3. Restart VS Code. Verify: type <code>ctx stats</code> in Copilot Chat.</p>

<h3>Cursor</h3>
<pre><code>npm install -g context-mode</code></pre>
<p>Create <code>.cursor/mcp.json</code>:</p>
<pre><code>{
  "mcpServers": {
    "context-mode": {
      "command": "context-mode"
    }
  }
}</code></pre>

<h3>Gemini CLI</h3>
<pre><code>npm install -g context-mode</code></pre>
<p>Add MCP server and hooks to <code>~/.gemini/settings.json</code> — full config in the <a href="https://github.com/mksglu/context-mode" target="_blank" rel="noopener">official README</a>.</p>

<hr>

<h2>Core Tools</h2>

<div class="lang-tip">
<table>
<tr><th>Tool</th><th>What it does</th><th>Savings</th></tr>
<tr><td><code>ctx_execute</code></td><td>Run code in 11 languages. Only stdout enters context</td><td>56 KB → 299 B</td></tr>
<tr><td><code>ctx_batch_execute</code></td><td>Run multiple commands in a single call</td><td>986 KB → 62 KB</td></tr>
<tr><td><code>ctx_execute_file</code></td><td>Process files in sandbox. Raw content never enters context</td><td>45 KB → 155 B</td></tr>
<tr><td><code>ctx_fetch_and_index</code></td><td>Fetch URL and index it. 24h TTL cache</td><td>60 KB → 40 B</td></tr>
<tr><td><code>ctx_search</code></td><td>Search indexed content on demand</td><td>On-demand retrieval</td></tr>
<tr><td><code>ctx_stats</code></td><td>Context savings report and session statistics</td><td>—</td></tr>
</table>
</div>

<hr>

<h2>When to Use It</h2>

<ul>
  <li>Long working sessions with Claude Code, Copilot, or Cursor</li>
  <li>When working with large codebases or reading many files</li>
  <li>When using Playwright or fetching API data</li>
  <li>In multi-day projects that need session continuity</li>
  <li>When analyzing logs, CSVs, or large command output</li>
</ul>

<hr>

<h2>Daily Utility Commands</h2>

<p>Type these directly in any AI session — the model calls the tool automatically:</p>

<pre><code>ctx stats    → savings report and session statistics
ctx doctor   → diagnose installation and hooks
ctx upgrade  → update to latest version
ctx insight  → personal analytics dashboard (opens in browser)</code></pre>

<hr>

<h2>Privacy</h2>

<div class="lang-tip">
<p>
Context Mode sends nothing outside your machine. No telemetry, no cloud sync, no account required.
Everything is local: scripts run in isolated subprocesses, databases live in your home directory.
Raw data — files, API responses, snapshots — never leaves the sandbox.
</p>
</div>

<hr>

<h2>Additional Resources</h2>

<ul>
  <li><a href="https://github.com/mksglu/context-mode" target="_blank" rel="noopener">Official GitHub repository →</a></li>
  <li><a href="https://www.youtube.com/watch?v=QUHrntlfPo4" target="_blank" rel="noopener">Watch the demo on YouTube →</a></li>
  <li><a href="{{ site.baseurl }}/guides/">← Back to Guides</a></li>
</ul>

</div>
