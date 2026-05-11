import Link from "next/link"
import { ArrowDown, Star } from "lucide-react"
import { ScrollReveal } from "@/registry/new-york/components/scroll-reveal/scroll-reveal"
import CopyCommand from "@/features/auto-install/copy-command"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

const SVG1 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%234e6f4d'/%3E%3Ccircle cx='880' cy='180' r='150' fill='%23e6b450'/%3E%3Cpath d='M0 520 C220 410 390 560 610 430 C800 320 930 420 1200 280 L1200 700 L0 700 Z' fill='%2326351f'/%3E%3Cpath d='M0 610 C230 520 460 630 690 520 C890 430 990 500 1200 390 L1200 700 L0 700 Z' fill='%237a4f2a'/%3E%3C/svg%3E"

const SVG2 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%2336284f'/%3E%3Ccircle cx='260' cy='190' r='120' fill='%23f2c46d'/%3E%3Cpath d='M0 450 L190 350 L380 470 L610 300 L830 460 L1000 360 L1200 460 L1200 700 L0 700 Z' fill='%235e7550'/%3E%3Cpath d='M0 560 L250 480 L500 570 L720 460 L960 590 L1200 510 L1200 700 L0 700 Z' fill='%23c07936'/%3E%3C/svg%3E"

const SVG3 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%231d3140'/%3E%3Ccircle cx='1000' cy='150' r='120' fill='%23ffcf70'/%3E%3Cpath d='M0 500 C180 380 330 540 520 420 C720 295 880 450 1200 300 L1200 700 L0 700 Z' fill='%23325a4b'/%3E%3Cpath d='M0 620 C220 500 420 650 650 520 C850 410 1020 560 1200 470 L1200 700 L0 700 Z' fill='%23b86d38'/%3E%3C/svg%3E"

const SECTION = "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/8 px-3 py-1 font-mono text-xs font-medium text-amber-600 dark:text-amber-400">
      {children}
    </span>
  )
}

function CodePreview() {
  return (
    <div className="flex flex-col rounded-xl border border-border/60 bg-zinc-950 overflow-hidden font-mono text-xs shadow-xl shadow-black/20">
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/4 px-4 py-3">
        <div className="size-2.5 rounded-full bg-red-400/60" />
        <div className="size-2.5 rounded-full bg-yellow-400/60" />
        <div className="size-2.5 rounded-full bg-green-400/60" />
        <span className="ml-3 text-zinc-500">scroll-reveal.tsx</span>
      </div>
      <div className="p-6 leading-7 text-zinc-300">
        <div>
          <span className="text-zinc-600">&lt;</span>
          <span className="text-white font-semibold">ScrollReveal</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-400">imageEnter</span>
          <span className="text-zinc-600">=</span>
          <span className="text-amber-400">&quot;left&quot;</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-400">captionMotion</span>
          <span className="text-zinc-600">=</span>
          <span className="text-amber-400">&quot;left-center&quot;</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-400">imageStickTop</span>
          <span className="text-zinc-600">=</span>
          <span className="text-amber-400">&quot;4.5rem&quot;</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-400">image</span>
          <span className="text-zinc-600">{"={"}</span>
          <span className="text-emerald-400">&lt;img /&gt;</span>
          <span className="text-zinc-600">{"}"}</span>
        </div>
        <div className="pl-4">
          <span className="text-sky-400">caption</span>
          <span className="text-zinc-600">{"={"}</span>
          <span className="text-emerald-400">&lt;p /&gt;</span>
          <span className="text-zinc-600">{"}"}</span>
        </div>
        <div className="text-zinc-600">/&gt;</div>
      </div>
      <div className="border-t border-white/8 bg-white/3 px-4 py-3 flex flex-wrap gap-2">
        {["Pure CSS", "No JS", "prefers-reduced-motion", "animation-timeline: view()"].map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-white/8 px-2.5 py-1 text-[11px] text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function SceneSection({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: ReactNode
}) {
  return (
    <section className={cn(SECTION, "py-14")}>
      <div className="flex items-start gap-4">
        <span className="mt-1 shrink-0 rounded-md border border-amber-500/30 bg-amber-500/8 px-2 py-0.5 font-mono text-xs font-semibold text-amber-600 dark:text-amber-400">
          {num}
        </span>
        <div>
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
            {children}
          </p>
        </div>
      </div>
    </section>
  )
}

function InstallStep({
  number,
  title,
  isLast = false,
  children,
}: {
  number: string
  title: string
  isLast?: boolean
  children: ReactNode
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="size-7 shrink-0 rounded-full border border-amber-500/40 bg-amber-500/10 flex items-center justify-center font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
          {number}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className={isLast ? "pt-0.5 pb-0" : "pb-10 pt-0.5"}>
        <p className="text-sm font-semibold">{title}</p>
        <div className="mt-2 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

const Inline = ({ children }: { children: ReactNode }) => (
  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
    {children}
  </code>
)

const PROPS = [
  {
    name: "image",
    type: "ReactNode",
    default: "—",
    required: true,
    desc: "Content inside the sticky image container (img, video, svg)",
  },
  {
    name: "caption",
    type: "ReactNode",
    default: "—",
    required: false,
    desc: "Caption content; omit entirely for image-only scenes",
  },
  {
    name: "imageEnter",
    type: '"left" | "right" | "top" | "bottom" | "none"',
    default: '"bottom"',
    required: false,
    desc: "Direction the image slides in from on entry",
  },
  {
    name: "captionMotion",
    type: '"left-center" | "right-center" | "left-right" | "right-left"',
    default: "—",
    required: false,
    desc: "Horizontal animation path of the caption box",
  },
  {
    name: "sceneDuration",
    type: "string",
    default: '"220svh"',
    required: false,
    desc: "Total scroll height allocated to the scene",
  },
  {
    name: "imageHeight",
    type: "string",
    default: '"66svh"',
    required: false,
    desc: "Height of the sticky image",
  },
  {
    name: "imageStickTop",
    type: "string",
    default: '"0"',
    required: false,
    desc: "Sticky top offset — set to your header height",
  },
  {
    name: "captionDelay",
    type: "string",
    default: '"40svh"',
    required: false,
    desc: "Scroll distance before the caption appears",
  },
  {
    name: "captionMotionDistance",
    type: "string",
    default: '"80vw"',
    required: false,
    desc: "Horizontal distance the caption travels",
  },
  {
    name: "sceneExitSpace",
    type: "string",
    default: '"55svh"',
    required: false,
    desc: "Padding after the scene ends",
  },
  {
    name: "captionMaxWidth",
    type: "string",
    default: '"52rem"',
    required: false,
    desc: "Max width of the caption card",
  },
  {
    name: "imageFit",
    type: '"cover" | "contain"',
    default: '"cover"',
    required: false,
    desc: "CSS object-fit for the image element",
  },
  {
    name: "imagePosition",
    type: "string",
    default: '"center"',
    required: false,
    desc: "CSS object-position for the image element",
  },
  {
    name: "imageStartScale",
    type: "string",
    default: '".96"',
    required: false,
    desc: "Initial scale of the image before it animates in",
  },
]

export default function Home() {
  return (
    <main className="min-h-[100dvh]">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className={cn(SECTION, "py-20 md:py-32")}>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              <Tag>Pure CSS</Tag>
              <Tag>No JavaScript</Tag>
              <Tag>Accessible</Tag>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter leading-[1.05] sm:text-5xl md:text-[3.5rem]">
              Scroll-driven
              <br />
              storytelling
              <br />
              <span className="text-amber-500 dark:text-amber-400">for shadcn/ui</span>
            </h1>

            <p className="max-w-[52ch] text-base leading-relaxed text-muted-foreground">
              Sticky image reveals with animated captions. Built on the CSS
              Scroll-Driven Animations API — zero JavaScript, fully accessible,
              respects <Inline>prefers-reduced-motion</Inline>.
            </p>

            <CopyCommand />

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowDown className="size-3.5" />
              Scroll to see it live
            </p>
          </div>

          {/* Right column — code preview */}
          <CodePreview />
        </div>
      </section>

      <Separator />

      {/* ── Demo scenes ──────────────────────────────────────────── */}
      <SceneSection num="01" title="Image enters from the left">
        Add <Inline>imageEnter=&quot;left&quot;</Inline> to slide the image in
        from the left as it enters the viewport. The caption appears in its
        natural flow position below the sticky image.
      </SceneSection>

      <ScrollReveal
        imageEnter="left"
        imageStickTop="4.5rem"
        image={<img src={SVG1} alt="Abstract green landscape with warm sun" />}
        caption={
          <>
            <h2 className="mb-2 text-xl font-semibold">
              imageEnter=&quot;left&quot;
            </h2>
            <p className="text-sm text-muted-foreground">
              The image slides in from the left. No captionMotion applied — the
              caption appears in its natural position below.
            </p>
          </>
        }
      />

      <SceneSection num="02" title="Caption sweeps in from the side">
        Combine <Inline>imageEnter=&quot;bottom&quot;</Inline> with{" "}
        <Inline>captionMotion=&quot;left-center&quot;</Inline> — the caption
        starts off-screen and lands in the center reading position as you scroll.
      </SceneSection>

      <ScrollReveal
        imageEnter="bottom"
        captionMotion="left-center"
        imageStickTop="4.5rem"
        captionMotionDistance="70vw"
        image={<img src={SVG2} alt="Abstract purple mountain landscape" />}
        caption={
          <>
            <h2 className="mb-2 text-xl font-semibold">
              captionMotion=&quot;left-center&quot;
            </h2>
            <p className="text-sm text-muted-foreground">
              The caption animates from off-screen left into the center reading
              position. Great for body text you want users to actually read.
            </p>
          </>
        }
      />

      <SceneSection num="03" title="Full pass-through motion">
        Use <Inline>captionMotion=&quot;right-left&quot;</Inline> for a
        dramatic full-width sweep. Works best for short labels — reduce{" "}
        <Inline>captionMaxWidth</Inline> for a tighter card.
      </SceneSection>

      <ScrollReveal
        imageEnter="right"
        captionMotion="right-left"
        imageStickTop="4.5rem"
        captionMotionDistance="90vw"
        captionMaxWidth="34rem"
        image={<img src={SVG3} alt="Abstract dark blue landscape with warm hills" />}
        caption={
          <>
            <h2 className="mb-2 text-xl font-semibold">
              captionMotion=&quot;right-left&quot;
            </h2>
            <p className="text-sm text-muted-foreground">
              The caption crosses the full width of the stage. Use a smaller
              captionMaxWidth for pass-through effects.
            </p>
          </>
        }
      />

      <Separator />

      {/* ── Installing ───────────────────────────────────────────── */}
      <section className={cn(SECTION, "py-16")}>
        <h2 className="text-3xl font-bold tracking-tight">Installing</h2>
        <p className="mt-2 text-muted-foreground">
          Add the component to any existing shadcn project.
        </p>

        <Tabs defaultValue="auto" className="mt-8">
          <TabsList className="mb-6 w-full [&>*]:flex-1">
            <TabsTrigger value="auto">Auto (CLI)</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>

          <TabsContent value="auto" className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              One command installs the component and all dependencies.
            </p>
            <CopyCommand />
            <p className="text-sm text-muted-foreground">
              Then append the <Inline>@layer vanilla-scroll-sky</Inline> block
              from the{" "}
              <a
                href={siteConfig.githubUrl}
                className="text-amber-600 underline underline-offset-4 transition-colors hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
              >
                GitHub repo
              </a>{" "}
              to your <Inline>globals.css</Inline>.
            </p>
          </TabsContent>

          <TabsContent value="manual" className="flex flex-col gap-0">
            <InstallStep number="1" title="Add the CSS layer">
              Copy the <Inline>@layer vanilla-scroll-sky</Inline> block from{" "}
              <a
                href={siteConfig.githubUrl}
                className="text-amber-600 underline underline-offset-4 transition-colors hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
              >
                globals.css on GitHub
              </a>{" "}
              and append it to your project&apos;s <Inline>globals.css</Inline>.
              This is the only CSS you need — the component itself has no styles.
            </InstallStep>
            <InstallStep number="2" title="Copy the component" isLast>
              Copy <Inline>scroll-reveal.tsx</Inline> into{" "}
              <Inline>components/scroll-reveal/</Inline> in your project. It has
              no runtime dependencies — only the CSS layer and{" "}
              <Inline>@/lib/utils</Inline>.
            </InstallStep>
          </TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* ── Props ────────────────────────────────────────────────── */}
      <section className={cn(SECTION, "py-16")}>
        <h2 className="text-3xl font-bold tracking-tight">Props</h2>
        <p className="mt-2 text-muted-foreground">
          Every CSS custom property is exposed as a typed React prop.
        </p>

        <div className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-medium text-xs uppercase tracking-wide text-muted-foreground">
                  Prop
                </th>
                <th className="px-4 py-3 text-left font-medium text-xs uppercase tracking-wide text-muted-foreground">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-medium text-xs uppercase tracking-wide text-muted-foreground">
                  Default
                </th>
                <th className="hidden px-4 py-3 text-left font-medium text-xs uppercase tracking-wide text-muted-foreground md:table-cell">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {PROPS.map((p) => (
                <tr
                  key={p.name}
                  className="transition-colors hover:bg-muted/20"
                >
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center gap-1.5">
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                        {p.name}
                      </code>
                      {p.required && (
                        <span
                          className="text-amber-600 dark:text-amber-400 text-xs font-semibold"
                          title="required"
                        >
                          *
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <code className="font-mono text-xs text-muted-foreground">
                      {p.type}
                    </code>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <code className="font-mono text-xs text-muted-foreground">
                      {p.default}
                    </code>
                  </td>
                  <td className="hidden px-4 py-3 align-top text-sm text-muted-foreground md:table-cell">
                    {p.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Usage example */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold tracking-tight">Basic usage</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
            <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-3">
              <div className="size-2.5 rounded-full bg-red-400/60" />
              <div className="size-2.5 rounded-full bg-yellow-400/60" />
              <div className="size-2.5 rounded-full bg-green-400/60" />
              <span className="ml-3 font-mono text-xs text-zinc-500">
                my-page.tsx
              </span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-7 text-zinc-300">
              <code>{`import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal"

<ScrollReveal
  imageEnter="left"
  imageStickTop="4.5rem"
  image={<img src="/hero.jpg" alt="..." />}
  caption={
    <>
      <h2>Your headline</h2>
      <p>A short caption that appears as you scroll.</p>
    </>
  }
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── GitHub CTA ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className={cn(SECTION, "py-16")}>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Find it useful?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Star the repo and share it with your team.
              </p>
            </div>
            <Link
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-amber-500/40 bg-amber-500/8 text-amber-700 hover:bg-amber-500/15 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
              )}
            >
              <Star className="size-4" />
              Star on GitHub
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
            {[
              { label: "Runtime JS", value: "0 bytes" },
              { label: "Dependencies", value: "none" },
              { label: "Browser API", value: "scroll-driven" },
              { label: "Reduced motion", value: "supported" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-xl font-bold tracking-tighter text-amber-600 dark:text-amber-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
