
import { useState } from "react"

export function SegmentTabs({ items = [], defaultActive = 0, onChange }) {
  const [activeIndex, setActiveIndex] = useState(defaultActive)

  const handleClick = (index) => {
    setActiveIndex(index)
    onChange?.(items[index])
  }

  const handleSelect = (e) => {
    const index = items.indexOf(e.target.value)
    setActiveIndex(index)
    onChange?.(items[index])
  }

  return (
    <>
      {/* ✅ MOBILE DROPDOWN */}
      <div className="md:hidden w-[50%]">
        <div className="relative">
          <select
            value={items[activeIndex]}
            onChange={handleSelect}
            className="
              w-full appearance-none bg-white rounded-full
              px-6 py-3 pr-10 text-lg font-medium
              shadow border border-gray-200
              focus:outline-none
            "
          >
            {items.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {/*  */}

          {/* Dropdown arrow */}
          <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            ▼
          </span>
        </div>
      </div>

      {/* ✅ DESKTOP SEGMENT TABS */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full p-2 w-fit">
        {items.map((item, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={item}
              onClick={() => handleClick(index)}
              className={`
                px-8 py-3 rounded-full text-lg font-medium transition-all
                ${
                  isActive
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {item}
            </button>
          )
        })}
      </div>
    </>
  )
}
