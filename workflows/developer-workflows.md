---
layout: default
title: "سير عمل المطور مع الذكاء الاصطناعي | Developer AI Workflows"
---

<div data-lang="ar">

<p><a href="{{ site.baseurl }}/">← العودة للرئيسية</a></p>

<h1>👨‍💻 سير عمل المطور مع الذكاء الاصطناعي</h1>

<p>هذه الصفحة تحتوي على سير عمل عملية للمطورين — ليست مجرد برومبتات، بل أنظمة خطوة بخطوة لاستخدام الذكاء الاصطناعي في مهام التطوير الفعلية.</p>

<div class="lang-tip">
<p>💡 <strong>ملاحظة اللغة:</strong> مهام البرمجة تعطي نتائج أفضل عادةً بالإنجليزية. البرومبتات في هذه الصفحة مكتوبة بالإنجليزية عمداً — أضف التوجيه بالعربية فوقها إذا أردت.</p>
</div>

<hr>

<h2>سير عمل ١: تشخيص خطأ مع الذكاء الاصطناعي</h2>

<p><strong>الهدف:</strong> تحديد سبب الخطأ، فهم الجذر، واقتراح إصلاح مع شرح المقايضات.</p>

<p><strong>متى تستخدمه:</strong></p>
<ul>
  <li>عندما تكون رسالة الخطأ غير واضحة</li>
  <li>عندما جربت أكثر من حل ولم ينجح أي منها</li>
  <li>عندما تريد فهم <em>لماذا</em> الخطأ حدث لا فقط كيف تصلحه</li>
</ul>

<p><strong>الخطوات:</strong></p>
<ol>
  <li>لا تلصق الكود كله — حدد الجزء المشكل فقط (مع السياق الكافي)</li>
  <li>أضف رسالة الخطأ الكاملة</li>
  <li>اشرح ما كنت تتوقعه مقابل ما حدث</li>
  <li>اطلب تشخيصاً أولاً، ثم حلاً</li>
</ol>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">I'm getting the following error in my [language/framework] code:

Error:
[paste the full error message]

Relevant code:
```
[paste the relevant section only]
```

Context:
- What I expected: [describe expected behavior]
- What happened instead: [describe actual behavior]
- What I already tried: [list attempts, or "nothing yet"]

Please:
1. Diagnose what's causing this error
2. Explain why it's happening (not just what)
3. Suggest a fix with a brief explanation of the tradeoffs if there are multiple approaches</pre>

<p><strong>علامات الناتج الجيد:</strong></p>
<ul>
  <li>الشرح يبدأ بـ "السبب الجذري هو..." لا بـ "الحل هو..."</li>
  <li>الإصلاح مفهوم — ليس نسخ ولصق أعمى</li>
  <li>إذا كان هناك أكثر من طريقة، يوضح متى تختار كلاً منها</li>
</ul>

<p><strong>أخطاء شائعة:</strong></p>
<ul>
  <li>لصق ١٠٠٠ سطر كود وكتابة "فيه خطأ أين هو؟" — يعطيك ناتجاً ضعيفاً</li>
  <li>عدم ذكر ما جربت — النموذج قد يقترح نفس الحلول الفاشلة</li>
  <li>تطبيق الحل دون فهمه — ستقع في نفس الخطأ مستقبلاً</li>
</ul>

<hr>

<h2>سير عمل ٢: كتابة ميزة جديدة</h2>

<p><strong>الهدف:</strong> كتابة كود لميزة محددة مع ضمان التوافق مع البنية القائمة والمعايير المتفق عليها.</p>

<p><strong>متى تستخدمه:</strong></p>
<ul>
  <li>عند كتابة ميزة من الصفر وتريد سرعة مع جودة</li>
  <li>عندما تعمل في تقنية تعرفها لكن تريد الكود الأسرع</li>
  <li>عندما تريد مقارنة تصميمات مختلفة قبل الالتزام بأحدها</li>
</ul>

<p><strong>الخطوات:</strong></p>
<ol>
  <li>صف الميزة بوضوح — المدخلات والمخرجات والحالات الخاصة</li>
  <li>أعطِ مثالاً على الاستخدام المتوقع</li>
  <li>حدد القيود التقنية (الإطار، الإصدار، أسلوب الكود)</li>
  <li>اطلب خطة قبل الكود إذا كانت الميزة معقدة</li>
</ol>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">I need to implement the following feature in [language/framework version]:

Feature description:
- What it does: [clear one-paragraph description]
- Input: [what it receives]
- Output: [what it should return or do]
- Edge cases to handle: [list them]

Expected usage example:
```
[show a simple call example or use case]
```

Technical constraints:
- [e.g., must be async / must not use external libraries / must follow existing naming conventions]
- Existing code style: [e.g., we use arrow functions, no classes]

Please:
1. Propose the implementation approach in 2–3 sentences before writing code
2. Write the implementation
3. Add inline comments only where the logic isn't obvious
4. Point out any assumption you made</pre>

<p><strong>علامات الناتج الجيد:</strong></p>
<ul>
  <li>الكود يعمل عند تشغيله (اختبره دائماً)</li>
  <li>الكود يعالج الحالات الخاصة التي ذكرتها</li>
  <li>التعليقات تشرح <em>لماذا</em> لا <em>ماذا</em></li>
  <li>النموذج ذكر افتراضاته بوضوح</li>
</ul>

<p><strong>أخطاء شائعة:</strong></p>
<ul>
  <li>طلب ميزة كاملة دفعة واحدة — ابدأ بالهيكل ثم أضف التفاصيل</li>
  <li>عدم ذكر قيود التقنية — قد تحصل على كود يكسر الأنماط القائمة</li>
  <li>الثقة الكاملة دون اختبار — الكود الذي يبدو صحيحاً قد يفشل في الحالات الخاصة</li>
</ul>

<hr>

<h2>سير عمل ٣: كتابة وصف Pull Request</h2>

<p><strong>الهدف:</strong> تحويل التغييرات التقنية إلى وصف واضح يساعد المراجعين ويوثّق قرارات التصميم.</p>

<p><strong>متى تستخدمه:</strong></p>
<ul>
  <li>بعد الانتهاء من ميزة أو إصلاح وقبل رفع الـ PR</li>
  <li>عندما تكون التغييرات معقدة وتحتاج شرحاً للفريق</li>
</ul>

<p><strong>الخطوات:</strong></p>
<ol>
  <li>الصق الـ diff أو وصف التغييرات</li>
  <li>اشرح السياق والسبب</li>
  <li>اطلب وصفاً منظماً وليس ملخصاً فقط</li>
</ol>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Write a pull request description for the following changes:

Summary of what changed:
[describe what you modified, added, or removed]

Why this change was made:
[the problem this solves or the requirement it fulfills]

Related ticket/issue: [link or "none"]

Technical notes (optional):
[any non-obvious design decisions, tradeoffs, or things reviewers should pay attention to]

Format the PR description with these sections:
- **Summary** (2–3 sentences)
- **What changed** (bullet list)
- **Why** (the motivation)
- **How to test** (specific steps for the reviewer)
- **Notes** (anything reviewers should know, or "none")</pre>

<p><strong>علامات الناتج الجيد:</strong></p>
<ul>
  <li>المراجع يفهم <em>لماذا</em> التغيير حدث بدون سؤال</li>
  <li>خطوات الاختبار قابلة للتنفيذ</li>
  <li>القرارات التصميمية غير الواضحة موثّقة</li>
</ul>

</div>

<div data-lang="en">

<p><a href="{{ site.baseurl }}/">← Back to Home</a></p>

<h1>👨‍💻 Developer AI Workflows</h1>

<p>This page contains practical workflows for developers — not just prompts, but step-by-step systems for using AI in real development tasks.</p>

<div class="lang-tip">
<p>💡 <strong>Language note:</strong> Coding tasks typically produce better results in English. The prompts on this page are intentionally in English.</p>
</div>

<hr>

<h2>Workflow 1: Debugging with AI</h2>

<p><strong>Goal:</strong> Identify the root cause of an error, understand why it's happening, and get a fix with tradeoffs explained.</p>

<p><strong>When to use:</strong></p>
<ul>
  <li>When the error message isn't clear</li>
  <li>When you've tried multiple solutions and none worked</li>
  <li>When you want to understand <em>why</em> the error happened, not just how to fix it</li>
</ul>

<p><strong>Steps:</strong></p>
<ol>
  <li>Don't paste all your code — identify the problematic section with enough context</li>
  <li>Include the complete error message</li>
  <li>Explain what you expected vs. what happened</li>
  <li>Ask for a diagnosis first, then a solution</li>
</ol>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">I'm getting the following error in my [language/framework] code:

Error:
[paste the full error message]

Relevant code:
```
[paste the relevant section only]
```

Context:
- What I expected: [describe expected behavior]
- What happened instead: [describe actual behavior]
- What I already tried: [list attempts, or "nothing yet"]

Please:
1. Diagnose what's causing this error
2. Explain why it's happening (not just what)
3. Suggest a fix with a brief explanation of the tradeoffs if there are multiple approaches</pre>

<p><strong>Signs of good output:</strong></p>
<ul>
  <li>The explanation starts with "The root cause is..." not "The fix is..."</li>
  <li>The fix is understandable — not blind copy-paste</li>
  <li>If there are multiple approaches, it clarifies when to use each</li>
</ul>

<p><strong>Common mistakes:</strong></p>
<ul>
  <li>Pasting 1000 lines and writing "there's a bug somewhere" — gives weak output</li>
  <li>Not mentioning what you already tried — the model may suggest the same failed solutions</li>
  <li>Applying the fix without understanding it — you'll hit the same error again</li>
</ul>

<hr>

<h2>Workflow 2: Writing a new feature</h2>

<p><strong>Goal:</strong> Write code for a specific feature while ensuring compatibility with the existing architecture and agreed standards.</p>

<p><strong>When to use:</strong></p>
<ul>
  <li>When writing a feature from scratch and you want speed with quality</li>
  <li>When you know the technology but want faster code</li>
  <li>When you want to compare design approaches before committing</li>
</ul>

<p><strong>Steps:</strong></p>
<ol>
  <li>Describe the feature clearly — inputs, outputs, and edge cases</li>
  <li>Provide an example of the expected usage</li>
  <li>Specify technical constraints (framework, version, code style)</li>
  <li>Request a plan before code for complex features</li>
</ol>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">I need to implement the following feature in [language/framework version]:

Feature description:
- What it does: [clear one-paragraph description]
- Input: [what it receives]
- Output: [what it should return or do]
- Edge cases to handle: [list them]

Expected usage example:
```
[show a simple call example or use case]
```

Technical constraints:
- [e.g., must be async / must not use external libraries / must follow existing naming conventions]
- Existing code style: [e.g., we use arrow functions, no classes]

Please:
1. Propose the implementation approach in 2–3 sentences before writing code
2. Write the implementation
3. Add inline comments only where the logic isn't obvious
4. Point out any assumption you made</pre>

<p><strong>Signs of good output:</strong></p>
<ul>
  <li>Code works when you run it (always test)</li>
  <li>Handles the edge cases you specified</li>
  <li>Comments explain <em>why</em>, not <em>what</em></li>
  <li>Assumptions are clearly stated</li>
</ul>

<hr>

<h2>Workflow 3: Writing a pull request description</h2>

<p><strong>Goal:</strong> Turn technical changes into a clear description that helps reviewers and documents design decisions.</p>

<p><strong>When to use:</strong></p>
<ul>
  <li>After completing a feature or fix, before opening the PR</li>
  <li>When changes are complex and need explanation for the team</li>
</ul>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Write a pull request description for the following changes:

Summary of what changed:
[describe what you modified, added, or removed]

Why this change was made:
[the problem this solves or the requirement it fulfills]

Related ticket/issue: [link or "none"]

Technical notes (optional):
[any non-obvious design decisions, tradeoffs, or things reviewers should pay attention to]

Format the PR description with these sections:
- **Summary** (2–3 sentences)
- **What changed** (bullet list)
- **Why** (the motivation)
- **How to test** (specific steps for the reviewer)
- **Notes** (anything reviewers should know, or "none")</pre>

<p><strong>Signs of good output:</strong></p>
<ul>
  <li>Reviewers understand <em>why</em> the change was made without asking</li>
  <li>Testing steps are executable</li>
  <li>Non-obvious design decisions are documented</li>
</ul>

</div>
