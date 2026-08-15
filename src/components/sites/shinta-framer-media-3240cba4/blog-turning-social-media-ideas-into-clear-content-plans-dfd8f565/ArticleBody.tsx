import { Fragment } from "react";

type Block =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "p-lines"; lines: string[] };

const blocks: Block[] = [
  { kind: "h2", text: "Every strong post starts before the design" },
  { kind: "p", text: "Great social media content does not start in design tools." },
  { kind: "p", text: "It starts with thinking." },
  {
    kind: "p",
    text:
      "Social media agencies spend a lot of time planning before anything is posted. They look at goals audience behavior and brand voice. This thinking stage is what separates random posting from intentional growth.",
  },
  {
    kind: "p",
    text: "Without strategy content feels busy. With strategy content feels calm and focused.",
  },
  { kind: "h2", text: "Strategy gives content a clear direction" },
  { kind: "p", text: "Social media agencies begin by defining direction." },
  {
    kind: "p",
    text:
      "They decide what the brand should talk about and what it should avoid. This keeps messaging clear and prevents mixed signals.",
  },
  {
    kind: "p-lines",
    lines: [
      "Strategy helps answer simple questions",
      "What does this brand stand for",
      "Why should people care",
      "What action should they take",
    ],
  },
  {
    kind: "p",
    text:
      "When direction is clear content becomes easier to create and easier to understand.",
  },
  { kind: "h2", text: "Content planning reduces stress" },
  { kind: "p", text: "Many brands struggle because they create content last minute." },
  {
    kind: "p",
    text:
      "Agencies avoid this by planning content ahead of time. They use calendars to map out posts weeks in advance.",
  },
  {
    kind: "p",
    text:
      "This reduces stress and creates space to think creatively. When content is planned there is no panic or rushing.",
  },
  {
    kind: "p",
    text: "Planning also helps brands stay consistent even during busy periods.",
  },
  { kind: "h2", text: "Focus improves content quality" },
  {
    kind: "p",
    text: "When agencies plan content they focus on fewer stronger ideas.",
  },
  {
    kind: "p",
    text:
      "Instead of posting everything they choose what matters most. This helps content feel intentional instead of noisy.",
  },
  { kind: "p", text: "Focused content is easier to read and easier to remember." },
  { kind: "p", text: "Less content with more meaning often performs better." },
  { kind: "h2", text: "Strategy and creativity work together" },
  { kind: "p", text: "Strategy does not limit creativity. It supports it." },
  {
    kind: "p",
    text:
      "When direction is clear creative ideas flow faster. Designers and writers know the boundaries and can experiment inside them.",
  },
  {
    kind: "p",
    text:
      "Social media agencies balance structure with creativity. This keeps content fresh while staying on brand.",
  },
  { kind: "p", text: "Good strategy gives creativity a place to grow." },
  { kind: "h2", text: "Workspaces shape the creative process" },
  { kind: "p", text: "Where people work affects how they think." },
  {
    kind: "p",
    text:
      "Quiet focused workspaces help strategists write plan and review content deeply. This focused time improves decision making.",
  },
  {
    kind: "p",
    text:
      "Social media agencies protect this thinking time. It allows better ideas to surface without distraction.",
  },
  { kind: "p", text: "Clear thinking leads to clear content." },
  { kind: "h2", text: "Data guides future decisions" },
  { kind: "p", text: "After content goes live agencies review performance." },
  {
    kind: "p",
    text:
      "They look at what people saved shared and commented on. This data helps improve future strategy.",
  },
  {
    kind: "p",
    text:
      "Over time content becomes sharper because decisions are based on real behavior not assumptions.",
  },
  { kind: "p", text: "Small improvements compound into big results." },
  { kind: "h2", text: "Why strategy matters for your brand" },
  {
    kind: "p",
    text: "If your social media feels scattered the problem is rarely effort.",
  },
  { kind: "p", text: "It is usually a lack of direction." },
  {
    kind: "p",
    text:
      "Social media agencies turn ideas into systems. They help brands move from random posts to meaningful content.",
  },
  {
    kind: "p",
    text:
      "With the right strategy social media stops feeling overwhelming and starts driving real impact.",
  },
];

const h2Classes =
  "text-[28px] font-bold leading-[34px] tracking-[-1.12px] text-shinta-ink md:text-[34px] md:leading-[40px] md:tracking-[-1.36px] xl:text-[40px] xl:leading-[48px] xl:tracking-[-1.6px]";

const h2SpacingClasses = "mt-[28px] md:mt-[32px] xl:mt-[40px] first:mt-0";

const pClasses =
  "text-[16px] font-normal leading-[25px] text-shinta-stone md:text-[18px] md:leading-[27px] xl:text-[18px] xl:leading-[27px]";

const pSpacingClasses = "mt-[16px] md:mt-[18px] xl:mt-[20px]";

export function ArticleBody() {
  return (
    <div className="w-full md:max-w-[640px] xl:max-w-[640px]">
      {blocks.map((block, index) => {
        if (block.kind === "h2") {
          return (
            <h2 key={index} className={`${h2Classes} ${h2SpacingClasses}`}>
              {block.text}
            </h2>
          );
        }

        if (block.kind === "p-lines") {
          return (
            <p key={index} className={`${pClasses} ${pSpacingClasses}`}>
              {block.lines.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </p>
          );
        }

        return (
          <p key={index} className={`${pClasses} ${pSpacingClasses}`}>
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
