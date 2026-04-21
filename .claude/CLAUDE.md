# Claude Instructions for `awesome-arabic-ai`

Use this file as the operating guide when creating, renaming, or improving content inside this repository.

The goal is not to build a random prompt collection. The goal is to build a high-trust, Arabic-first, practical AI repository with clear structure, strong naming, useful workflows, and content that feels better than generic competitors.

---

## Core goal

Build a repository that feels:

- practical
- curated
- easy to navigate
- useful for real work
- Arabic-first, but not limited by Arabic-only prompting
- stronger than generic prompt dumps

This repo should help Arabic-speaking users use AI for real outcomes in writing, coding, learning, productivity, and freelancing/business.

Do not optimize for volume alone. Optimize for clarity, usefulness, trust, and repeat visits.

---

## Positioning

This repository is:

**An Arabic-first practical AI resource hub with prompts, guides, workflows, and use-case content for real work and learning.**

It is **not**:

- a random list of prompts
- a file dump
- an “awesome list” with hundreds of weak links
- a generic translated AI repo
- a hype-driven collection of vague productivity claims

---

## Audience

Primary audience:

- Arabic-speaking practical users
- developers
- serious learners
- freelancers
- productivity-focused users

Secondary audience:

- students
- content creators
- job seekers
- small business users

Write for people who want to get results, not just browse.

---

## Structure rules

Map content into this structure unless there is a strong reason not to.

```text
awesome-arabic-ai/
├── README.md
├── prompts/
├── guides/
├── workflows/
├── use-cases/
└── assets/
```

### Folder purpose

- `prompts/` = prompt libraries grouped by practical use
- `guides/` = explanations, comparisons, best practices, mistakes, techniques
- `workflows/` = step-by-step systems showing how to use AI for a real task
- `use-cases/` = audience-based pages such as developers, students, freelancers
- `assets/` = images or other supporting visual material

Do **not** create vague folders like:

- `skills`
- `stuff`
- `vault`
- `misc`
- `notes`
- `resources-final`

Use clear folder names only.

---

## File naming rules

File names must be:

- lowercase
- hyphen-separated
- descriptive
- search-friendly
- immediately understandable

Use:

- `coding-prompts.md`
- `writing-prompts.md`
- `developer-workflows.md`
- `how-to-write-better-prompts.md`
- `ai-for-freelancers.md`
- `debug-code-with-claude.md`

Avoid:

- `Claude Prompts.md`
- `my prompts.md`
- `skills.md`
- `useful-ai.md`
- `final-v2.md`
- `new-file-latest.md`

### Naming principles

1. Prefer **use-case naming** over personal naming.
   - Good: `debug-code-with-claude.md`
   - Bad: `claude-skills.md`

2. Prefer **searchable phrasing**.
   - Good: `how-to-use-ai-for-studying.md`
   - Bad: `study-help.md`

3. Prefer **single-purpose files**.
   - Good: `email-writing-prompts.md`
   - Bad: `writing-and-business-and-random-prompts.md`

4. Use tool names only when relevant.
   - Good: `coding-with-claude.md`
   - Good: `chatgpt-for-learning.md`
   - Bad: adding tool names to every file even when the file is general

---

## Content design principles

Every file should feel intentional.

Each file must answer:

- what is this
- who is it for
- when should I use it
- how do I get value from it quickly

Do not start a content page with raw prompts immediately unless the page is extremely short and obvious.

Start with a short intro like:

- what the file helps with
- who should use it
- how to use it
- whether Arabic, English, or both are recommended

---

## Required format for prompt files

A prompt file should usually include:

1. Title
2. Short intro
3. Who this is for
4. Language guidance
5. Prompt list
6. Notes or customization tips

### Suggested prompt file structure

```md
# Writing Prompts

هذه الصفحة تحتوي على برومبتات عملية تساعدك في الكتابة، إعادة الصياغة، تحسين النبرة، واستخراج أفكار أوضح من أدوات الذكاء الاصطناعي.

## لمن هذه الصفحة؟
- صناع المحتوى
- المستقلون
- الطلاب
- أي شخص يريد كتابة أفضل بسرعة

## ملاحظة عن اللغة
في مهام الكتابة العامة يمكن استخدام العربية مباشرة. في بعض الحالات، يمكن تجربة نسخة إنجليزية إذا كنت تريد نتائج أكثر دقة أو تنسيقاً.

## Prompt 1
...
```

---

## Required format for workflow files

A workflow file must not be just a bundle of prompts.

A workflow should include:

1. the goal
2. when to use it
3. the tools or model type
4. the steps
5. the prompt(s)
6. what good output looks like
7. common mistakes
8. how to refine the result

### Suggested workflow structure

```md
# Developer Workflow: Debugging with AI

## الهدف
استخدام الذكاء الاصطناعي لتحديد الخطأ، فهم السبب، واقتراح إصلاح عملي.

## متى تستخدمه؟
- عندما يكون الخطأ غير واضح
- عندما تريد رأياً ثانياً
- عندما تريد تسريع عملية الفهم قبل التعديل

## الخطوات
1. أعط وصفاً دقيقاً للمشكلة
2. أضف الخطأ أو الرسالة الناتجة
3. أرفق الجزء المرتبط من الكود
4. اطلب تشخيصاً قبل طلب الحل
5. اطلب اقتراحات إصلاح مع شرح المقايضات
```

---

## Required format for guide files

A guide should explain something clearly and practically.

A guide is for:

- understanding a concept
- avoiding mistakes
- comparing approaches
- teaching better usage

Examples:

- `how-to-write-better-prompts.md`
- `claude-vs-chatgpt-for-arabic-users.md`
- `mistakes-to-avoid-when-using-ai.md`

A guide should not read like marketing.

---

## Use-case pages

Use-case pages help users identify where they belong.

Examples:

- `for-developers.md`
- `for-students.md`
- `for-freelancers.md`

Each use-case page should include:

- what this audience usually needs
- recommended starting pages
- suggested workflows
- prompt categories they should begin with
- a suggested path through the repo

This reduces overwhelm and makes the repo feel curated.

---

## Language strategy

This repository is Arabic-first, but not Arabic-only.

### Use Arabic-first when:
- writing prompts
- rewriting
- summarization
- ideation
- study help
- productivity
- client communication
- general explanations

### Use English-first when:
- coding
- debugging
- code review
- complex structured output
- technical reasoning
- framework-specific implementation prompts

### Best practice
When useful, provide:

- Arabic prompt
- English alternative
- short note on which one usually performs better

Do not force Arabic into areas where it lowers output quality significantly.

Do not force English into areas where Arabic would be more natural for the reader.

---

## Anti-generic prompt rules

Prompts must not feel like weak internet prompt lists.

Avoid prompts like:

- “Act as an expert and help me”
- “Write a good article about X”
- “Give me ideas”
- “Improve this”
- “Make this better”

Prompts should include strong constraints such as:

- role
- context
- audience
- output format
- tone
- evaluation criteria
- exclusions
- revision instruction

### Weak prompt
“Write a LinkedIn post about productivity.”

### Stronger prompt
“Write a LinkedIn post in Arabic for mid-career professionals who feel overwhelmed by constant context switching. Make it practical, direct, and specific. Start with a sharp hook, avoid motivational fluff, include 3 concrete examples, and end with one reflective question. Keep it under 180 words.”

Prompts should produce noticeably better output than average competitors.

---

## Quality bar

Every prompt, guide, or workflow should meet this bar:

- clear
- useful
- practical
- not padded
- not generic
- not repetitive
- easy to scan
- easy to apply

Before adding content, ask:

- Is this actually helpful?
- Is this better than what people can find in a shallow prompt repo?
- Does this save the reader time?
- Does this produce stronger output?

If not, rewrite it.

---

## What competitors often miss, and what this repo must do better

This repo must avoid the common weaknesses seen in large prompt repositories.

### Common weaknesses to avoid

- no onboarding
- no structure
- no audience paths
- too many random files
- weak naming
- no workflows
- prompts without context
- generic wording
- no quality constraints
- no explanation of when to use Arabic vs English
- no “start here” guidance

### This repo must include instead

- clean structure
- clear README
- searchable file names
- audience-specific pages
- workflow pages
- better prompt design
- language guidance
- anti-fluff instruction style
- practical use cases
- stronger editorial consistency

---

## README requirements

The README must:

- explain what the repo is
- explain why it exists
- link clearly to key sections
- help beginners know where to start
- help advanced users jump to workflows
- include a soft CTA for updates or lead magnet access
- avoid sounding pushy

The README is not just a description. It is the landing page.

---

## Constraints for creating new content

When creating new content, follow these rules.

### Do

- keep introductions short
- use clear headings
- make pages easy to scan
- include practical context
- use examples
- include language guidance when relevant
- write like a useful editor, not like a hype marketer
- keep the tone grounded and credible

### Do not

- overload files with too many unrelated prompts
- create pages with unclear purpose
- use clickbait phrasing
- use exaggerated words like “ultimate”, “secret”, or “guaranteed”
- publish duplicate prompt variants unless they clearly serve different use cases
- create empty folders or placeholder-heavy pages
- make the repo feel machine-generated

---

## Formatting rules

Use clean markdown.

### Preferred style

- one `#` title per file
- `##` for main sections
- `###` for prompt entries or sub-sections
- short paragraphs
- bullet points when useful
- fenced code blocks for prompts when that improves copying

### Avoid

- giant walls of text
- inconsistent heading levels
- decorative clutter
- too many emojis
- over-formatting every line

A little personality is fine. Clutter is not.

---

## Prompt entry template

Use this template when useful.

```md
### عنوان البرومبت

**متى تستخدمه:**
اشرح الحالة العملية باختصار.

**البرومبت بالعربية:**
```text
...
```

**English version (optional):**
```text
...
```

**نصيحة:**
اشرح كيف يخصّص المستخدم البرومبت أو متى تكون الإنجليزية أفضل.
```

Use English-only when the use case is clearly technical and English is the better default.

---

## Workflow entry template

```md
## اسم الـ workflow

**الهدف:**
...

**متى تستخدمه:**
...

**الخطوات:**
1. ...
2. ...
3. ...

**البرومبت الأساسي:**
```text
...
```

**كيف تعرف أن الناتج جيد؟**
- ...
- ...
- ...

**أخطاء شائعة:**
- ...
- ...
```

---

## Decision rules for placing content

Use these rules when deciding where a file belongs.

### Put it in `prompts/` if:
- the main value is reusable prompts
- it is category-based
- readers will come mainly to copy/adapt prompts

### Put it in `guides/` if:
- the main value is explanation or teaching
- it compares methods or tools
- it teaches principles or best practices

### Put it in `workflows/` if:
- it teaches a sequence of steps
- it solves a real process
- it combines prompts with decision-making

### Put it in `use-cases/` if:
- the page is organized around a specific audience
- it recommends where that audience should start

---

## Minimal launch principle

Do not wait for a massive library before publishing.

A strong version 1 is better than a giant unfinished structure.

A good first version can be:

- `README.md`
- `prompts/writing-prompts.md`
- `prompts/coding-prompts.md`
- `guides/how-to-write-better-prompts.md`
- `workflows/developer-workflows.md`
- `use-cases/for-developers.md`

That is enough to look real, useful, and trustworthy.

---

## Editorial tone

Write in a way that feels:

- clear
- grounded
- practical
- confident
- human

Do not sound robotic.

Do not sound like startup marketing.

Do not sound like someone trying too hard to impress.

The user should feel:
- this is useful
- this is organized
- this person understands real use cases
- this is worth bookmarking

---

## Final rule

Whenever you create or revise a file, ask:

**Does this help the repo feel like a practical Arabic AI system rather than a random prompt collection?**

If the answer is no, improve the structure, naming, context, or content quality before finalizing.
