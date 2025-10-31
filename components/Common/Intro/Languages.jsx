import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [turkish, setTurkish] = useState(0)
    const [english, setEnglish] = useState(0)
    const [macedonian, setMacedonian] = useState(0)
    const [albanian, setAlbanian] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (turkish < 99) {
                setTurkish(prevCount => prevCount + 1);
            }
            if (english < 85) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (macedonian < 99) {
                setMacedonian(prevCount => prevCount + 1);
            }
             if (albanian < 85) {
                setAlbanian(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [turkish, english , macedonian , albanian])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={turkish} size={85} />
                        <span className='text-xs font-bold text-Snow'>Turkish</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={85} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                </div>
                 <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={macedonian} size={85} />
                        <span className='text-xs font-bold text-Snow'>Macedonian</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={albanian} size={85} />
                        <span className='text-xs font-bold text-Snow'>Albanian</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages