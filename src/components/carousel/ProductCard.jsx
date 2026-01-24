import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"

export function ProductCard({ image, category, title, price, rating }) {
  return (
    <Card className="p-6 relative min-w-65">
      <img
        src={image}
        alt={title}
        className="mx-auto h-48 object-contain"
      />

      <div className="mt-6 space-y-2">
        <p className="text-sm text-muted-foreground">{category}</p>

        <h3 className="font-semibold text-lg">{title}</h3>

        {/* rating */}
        <div className="flex gap-1 text-orange-400">
          {"★".repeat(rating)}
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">$ {price}</span>

          <button className="bg-slate-900 text-white rounded-full w-10 h-10 flex items-center justify-center">
            <Plus size={18} />
          </button>
        </div>
      </div>
    </Card>
  )
}
