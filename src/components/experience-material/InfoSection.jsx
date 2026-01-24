import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function InfoSection({
  tag,
  title,
  description,
  reverse = false,
  imageLayout,
}) {
  return (
    <section className={cn("py-16 md:py-24 md:pb-0 pb-0 px-4 md:px-8 lg:px-0", reverse ? "lg:pr-8" : "lg:pl-8")}>
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ml-auto",
          reverse && "lg:flex lg:flex-row-reverse justify-between"
        )}
      >
        {/* TEXT */}
        <div className="space-y-6 max-w-lg">
          <h5 className="text-orange-500 uppercase">{tag}</h5>
          <h2 className="text-4xl font-bold leading-tight">{title}</h2>
          <p className="text-muted-foreground">{description}</p>

          <Button variant="link" className="text-orange-500 px-0">
            More Info →
          </Button>
        </div>

        {/* IMAGE SLOT */}
        {imageLayout}
      </div>
    </section>
  )
}


