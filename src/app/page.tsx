import Link from "next/link"
import { ArrowDown, ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/registry/new-york/components/scroll-reveal/scroll-reveal"
import CopyCommand from "@/features/auto-install/copy-command"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

const SVG1 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%234e6f4d'/%3E%3Ccircle cx='880' cy='180' r='150' fill='%23e6b450'/%3E%3Cpath d='M0 520 C220 410 390 560 610 430 C800 320 930 420 1200 280 L1200 700 L0 700 Z' fill='%2326351f'/%3E%3Cpath d='M0 610 C230 520 460 630 690 520 C890 430 990 500 1200 390 L1200 700 L0 700 Z' fill='%237a4f2a'/%3E%3C/svg%3E"

const SVG2 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%2336284f'/%3E%3Ccircle cx='260' cy='190' r='120' fill='%23f2c46d'/%3E%3Cpath d='M0 450 L190 350 L380 470 L610 300 L830 460 L1000 360 L1200 460 L1200 700 L0 700 Z' fill='%235e7550'/%3E%3Cpath d='M0 560 L250 480 L500 570 L720 460 L960 590 L1200 510 L1200 700 L0 700 Z' fill='%23c07936'/%3E%3C/svg%3E"

const SVG3 =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'%3E%3Crect width='1200' height='700' fill='%231d3140'/%3E%3Ccircle cx='1000' cy='150' r='120' fill='%23ffcf70'/%3E%3Cpath d='M0 500 C180 380 330 540 520 420 C720 295 880 450 1200 300 L1200 700 L0 700 Z' fill='%23325a4b'/%3E%3Cpath d='M0 620 C220 500 420 650 650 520 C850 410 1020 560 1200 470 L1200 700 L0 700 Z' fill='%23b86d38'/%3E%3C/svg%3E"

export default function Home() {
  return (
    <main>
      <section className="container max-w-3xl py-20 md:py-32">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit">
            Pure CSS · No JavaScript
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Scroll-driven storytelling
            <br />
            for shadcn/ui
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Sticky image reveals with animated captions. Built on the CSS
            Scroll-Driven Animations API. Zero JavaScript, fully accessible,
            respects reduced-motion.
          </p>
          <CopyCommand />
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <ArrowDown className="size-4" />
            Scroll to see it live
          </p>
        </div>
      </section>

      <Separator />

      <section className="container max-w-3xl py-16">
        <h2 className="text-2xl font-semibold">
          Scene 1: Image enters from the left
        </h2>
        <p className="mt-2 text-muted-foreground">
          Add{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            imageEnter="left"
          </code>{" "}
          to slide the image in from the left as it enters the viewport. The
          caption appears in its natural flow position.
        </p>
      </section>

      <ScrollReveal
        imageEnter="left"
        imageStickTop="4.5rem"
        image={
          <img src={SVG1} alt="Abstract green landscape with warm sun" />
        }
        caption={
          <>
            <h2 className="text-xl font-semibold mb-2">
              imageEnter=&quot;left&quot;
            </h2>
            <p className="text-sm text-muted-foreground">
              The image slides in from the left. No caption motion class
              applied — the caption appears in its natural position below.
            </p>
          </>
        }
      />

      <section className="container max-w-3xl py-16">
        <h2 className="text-2xl font-semibold">Scene 2: Caption sweeps in</h2>
        <p className="mt-2 text-muted-foreground">
          Combine{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            imageEnter="bottom"
          </code>{" "}
          with{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            captionMotion="left-center"
          </code>{" "}
          — the caption starts off-screen left and lands in the center as you
          scroll.
        </p>
      </section>

      <ScrollReveal
        imageEnter="bottom"
        captionMotion="left-center"
        imageStickTop="4.5rem"
        captionMotionDistance="70vw"
        image={
          <img src={SVG2} alt="Abstract purple mountain landscape" />
        }
        caption={
          <>
            <h2 className="text-xl font-semibold mb-2">
              captionMotion=&quot;left-center&quot;
            </h2>
            <p className="text-sm text-muted-foreground">
              The caption animates from the left into the center reading
              position. Great for readable body text.
            </p>
          </>
        }
      />

      <section className="container max-w-3xl py-16">
        <h2 className="text-2xl font-semibold">Scene 3: Full pass-through</h2>
        <p className="mt-2 text-muted-foreground">
          Use{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
            captionMotion="right-left"
          </code>{" "}
          for a dramatic full-width pass-through. Best for short labels, not
          long body text.
        </p>
      </section>

      <ScrollReveal
        imageEnter="right"
        captionMotion="right-left"
        imageStickTop="4.5rem"
        captionMotionDistance="90vw"
        captionMaxWidth="34rem"
        image={
          <img src={SVG3} alt="Abstract dark blue landscape with warm hills" />
        }
        caption={
          <>
            <h2 className="text-xl font-semibold mb-2">
              captionMotion=&quot;right-left&quot;
            </h2>
            <p className="text-sm text-muted-foreground">
              The caption crosses the full stage. Use a smaller max-width for
              pass-through motion.
            </p>
          </>
        }
      />

      <Separator className="my-4" />

      <section className="container max-w-3xl py-16">
        <h2 className="text-3xl font-bold mb-2">Installing</h2>
        <p className="text-muted-foreground mb-8">
          Add the component to your shadcn project.
        </p>
        <Tabs defaultValue="auto">
          <TabsList className="mb-4 w-full [&>*]:flex-1">
            <TabsTrigger value="auto">Auto (CLI)</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="auto" className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Install via the shadcn CLI in one command.
            </p>
            <CopyCommand />
            <p className="text-sm text-muted-foreground">
              Then add the CSS layer to your{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                globals.css
              </code>{" "}
              — see the{" "}
              <a
                href={siteConfig.githubUrl}
                className="underline underline-offset-4"
              >
                GitHub repo
              </a>{" "}
              for the full CSS.
            </p>
          </TabsContent>
          <TabsContent value="manual" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-medium">
                Step 1 — Add the CSS layer to your{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  globals.css
                </code>
              </p>
              <p className="text-sm text-muted-foreground">
                Copy the{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  @layer vanilla-scroll-sky
                </code>{" "}
                block from the{" "}
                <a
                  href={siteConfig.githubUrl}
                  className="underline underline-offset-4"
                >
                  GitHub repo
                </a>{" "}
                and append it to your globals.css.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Step 2 — Copy the component</p>
              <p className="text-sm text-muted-foreground">
                Copy{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  scroll-reveal.tsx
                </code>{" "}
                into{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  components/scroll-reveal/
                </code>{" "}
                in your project.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-4" />

      <section className="container max-w-3xl py-16 pb-32">
        <h2 className="text-3xl font-bold mb-2">Props</h2>
        <p className="text-muted-foreground mb-8">
          All CSS custom properties are exposed as typed React props.
        </p>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Prop</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Default</th>
                <th className="px-4 py-3 text-left font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    image
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">ReactNode</td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Content inside the sticky image container (img, video, svg)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    caption
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">ReactNode</td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Optional caption content; omit for image-only scenes
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    imageEnter
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  &quot;left&quot; | &quot;right&quot; | &quot;top&quot; |
                  &quot;bottom&quot; | &quot;none&quot;
                </td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;bottom&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Direction the image enters from
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    captionMotion
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  &quot;left-center&quot; | &quot;right-center&quot; |
                  &quot;left-right&quot; | &quot;right-left&quot;
                </td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">
                  Caption animation direction
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    sceneDuration
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;220svh&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Total scroll height of the scene
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    imageHeight
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;66svh&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Height of the sticky image
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    imageStickTop
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;0&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Top offset when image is sticky (set to your header height)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    captionDelay
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;40svh&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Space before caption appears below image
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    captionMotionDistance
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;80vw&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  How far the caption travels horizontally
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    sceneExitSpace
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;55svh&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Padding after the scene
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    captionMaxWidth
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;52rem&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Max width of the caption box
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    imageFit
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  &quot;cover&quot; | &quot;contain&quot;
                </td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;cover&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  CSS object-fit for the image
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    imagePosition
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;center&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  CSS object-position for the image
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    imageStartScale
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">string</td>
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1 rounded text-xs font-mono">
                    &quot;.96&quot;
                  </code>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  Initial scale before image animates in
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Basic usage</h3>
          <div className="rounded-lg bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 p-4">
            <pre className="text-sm text-zinc-100 overflow-x-auto font-mono">
              <code>{`import { ScrollReveal } from "@/components/scroll-reveal/scroll-reveal"

<ScrollReveal
  imageEnter="left"
  image={<img src="/your-image.jpg" alt="..." />}
  caption={
    <>
      <h2>Your headline</h2>
      <p>Your caption text here.</p>
    </>
  }
/>`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 items-start">
          <p className="text-muted-foreground">
            Found this useful? Star the repo on GitHub.
          </p>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <ExternalLink className="size-4" />
            Star on GitHub
          </Link>
        </div>
      </section>
    </main>
  )
}
