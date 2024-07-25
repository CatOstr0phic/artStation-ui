export default function Categorization({children, category}) {
  return (
    <div before="Hello World" className="bg-[#18181c] pb-2">
    <div className="w-100 bg-[#303034] text-base text-white py-[7px] px-[14px]">
      {category}
    </div>
    <div className="py-[7px] px-[14px]">
      {children}
    </div>
   
  </div>
  )
}
