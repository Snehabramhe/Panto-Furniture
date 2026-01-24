import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const options = ["Furniture", "Decor", "Lights"];

export default function CustomSelect() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Furniture");
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (item) => {
    setValue(item);
    setOpen(false);

    // 🔥 redirect
    navigate(`/${item.toLowerCase()}`);
  };

  return (
    <div ref={ref} className="relative w-30 text-nav">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full text-left bg-transparent text-white border-0 focus:outline-none flex justify-between items-center hover:text-primary cursor-pointer"
      >
        {value}
        <span>▾</span>
      </button>

      {open && (
        <ul className="absolute left-0 mt-2 w-full bg-[#1f1f1f] rounded-md shadow-lg max-h-40 overflow-y-auto z-50">
          {options.map((item) => (
            <li
              key={item}
              onClick={() => handleSelect(item)}
              className={`px-3 py-2 cursor-pointer hover:bg-white/10 hover:text-primary ${
                item === value ? "bg-white/10" : ""
              }`}
            > 
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
