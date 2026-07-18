import { useState, type ReactElement } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@algolens/ui";
import { ThemeSwitcher } from "../components/theme-switcher.js";

/**
 * Temporary Phase 10 verification page: exercises all six shadcn-pattern
 * components (Card, Dialog, Button, Input, Tabs, Accordion) together in a
 * real, rendered tree so their wiring — Radix primitives, Tailwind classes
 * resolving to real theme colors, `cn()` merging — is proven, not assumed.
 *
 * Phase 14 (Dashboard Layout) replaces this with the real dashboard design
 * described in MASTER_04_UI_GUIDE.md (header, score cards, charts).
 */
export function DashboardPreview(): ReactElement {
  const [projectName, setProjectName] = useState("");

  return (
    <div className="flex max-w-xl flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Component Preview</CardTitle>
          <CardDescription>
            Phase 10 verification — replaced by Phase 14&apos;s real dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ThemeSwitcher />

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <p className="text-muted-foreground text-sm">Project overview will render here.</p>
            </TabsContent>
            <TabsContent value="details">
              <p className="text-muted-foreground text-sm">Detailed metrics will render here.</p>
            </TabsContent>
          </Tabs>

          <Input
            placeholder="Project name"
            value={projectName}
            onChange={(event) => {
              setProjectName(event.target.value);
            }}
          />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is AlgoLens?</AccordionTrigger>
              <AccordionContent>
                An AI-powered VS Code extension for code analysis, optimization, and documentation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Info Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>AlgoLens Component Library</DialogTitle>
                <DialogDescription>
                  This dialog, and everything else on this page, is rendered by @algolens/ui.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}
