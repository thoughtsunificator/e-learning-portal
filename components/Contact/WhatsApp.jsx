import Image from "next/image";

const WhatsApp = () => {
  const openWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=971561391050&text=Hello%20Aeczone");
  }
    return (
        <div className="fixed bottom-8 right-8 z-[99]">
      
        <div
          name="whatsapp"
          aria-label="scroll to top"
          style={{borderRadius:"50%", opacity:"1.5"}}
          className="flex h-10 w-10 cursor-pointer items-center justify-center  text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <Image 
          src="/images/whatsapp2.svg"
          fill
          onClick={openWhatsapp}
          />
        </div>
     
    </div>
    )
}

export default WhatsApp;