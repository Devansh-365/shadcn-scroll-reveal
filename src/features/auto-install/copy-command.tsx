"use client"

import { usePM, type PackageManager } from "@/hooks/use-pm"
import { siteConfig } from "@/config/site"
import CopyCode from "@/features/code-blocks/copy-code"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const COMMANDS = {
  pnpm: `pnpm dlx shadcn@latest add ${siteConfig.url}r/scroll-reveal.json`,
  npm: `npx shadcn@latest add ${siteConfig.url}r/scroll-reveal.json`,
  yarn: `yarn dlx shadcn@latest add ${siteConfig.url}r/scroll-reveal.json`,
  bun: `bunx shadcn@latest add ${siteConfig.url}r/scroll-reveal.json`,
}

function CodeBlock({ command }: { command: string }) {
  return (
    <pre className="font-mono text-sm text-white">
      <code>{command}</code>
    </pre>
  )
}

export default function CopyCommand() {
  const { pm, setPackageManager } = usePM()

  return (
    <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 dark:bg-zinc-900">
      <div className="flex items-center justify-between bg-zinc-900 px-2 dark:bg-zinc-800">
        <Tabs
          value={pm}
          onValueChange={(value) => setPackageManager(value as PackageManager)}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <TabsList
              className={cn(
                "h-10 gap-0 rounded-none border-0 bg-transparent p-0"
              )}
            >
              {(["pnpm", "npm", "yarn", "bun"] as PackageManager[]).map(
                (manager) => (
                  <TabsTrigger
                    key={manager}
                    value={manager}
                    className={cn(
                      "h-full rounded-none border-0 bg-transparent px-3 font-mono text-xs text-zinc-400",
                      "hover:text-zinc-100",
                      "data-active:bg-transparent data-active:text-zinc-100 data-active:shadow-none",
                      "data-active:border-b data-active:border-zinc-100",
                      "after:hidden"
                    )}
                  >
                    {manager}
                  </TabsTrigger>
                )
              )}
            </TabsList>
            <CopyCode
              code={COMMANDS[pm]}
              className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700"
            />
          </div>

          {(["pnpm", "npm", "yarn", "bun"] as PackageManager[]).map(
            (manager) => (
              <TabsContent key={manager} value={manager}>
                <CardContent className="px-3 py-3">
                  <CodeBlock command={COMMANDS[manager]} />
                </CardContent>
              </TabsContent>
            )
          )}
        </Tabs>
      </div>
    </div>
  )
}
