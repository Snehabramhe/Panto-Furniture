export function TestimonialCard({
  bgImage,
  avatar,
  name,
  role,
  review,
  rating = 5,
}) {
  return (
    <div className="relative h-115 rounded-3xl overflow-hidden shadow-lg">
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute bottom-6 h-55 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-8 w-[85%] text-center">
        <img
          src={avatar}
          className="w-16 h-16 rounded-full mx-auto -mt-14 border-4 border-white bg-white object-cover"
        />

        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>

        <p className="mt-3 text-sm text-muted-foreground">
          “{review}”
        </p>

        <div className="flex justify-center gap-1 mt-4">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-orange-500">★</span>
          ))}
        </div>
      </div>
    </div>
  )
}
