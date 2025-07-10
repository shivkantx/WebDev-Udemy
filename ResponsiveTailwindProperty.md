# 📱 Tailwind CSS Responsive Design – Quick Guide

A handy cheat sheet for using Tailwind CSS responsive utilities. Learn how to control styles across screen sizes with mobile-first breakpoints.

---

## 📋 Breakpoint Reference Table

| Prefix | Min Width | Device Type    |
| ------ | --------- | -------------- |
| `sm:`  | 640px     | Small screens  |
| `md:`  | 768px     | Medium devices |
| `lg:`  | 1024px    | Large devices  |
| `xl:`  | 1280px    | Extra large    |
| `2xl:` | 1536px    | Ultra large    |

Tailwind is **mobile-first**, meaning unprefixed styles apply to all screen sizes, and prefixed styles override them at larger breakpoints.

---

## 🧠 Syntax Format

```html
<p class="text-sm md:text-base lg:text-xl">Responsive Text</p>
```

* `text-sm` applies on all screen sizes
* `md:text-base` applies from 768px and above
* `lg:text-xl` applies from 1024px and above

---

## 🧱 Responsive Examples

### 1. Responsive Text Size

```html
<h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl">Heading</h1>
```

### 2. Responsive Padding

```html
<div class="p-2 sm:p-4 md:p-6 lg:p-8">
  Responsive padding
</div>
```

### 3. Responsive Grid Columns

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  <!-- Grid items -->
</div>
```

### 4. Responsive Flex Direction

```html
<div class="flex flex-col md:flex-row">
  <!-- Items stack on small, row on medium+ -->
</div>
```

### 5. Responsive Visibility

```html
<p class="hidden md:block">Visible only on medium and up</p>
<p class="block md:hidden">Visible only on small screens</p>
```

---

## 🎯 Responsive Utility Usage

| Utility        | Example                      | Description                                   |
| -------------- | ---------------------------- | --------------------------------------------- |
| Margin         | `mt-4 md:mt-8`               | Top margin increases on medium screens        |
| Padding        | `px-2 lg:px-10`              | Horizontal padding varies by screen           |
| Width          | `w-full md:w-1/2`            | Full width on mobile, half on medium+         |
| Display        | `hidden lg:block`            | Hide on small, show on large                  |
| Text Align     | `text-center md:text-left`   | Centered text on small, left on medium+       |
| Flex Direction | `flex-col md:flex-row`       | Column by default, row on larger screens      |
| Grid Columns   | `grid-cols-1 md:grid-cols-3` | 1 column on small, 3 on medium+               |
| Gap            | `gap-2 lg:gap-6`             | Increases space between grid/flex items       |
| Font Size      | `text-sm xl:text-xl`         | Larger font on extra large screens            |
| Visibility     | `block sm:hidden`            | Visible on mobile, hidden on small screens up |

---

## 🛠 Pro Tips

* ✅ Use **mobile-first** unprefixed utilities to define base styles.
* 🔁 Chain responsive classes: `bg-red-500 md:bg-green-500 lg:bg-blue-500`
* 🧪 Use the **DevTools device toolbar** to test breakpoints.
* 🎯 Combine with dark mode: `dark:text-white md:text-black`

---

## 📦 Responsive Plugin Utilities (Optional)

Tailwind also supports:

* `container` with responsive `max-width`
* `aspect-ratio` for responsive media boxes
* `line-clamp`, `truncate`, and more for content control

```html
<div class="container mx-auto px-4 md:px-8">
  Responsive layout container
</div>
```

---

✅ With Tailwind, you write once and scale up responsively using simple, composable class names!
