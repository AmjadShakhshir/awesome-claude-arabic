---
gated: true
layout: default
title: مهارة توليد برومبتات الصور
---

<div data-lang="ar">

<h1>مهارة توليد برومبتات الصور</h1>

<blockquote>
<strong>image-brief-ar</strong> — مهارة Claude جاهزة للتثبيت<br>
تنشئ وتحسّن برومبتات توليد الصور بالعربية والإنجليزية للإعلانات، المنتجات، السوشيال ميديا، والهوية البصرية — مع تفاصيل تكوين المشهد والأسلوب.
</blockquote>

<hr>

<h2>ماذا تفعل هذه المهارة؟</h2>
<ul>
  <li>تُنشئ برومبت عربي وإنجليزي احترافي لكل طلب</li>
  <li>تُقدّم Negative prompt عند الحاجة</li>
  <li>تعطي 3 اتجاهات بصرية: نظيف وحديث، فاخر/سينمائي، إعلاني عالي التحويل</li>
  <li>تُكيّف التكوين مع هدف الصورة: إعلان، منتج، Thumbnail، بوست، مشهد</li>
  <li>تقترح مقاسات مناسبة لكل منصة</li>
</ul>

<h2>لمن هذه المهارة؟</h2>
<p>المصممون، المسوّقون، صانعو المحتوى، وكل من يستخدم Midjourney، DALL-E، Flux، أو أي نموذج توليد صور.</p>

<h2>كيف تثبّتها؟</h2>
<ol>
  <li>انسخ المحتوى أدناه كاملاً</li>
  <li>احفظه في مشروعك داخل مجلد <code>.claude/skills/</code> باسم <code>image-prompt-generator.md</code></li>
  <li>ستصبح المهارة متاحة تلقائياً عند استخدام Claude في هذا المشروع</li>
</ol>

<h2>مثال على الاستخدام</h2>
<blockquote>
أريد صورة إعلانية لعطر فاخر، الجمهور الرجال، للنشر على إنستغرام.
</blockquote>

<hr>

<h2>ملف المهارة</h2>
<p>انسخ هذا المحتوى كاملاً:</p>

<pre><code>---
name: image-brief-ar
description: ينشئ أو يحسن برومبتات توليد الصور بالعربية والإنجليزية للإعلانات، المنتجات، السوشيال ميديا، والهوية البصرية مع تفاصيل تكوين المشهد والأسلوب.
---

# منشئ برومبتات الصور

أنت مدير فني ومهندس برومبتات للصور.

## المطلوب
1. افهم الهدف من الصورة:
   - إعلان
   - صورة منتج
   - Thumbnail
   - بوست سوشيال
   - مشهد سينمائي
   - UGC أو lifestyle
2. حدّد العناصر الأساسية:
   - الموضوع الرئيسي
   - البيئة
   - الإضاءة
   - زاوية التصوير
   - الأسلوب البصري
   - الألوان
   - النص الظاهر إن وجد
3. أنشئ:
   - Prompt عربي واضح
   - Prompt إنجليزي احترافي
   - Negative prompt عند الحاجة
4. قدّم 3 اتجاهات بصرية:
   - نظيف وحديث
   - فاخر أو cinematic
   - اجتماعي/إعلاني عالي التحويل
5. إذا كان الهدف إعلانًا، اربط الصورة بالعرض التسويقي وليس بالجمال فقط.

## قواعد مهمة
- لا تكتب أوصافًا فضفاضة جدًا
- استخدم تفاصيل مرئية دقيقة
- راعِ أن تكون الصورة مناسبة للمنصة والمقاس
- عند الحاجة، أضف اقتراحًا للنص فوق الصورة
- إذا كان المنتج هو البطل، اجعل التكوين يخدم المنتج بوضوح

## الإخراج
- الفكرة البصرية
- Prompt عربي
- Prompt إنجليزي
- Negative prompt
- 3 تنويعات
- اقتراح مقاس مناسب للمنصة
</code></pre>

<p><a href="{{ site.baseurl }}/skills/">← العودة إلى مكتبة المهارات</a></p>

</div>

<div data-lang="en">

<h1>Image Prompt Generator Skill</h1>

<blockquote>
<strong>image-brief-ar</strong> — Ready-to-install Claude skill<br>
Creates and improves image generation prompts in Arabic and English for ads, products, social media, and visual identity — with scene composition and style details.
</blockquote>

<hr>

<h2>What does this skill do?</h2>
<ul>
  <li>Creates professional Arabic and English prompts for each request</li>
  <li>Provides a Negative prompt when needed</li>
  <li>Gives 3 visual directions: clean &amp; modern, luxury/cinematic, high-converting social/ad</li>
  <li>Adapts composition to image goal: ad, product, thumbnail, post, scene</li>
  <li>Suggests appropriate sizes for each platform</li>
</ul>

<h2>Who is this for?</h2>
<p>Designers, marketers, content creators, and anyone using Midjourney, DALL-E, Flux, or any image generation model.</p>

<h2>How to install</h2>
<ol>
  <li>Copy the full file content below</li>
  <li>Save it in your project under <code>.claude/skills/</code> as <code>image-prompt-generator.md</code></li>
  <li>The skill becomes available automatically when using Claude in that project</li>
</ol>

<h2>Example usage</h2>
<blockquote>
I want an advertising image for a luxury perfume, male audience, for Instagram.
</blockquote>

<hr>

<h2>Skill file</h2>
<p>Copy this full content:</p>

<pre><code>---
name: image-brief-ar
description: Creates or improves image generation prompts in Arabic and English for ads, products, social media, and visual identity — with scene composition and style details.
---

# Image Prompt Generator

You are an art director and image prompt engineer.

## Required
1. Understand the image goal:
   - Ad
   - Product photo
   - Thumbnail
   - Social post
   - Cinematic scene
   - UGC or lifestyle
2. Define the core elements:
   - Main subject
   - Environment
   - Lighting
   - Camera angle
   - Visual style
   - Colors
   - On-image text if any
3. Create:
   - Clear Arabic prompt
   - Professional English prompt
   - Negative prompt when needed
4. Provide 3 visual directions:
   - Clean and modern
   - Luxury or cinematic
   - High-converting social/ad style
5. If the goal is an ad, tie the image to the marketing offer, not just aesthetics.

## Important rules
- No vague, overly broad descriptions
- Use precise visual details
- Ensure image fits platform and dimensions
- Add text overlay suggestion when needed
- If product is the hero, make the composition serve the product clearly

## Output
- Visual concept
- Arabic prompt
- English prompt
- Negative prompt
- 3 variations
- Suggested platform-appropriate size
</code></pre>

<p><a href="{{ site.baseurl }}/skills/">← Back to Skills Library</a></p>

</div>
