function Heading({heading}:{heading:string}) {
  return (
    <div className="w-screen h-[20] bg-red-500  flex justify-center items-center sm:mb-0 mb-10">
    <h1 className="font-bold text-[42px]  tracking-[0.8rem] text-[#01f3a2] text-center">{heading}</h1>
    </div>
  )
}

export default Heading