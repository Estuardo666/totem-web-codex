type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Structured data is injected as a raw script tag because Next.js escapes
 * regular children, which would break the JSON payload for crawlers.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
