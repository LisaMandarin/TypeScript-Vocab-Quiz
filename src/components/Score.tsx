// import "../styles/score.css"

export default function Score({ value }: { value: number }) {
  return (
    <div 
        className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center"
        style={{background: `
            radial-gradient(closest-side, white 79%, transparent 80% 100%),
            conic-gradient(#171717 ${value}%, #cccccc 0%) 
            `}}
    >
      <span className="text-xl font-bold">{value} %</span>
    </div>
  );
}
