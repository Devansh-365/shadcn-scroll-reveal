<div align="center">

# shadcn-scroll-reveal

**Scroll-driven image reveals with animated captions for shadcn/ui.**

Pure CSS using `animation-timeline: view()`. Zero JavaScript at runtime, fully accessible.

<br/>

[![Zero JavaScript](https://img.shields.io/badge/Zero%20JavaScript-Runtime-f59e0b?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
[![CSS Only](https://img.shields.io/badge/animation--timeline-CSS%20Only-e34f26?style=flat-square&logo=css3&logoColor=white)](https://caniuse.com/mdn-css_properties_animation-timeline)
[![TypeScript](https://img.shields.io/badge/TypeScript-Typed-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Compatible-000000?style=flat-square)](https://ui.shadcn.com/)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=flat-square)](./LICENSE)

<br/>

**[Live Demo](https://shadcn-scroll-reveal.vercel.app/)** &nbsp;&middot;&nbsp; **[Component Source](./src/registry/new-york/components/scroll-reveal/scroll-reveal.tsx)** &nbsp;&middot;&nbsp; **[CSS Layer](./src/app/globals.css)**

</div>

---

## What it does

`ScrollReveal` creates a sticky scroll scene. As the user scrolls past, the image slides into view from a direction you choose, and an optional caption sweeps across the stage. Stack multiple scenes to build a full scrollytelling narrative.

The entire animation runs in CSS. No JavaScript executes during scroll.

```tsx
<ScrollReveal
  imageEnter="left"
  imageStickTop="4.5rem"
  image={<img src="/photo.jpg" alt="Landscape at sunrise" />}
  caption={
    <>
      <h2>Your headline</h2>
      <p>A short caption that appears as the user scrolls.</p>
    </>
  }
/>
```

---

## Features

| | |
|---|---|
| **Zero JS at runtime** | Animations run entirely in CSS using `animation-timeline: view()` |
| **Four image entrance directions** | Left, right, top, or bottom |
| **Four caption motion paths** | Sweep in, sweep out, or pass through the full width of the stage |
| **Accessible** | All animations are disabled when `prefers-reduced-motion: reduce` is active |
| **Graceful fallback** | Images and captions render as fully visible static content in unsupported browsers |
| **Fully typed** | Every prop is typed in TypeScript, including CSS custom property overrides |
| **shadcn registry** | Install with one command like any other shadcn component |

---

## Requirements

- React 18 or later
- An existing shadcn/ui project
- Tailwind CSS

---

## Installation

### CLI

```bash
npx shadcn@latest add https://shadcn-scroll-reveal.vercel.app/r/scroll-reveal.json
```

> [!IMPORTANT]
> After the CLI finishes, copy the `@layer vanilla-scroll-sky` block from [`src/app/globals.css`](./src/app/globals.css) and append it to your project's global CSS file. That CSS block is the only styling the component needs.

### Manual

**Step 1.** Copy [`scroll-reveal.tsx`](./src/registry/new-york/components/scroll-reveal/scroll-reveal.tsx) into `components/scroll-reveal/` inside your project.

**Step 2.** Copy the `@layer vanilla-scroll-sky` block from [`src/app/globals.css`](./src/app/globals.css) and append it to your global CSS file.

> [!NOTE]
> The component has no runtime dependencies beyond `@/lib/utils`, which already exists in every shadcn project.

---

## Usage

Place `ScrollReveal` directly in your page. Each instance occupies roughly two viewport heights of scroll distance by default. Stack multiple scenes top to bottom to build a full sequence.

### Basic scene

```tsx
import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal"

export default function Page() {
  return (
    <ScrollReveal
      imageEnter="bottom"
      image={<img src="/hero.jpg" alt="Mountain at dawn" />}
    />
  )
}
```

### Scene with animated caption

```tsx
<ScrollReveal
  imageEnter="left"
  captionMotion="left-center"
  imageStickTop="4.5rem"
  image={<img src="/hero.jpg" alt="Mountain at dawn" />}
  caption={
    <>
      <h2 className="text-xl font-semibold">Chapter one</h2>
      <p className="text-sm text-muted-foreground">
        The caption slides in from the left as the user scrolls.
      </p>
    </>
  }
/>
```

> [!TIP]
> Set `imageStickTop` to your header height (e.g. `"4rem"`) so the sticky image snaps below your navigation bar instead of behind it.

### Multiple scenes

```tsx
export default function Story() {
  return (
    <main>
      <ScrollReveal
        imageEnter="left"
        image={<img src="/scene-1.jpg" alt="..." />}
      />
      <ScrollReveal
        imageEnter="right"
        captionMotion="right-left"
        image={<img src="/scene-2.jpg" alt="..." />}
        caption={<p>Scene two</p>}
      />
      <ScrollReveal
        imageEnter="top"
        image={<img src="/scene-3.jpg" alt="..." />}
      />
    </main>
  )
}
```

---

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|:--------:|-------------|
| `image` | `ReactNode` | | **Yes** | Content for the sticky image container. Accepts `img`, `video`, or `svg`. |
| `caption` | `ReactNode` | | No | Caption card content. Omit for image-only scenes. |
| `imageEnter` | `"left" \| "right" \| "top" \| "bottom" \| "none"` | `"bottom"` | No | Direction the image enters from on scroll. |
| `captionMotion` | `"left-center" \| "right-center" \| "left-right" \| "right-left"` | | No | Horizontal motion path of the caption card. |
| `sceneDuration` | `string` | `"220svh"` | No | Total scroll height allocated to the scene. |
| `imageHeight` | `string` | `"66svh"` | No | Height of the sticky image area. |
| `imageStickTop` | `string` | `"0"` | No | Sticky top offset. Set to your header height. |
| `captionDelay` | `string` | `"40svh"` | No | Scroll distance before the caption enters. |
| `captionMotionDistance` | `string` | `"80vw"` | No | Horizontal distance the caption travels. |
| `sceneExitSpace` | `string` | `"55svh"` | No | Extra space added after the scene ends. |
| `captionMaxWidth` | `string` | `"52rem"` | No | Maximum width of the caption card. |
| `imageFit` | `"cover" \| "contain"` | `"cover"` | No | CSS `object-fit` for the image element. |
| `imagePosition` | `string` | `"center"` | No | CSS `object-position` for the image element. |
| `imageStartScale` | `string` | `".96"` | No | Initial scale of the image before it animates in. |
| `className` | `string` | | No | Additional class names on the scene container. |

All dimension props accept any valid CSS length value including `svh`, `vh`, `rem`, and `px`.

---

## How it works

The component renders a `<section>` with the CSS class `vss` plus modifier classes like `vss--image-left` or `vss--caption-left-center`. The `@layer vanilla-scroll-sky` block you add to your CSS file drives all animations via `@scope (.vss)` and `animation-timeline: view()`.

The React component contains no scroll listeners, no `useEffect`, and no animation logic. It is a thin wrapper that translates props into CSS class names and custom properties.

This keeps the component fast, server-renderable, and trivially tree-shakeable.

---

## Browser support

| Browser | Minimum version |
|---------|:---------------:|
| Chrome | 115 |
| Edge | 115 |
| Safari | 18 |
| Firefox | Flag only (as of 125) |

In unsupported browsers and when `prefers-reduced-motion: reduce` is set, the `@supports not` fallback makes all images and captions fully visible with no animation. Users on every browser see the content.

---

## Contributing

Contributions are welcome.

For bug reports, open an issue and include the browser, OS, and a minimal reproduction if possible.

For new features or API changes, open an issue to discuss the approach before submitting a pull request.

```bash
git clone https://github.com/Devansh-365/shadcn-scroll-reveal
cd shadcn-scroll-reveal
npm install
npm run dev
```

The demo site at `src/app/page.tsx` is the best place to test changes to the component.

---

## License

[MIT](./LICENSE)
