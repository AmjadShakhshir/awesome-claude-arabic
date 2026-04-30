---
gated: true
layout: default
title: "برومبتات البرمجة والتقنية | Coding & Tech Prompts"
---

<div data-lang="ar">

<p><a href="{{ site.baseurl }}/">← العودة للرئيسية</a></p>

<h1>💻 برومبتات البرمجة والتقنية</h1>

<p>هذه الصفحة موجهة للمطورين ومن يعمل في المجال التقني. البرومبتات هنا بالإنجليزية بشكل أساسي — لأن نماذج الذكاء الاصطناعي تعطي نتائج أدق وأكثر موثوقية في البرمجة بالإنجليزية.</p>

<h2>لمن هذه الصفحة؟</h2>
<ul>
  <li>المطورون (مبتدئون ومحترفون)</li>
  <li>مهندسو البرمجيات الذين يريدون تسريع عملهم</li>
  <li>أي شخص يتعامل مع كود ويريد مساعدة في الفهم أو الإصلاح</li>
</ul>

<h2>ملاحظة عن اللغة</h2>
<p>في البرمجة، الإنجليزية تعطي نتائج أفضل بوضوح — المصطلحات التقنية، أسماء المتغيرات، والأخطاء كلها إنجليزية. استخدم الإنجليزية في برومبتاتك التقنية حتى لو كنت تفضّل العربية في باقي المجالات.</p>

<hr>

<h2>البرومبتات</h2>

<h3>١. شرح كود موجود</h3>

<p><strong>متى تستخدمه:</strong> عندما تجد كوداً لا تفهمه — legacy code، مكتبة جديدة، أو مراجعة كود زميل.</p>

<span class="prompt-label">الإنجليزية مُوصى بها</span>
<pre class="prompt-box">Explain the following code to me as if I'm a [junior developer / developer unfamiliar with this framework / non-technical stakeholder].

```
[paste code here]
```

Cover:
1. What this code does at a high level (one sentence)
2. What each significant block or function does
3. Any non-obvious patterns, tricks, or pitfalls
4. What would break if this were removed or changed

Do not rewrite the code. Only explain it.</pre>

<p class="lang-tip">💡 <strong>نصيحة:</strong> إذا كان الشرح أطول مما تحتاج، أضف: "Now give me a TL;DR version in 3 bullet points."</p>

<hr>

<h3>٢. تشخيص الأخطاء (Debugging)</h3>

<p><strong>متى تستخدمه:</strong> عندما يكون لديك error لا تفهم سببه، أو السلوك غير المتوقع من الكود.</p>

<span class="prompt-label">الإنجليزية مُوصى بها</span>
<pre class="prompt-box">I'm getting the following error in my [language/framework] code:

Error message:
```
[paste error here]
```

Relevant code:
```
[paste relevant code here]
```

Context:
- What I expected to happen: [describe expected behavior]
- What actually happens: [describe actual behavior]
- What I've already tried: [list any fixes you've attempted]

Please:
1. Diagnose the root cause (not just the symptom)
2. Explain why this error occurs
3. Suggest the fix with the corrected code
4. Mention if there are any related issues I should watch for</pre>

<p class="lang-tip">💡 <strong>نصيحة:</strong> "What I've already tried" مهمة جداً — تمنع الذكاء الاصطناعي من اقتراح حلول جربتها مسبقاً وتوفّر وقتك.</p>

<hr>

<h3>٣. كتابة دالة أو component</h3>

<p><strong>متى تستخدمه:</strong> عندما تريد كتابة كود جديد مع تحديد المتطلبات والقيود بوضوح.</p>

<span class="prompt-label">الإنجليزية مُوصى بها</span>
<pre class="prompt-box">Write a [function / component / class / module] in [language] that does the following:

Requirements:
- [requirement 1]
- [requirement 2]
- [requirement 3]

Constraints:
- Must handle these edge cases: [list edge cases]
- Should not use: [libraries, patterns, or features to avoid]
- Performance considerations: [e.g., must handle 10k items without degradation]
- Style: follow [naming convention / style guide / existing patterns in the codebase]

Include:
- The implementation
- Inline comments for non-obvious logic
- A brief usage example</pre>

<p class="lang-tip">💡 <strong>نصيحة:</strong> بعد الناتج، اطلب: "What are the top 3 ways this implementation could fail in production?" — هذا يكشف الثغرات قبل أن تكتشفها في الـ production.</p>

<hr>

<h3>٤. مراجعة الكود (Code Review)</h3>

<p><strong>متى تستخدمه:</strong> قبل الـ PR أو عندما تريد رأياً ثانياً في كود كتبته.</p>

<span class="prompt-label">الإنجليزية مُوصى بها</span>
<pre class="prompt-box">Review the following [language] code with the mindset of a senior engineer doing a thorough PR review:

```
[paste code here]
```

Focus on:
1. Correctness — does it do what it claims?
2. Edge cases — what inputs or states could cause unexpected behavior?
3. Readability — is the intent clear without excessive comments?
4. Performance — any obvious inefficiencies?
5. Security — any injection risks, unvalidated inputs, or exposed data?

Format your feedback as:
- [CRITICAL] issues that must be fixed
- [SUGGESTION] improvements worth considering
- [NITPICK] minor style or naming issues (optional to fix)

Do not rewrite the entire code. Point to specific lines or blocks.</pre>

<p class="lang-tip">💡 <strong>نصيحة:</strong> الـ CRITICAL / SUGGESTION / NITPICK تصنيف مهم — يخليك تعرف أين تركّز وقتك.</p>

<hr>

<h3>٥. كتابة رسالة Git commit</h3>

<p><strong>متى تستخدمه:</strong> بعد الانتهاء من تغيير وتريد commit message واضحة تتبع Conventional Commits.</p>

<span class="prompt-label">الإنجليزية مُوصى بها</span>
<pre class="prompt-box">Write a git commit message for the following change:

What changed:
[describe what you changed in 2-3 sentences]

Files modified:
[list key files]

Format: follow Conventional Commits (feat / fix / docs / refactor / test / chore).
Include a subject line (under 72 chars) and a body that explains WHY, not just what.
If there's a breaking change, add BREAKING CHANGE in the footer.</pre>

<span class="prompt-label">مثال على ناتج جيد</span>
<pre class="prompt-box">feat(auth): add email verification on registration

Previously, users could register without verifying their email, allowing
invalid addresses into the system. This adds a verification step before
account activation.

Closes #142</pre>

<p class="lang-tip">💡 <strong>نصيحة:</strong> Commit messages موجهة لزملائك في المستقبل الذين يقرؤون الـ git log — اشرح لماذا لا ماذا.</p>

<hr>

<h3>٦. كتابة Regex</h3>

<p><strong>متى تستخدمه:</strong> عندما تحتاج pattern matching وليس لديك وقت لتتذكر صياغة الـ regex.</p>

<span class="prompt-label">الإنجليزية مُوصى بها</span>
<pre class="prompt-box">Write a regular expression that matches the following pattern:

Pattern description:
[describe in plain English what you want to match]

Test cases that SHOULD match:
- [example 1]
- [example 2]

Test cases that should NOT match:
- [example 1]
- [example 2]

Language / flavor: [JavaScript / Python / PCRE / etc.]

After the regex, explain each part of it so I can modify it if needed.</pre>

<p class="lang-tip">💡 <strong>نصيحة:</strong> أعطِ أمثلة على ما يجب أن يتطابق وما لا يجب — بدونها ستحصل على regex يعمل في بعض الحالات ويفشل في أخرى.</p>

</div>

<div data-lang="en">

<p><a href="{{ site.baseurl }}/">← Back to Home</a></p>

<h1>💻 Coding &amp; Tech Prompts</h1>

<p>This page is for developers and technical users. All prompts are in English — AI models produce more accurate and reliable code-related output in English, where technical terms, variable names, and error messages already live.</p>

<h2>Who is this for?</h2>
<ul>
  <li>Developers (beginners and experienced)</li>
  <li>Software engineers looking to move faster</li>
  <li>Anyone working with code who needs help understanding or fixing it</li>
</ul>

<h2>Language note</h2>
<p>For coding tasks, English prompts consistently outperform Arabic ones. Technical vocabulary, error messages, and code identifiers are all in English. Use English for your technical prompts even if you prefer Arabic in other contexts.</p>

<hr>

<h2>Prompts</h2>

<h3>1. Explain existing code</h3>

<p><strong>When to use:</strong> When you find code you don't understand — legacy code, a new library, or a colleague's implementation.</p>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Explain the following code to me as if I'm a [junior developer / developer unfamiliar with this framework / non-technical stakeholder].

```
[paste code here]
```

Cover:
1. What this code does at a high level (one sentence)
2. What each significant block or function does
3. Any non-obvious patterns, tricks, or pitfalls
4. What would break if this were removed or changed

Do not rewrite the code. Only explain it.</pre>

<p class="lang-tip">💡 <strong>Tip:</strong> If the explanation is longer than you need, follow up with: "Now give me a TL;DR version in 3 bullet points."</p>

<hr>

<h3>2. Debug an error</h3>

<p><strong>When to use:</strong> When you have an error you can't trace, or unexpected behavior you can't explain.</p>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">I'm getting the following error in my [language/framework] code:

Error message:
```
[paste error here]
```

Relevant code:
```
[paste relevant code here]
```

Context:
- What I expected to happen: [describe expected behavior]
- What actually happens: [describe actual behavior]
- What I've already tried: [list any fixes you've attempted]

Please:
1. Diagnose the root cause (not just the symptom)
2. Explain why this error occurs
3. Suggest the fix with the corrected code
4. Mention if there are any related issues I should watch for</pre>

<p class="lang-tip">💡 <strong>Tip:</strong> "What I've already tried" is critical — it prevents the AI from suggesting fixes you've already ruled out and saves you a round-trip.</p>

<hr>

<h3>3. Write a function or component</h3>

<p><strong>When to use:</strong> When you need new code written with clearly defined requirements and constraints.</p>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Write a [function / component / class / module] in [language] that does the following:

Requirements:
- [requirement 1]
- [requirement 2]
- [requirement 3]

Constraints:
- Must handle these edge cases: [list edge cases]
- Should not use: [libraries, patterns, or features to avoid]
- Performance considerations: [e.g., must handle 10k items without degradation]
- Style: follow [naming convention / style guide / existing patterns in the codebase]

Include:
- The implementation
- Inline comments for non-obvious logic
- A brief usage example</pre>

<p class="lang-tip">💡 <strong>Tip:</strong> After you get the output, ask: "What are the top 3 ways this implementation could fail in production?" — this surfaces issues before they hit your users.</p>

<hr>

<h3>4. Code review</h3>

<p><strong>When to use:</strong> Before opening a PR or when you want a second opinion on code you've written.</p>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Review the following [language] code with the mindset of a senior engineer doing a thorough PR review:

```
[paste code here]
```

Focus on:
1. Correctness — does it do what it claims?
2. Edge cases — what inputs or states could cause unexpected behavior?
3. Readability — is the intent clear without excessive comments?
4. Performance — any obvious inefficiencies?
5. Security — any injection risks, unvalidated inputs, or exposed data?

Format your feedback as:
- [CRITICAL] issues that must be fixed
- [SUGGESTION] improvements worth considering
- [NITPICK] minor style or naming issues (optional to fix)

Do not rewrite the entire code. Point to specific lines or blocks.</pre>

<p class="lang-tip">💡 <strong>Tip:</strong> The CRITICAL / SUGGESTION / NITPICK taxonomy tells you exactly where to spend your time. Only block on CRITICAL items.</p>

<hr>

<h3>5. Write a Git commit message</h3>

<p><strong>When to use:</strong> After finishing a change and you need a clear commit message following Conventional Commits.</p>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Write a git commit message for the following change:

What changed:
[describe what you changed in 2-3 sentences]

Files modified:
[list key files]

Format: follow Conventional Commits (feat / fix / docs / refactor / test / chore).
Include a subject line (under 72 chars) and a body that explains WHY, not just what.
If there's a breaking change, add BREAKING CHANGE in the footer.</pre>

<p class="lang-tip">💡 <strong>Tip:</strong> Commit messages are written for future teammates reading the git log — always explain why, not just what.</p>

<hr>

<h3>6. Write a regex</h3>

<p><strong>When to use:</strong> When you need pattern matching and don't want to remember regex syntax from scratch.</p>

<span class="prompt-label">Prompt</span>
<pre class="prompt-box">Write a regular expression that matches the following pattern:

Pattern description:
[describe in plain English what you want to match]

Test cases that SHOULD match:
- [example 1]
- [example 2]

Test cases that should NOT match:
- [example 1]
- [example 2]

Language / flavor: [JavaScript / Python / PCRE / etc.]

After the regex, explain each part of it so I can modify it if needed.</pre>

<p class="lang-tip">💡 <strong>Tip:</strong> Always provide both positive and negative test cases — without them you'll get a regex that works for some inputs and silently fails on others.</p>

</div>
