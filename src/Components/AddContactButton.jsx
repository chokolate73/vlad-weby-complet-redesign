'use client'
import { PersonPlus } from 'react-bootstrap-icons'

const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Vladislav Khvorov
N:Khvorov;Vladislav;;;
ORG:Vlad Weby
TITLE:Web Developer & AI Specialist
TEL;TYPE=CELL:+421919208426
EMAIL:v.hvorov73@gmail.com
URL:https://vladkhvorov.com
ADR;TYPE=WORK:;;Bottova 2A;Bratislava;;811 09;Slovakia
END:VCARD`

const AddContactButton = () => {
  const handleDownload = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'vladislav-khvorov.vcf'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleDownload}
      className="w-full flex items-center justify-center gap-3 bg-clr_base text-clr_body font-semibold rounded-[12px] p-4 sm:p-5 text-base sm:text-lg duration-300 hover:opacity-90 active:scale-[0.98]"
    >
      <PersonPlus className="text-xl sm:text-2xl" />
      Add Contact
    </button>
  )
}

export default AddContactButton
