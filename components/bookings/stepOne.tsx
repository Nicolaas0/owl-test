import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup } from "@mui/material";
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCalendar } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai'
import logo from '@/public/logo.png'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from 'react';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function StepOne() {
    const [value, onChange] = useState<Value>(new Date());
    const router = useRouter()

    return (
        <div className='px-8 py-3 w-[430px] shadow-md'>
            <FormControl sx={{ width: '100%', marginBottom: '24px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Search Event</InputLabel>
                <OutlinedInput
                    fullWidth
                    sx={{
                        borderRadius: '999px',
                        fontSize: '16px'
                    }}
                    id="outlined-adornment-password"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <AiOutlineSearch />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Search Event"
                />
            </FormControl>
            <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                    <div>Upcoming Event</div>
                    <RxCalendar />
                </div>
                <div className="flex gap-2 items-center bg-[#FFF9EB] border border-solid border-[#F1D59E] rounded-lg p-3">
                    <Image className="rounded-lg" src={logo} width={48} height={48} alt="Black Owl Logo" />
                    <div className="space-y-1">
                        <div className="text-sm font-bold">Black Owl Event</div>
                        <div className="text-xs text-[#757575]">Apr 24, 2023</div>
                    </div>
                </div>
            </div>
            <Calendar className='px-9 ml-2 mb-6' onChange={onChange} value={value} />
            <div className="w-full h-4 bg-[#FBF8F2] mb-6" />
            <div className='text-[#BFA164] font-semibold mb-4'>Additional Information</div>
            <FormControl sx={{ width: '100%', marginBottom: '24px' }} variant="outlined">
                <OutlinedInput
                    fullWidth
                    sx={{
                        borderRadius: '14px',
                        fontSize: '16px'
                    }}
                    id="outlined-adornment-password"
                    size='small'
                    type="time"
                />
            </FormControl>
            <FormControl sx={{ width: '100%', marginBottom: '24px' }} variant="outlined">
                <OutlinedInput
                    fullWidth
                    sx={{
                        borderRadius: '14px',
                        fontSize: '16px'
                    }}
                    id="outlined-adornment-password"
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <AiOutlineUser />
                            </IconButton>
                        </InputAdornment>
                    }
                    placeholder="Choose Pack"
                    size='small'
                />
            </FormControl>
            <FormLabel id="demo-radio-buttons-group-label" className='font-semibold text-black'>RSVP Area</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="floor"
                name="radio-buttons-group"
            >
                <FormControlLabel value="floor" control={<Radio />} label="Floor" />
                <FormControlLabel value="room" control={<Radio />} label="Room Karaoke" />
            </RadioGroup>
            <div className="w-full h-4 bg-[#FBF8F2] mb-6" />
            <FormControlLabel className='mx-auto mb-8' control={<Checkbox defaultChecked />} label="I read and agree to the above terms and conditions" />
            <div className='flex gap-3 justify-center'>
                <button className='p-2 font-semibold border border-solid border-[#E0E0E0] rounded-lg text-[#757575]' onClick={()=> { router.push('//') }}>Back</button>
                <button className='p-2 font-semibold border border-solid rounded-lg text-white bg-[#D6B87C]'>Continue</button>
            </div>
        </div>
    )
}