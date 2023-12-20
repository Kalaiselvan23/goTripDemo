import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const RoomSelect = ({roomPrice}:{roomPrice:number}) => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="No of Rooms" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">1(US${1*roomPrice})</SelectItem>
                <SelectItem value="2">2(US${2*roomPrice})</SelectItem>
                <SelectItem value="3">3(US${3*roomPrice})</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default RoomSelect
