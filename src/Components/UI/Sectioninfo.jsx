function Sectioninfo({ colour, text }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-[#A5D8FF] rounded-full px-3 py-1 shadow-sm w-fit">
      <div
        className="w-3 h-3 rounded-full"
        style={{
          background: colour,
          boxShadow: `0 0 10px ${colour}`,
        }}
      ></div>
      <span className="text-sm text-gray-700 font-medium">{text}</span>
    </div>
  );
}

export default Sectioninfo;
