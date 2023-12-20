
import * as React from "react"
import { Check} from "lucide-react"
import { IoLocationSharp } from "react-icons/io5";
import { formType } from "./HomeInput";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type propType={
  countries:{_id:string,country:string}[]
  stateFn:React.Dispatch<React.SetStateAction<formType | undefined>>
}
export default function ComboboxDemo({countries,stateFn}:propType) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="p-0 w-[200px] justify-start text-gray-500 outline-none border-none"
        >
          {value
            ? countries.find((country) => country._id == value)?.country
            : "Where are you going?"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white">
        <Command>
          <CommandInput placeholder="Where are you going?" />
          <CommandEmpty>No Cities found</CommandEmpty>
          <CommandGroup>
            {countries.map((country:{_id:string,country:string}) => (
              <CommandItem
                key={country._id}
                value={country._id}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  stateFn((prev)=>({...prev,country:currentValue}))
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === country.country? "opacity-100" : "opacity-0"
                  )}
                />
                 <IoLocationSharp />
                {country.country}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
