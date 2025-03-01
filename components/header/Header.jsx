import Image from "next/image";

export default function HeaderSection(){
    return (
        <>
        <div className="bg-[#d9eef3] ">
             <div className="w-11/12 max-w-3xl mx-auto flex  justify-between gap-4">
                <span className="flex items-center gap-3"> <Image src={"/pictures/arrow-icon.png"} alt="icon" width={24} height={24}/> <h3 className="text-[#047CD7] font-light font-poppins">Welcome to Imagen Wall Art</h3></span>

             </div>
        </div>
        </>
    )
}