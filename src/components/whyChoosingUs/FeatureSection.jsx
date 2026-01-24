import { Card, CardContent } from "@/components/ui/card";

export function FeatureSection({ heading, features }) {
  return (
    <section className="max-w-310 py-20 mx-auto p-4">
      <div className="grid gap-6 md:gap-8 md:grid-cols-4 md:place-items-center">
        {/* LEFT TITLE */}

        <h2 className="text-4xl font-bold leading-tight whitespace-pre-line">
          {heading}
        </h2>

        {/* RIGHT FEATURES */}
        <div className="md:col-span-3 grid gap-4 md:gap-8 md:grid-cols-3">
          {features.map((item, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>

                {item.linkText && (
                  <span className="text-orange-500 text-sm font-medium cursor-pointer flex items-center gap-2">
                    {item.linkText} →
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
