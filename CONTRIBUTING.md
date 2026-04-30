---
layout: default
title: Contributing
permalink: /CONTRIBUTING.html
---

<section data-lang="ar" markdown="1">

# المساهمة

شكراً لاهتمامك بالمساهمة في **Awesome Claude Arabic**!

## كيفية المساهمة

1. اعمل Fork للمستودع.
2. أنشئ فرع جديد: `git checkout -b feat/your-branch-name`.
3. أضف التعديلات في الملفات المناسبة.
4. تأكد من إضافة وصف قصير بالعربية والإنجليزية.
5. ادفع الفرع: `git push origin feat/your-branch-name`.
6. افتح Pull Request نحو `main` مع شرح للإضافة.

> ⚠️ لا يُسمح بالدفع المباشر إلى فرع `main`. جميع التعديلات تمر عبر Pull Request.

## إعداد Git Hooks (للمساهمين)

بعد استنساخ المستودع، شغّل الأمر التالي لتفعيل الحماية المحلية:

```bash
npm run install-hooks
```

## معايير القبول

- المورد يجب أن يكون مفيداً للمستخدم العربي.
- يجب أن يكون الرابط يعمل وآمن.
- يجب أن يتبع التنسيق: `[اسم المورد](الرابط) — وصف قصير.`

</section>

<section data-lang="en" markdown="1">

# Contributing

Thank you for your interest in contributing to **Awesome Claude Arabic**!

## How to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feat/your-branch-name`.
3. Make your changes.
4. Include a short description in both Arabic and English.
5. Push your branch: `git push origin feat/your-branch-name`.
6. Open a Pull Request targeting `main` with a description of the change.

> ⚠️ Direct pushes to `main` are not allowed. All changes must go through a Pull Request.

## Setting Up Git Hooks (for contributors)

After cloning the repository, run the following to activate the local push protection:

```bash
npm run install-hooks
```

## Acceptance Criteria

- The resource must be useful for Arabic-speaking users.
- Links must be working and safe.
- Follow the format: `[Resource Name](URL) — Short description.`

</section>
