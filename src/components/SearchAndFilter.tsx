import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Icon } from '@iconify-icon/react'

interface SearchAndFilterProps {
    onSearch: (query: string) => void;
    onRegionFilter: (region: string) => void;
    onClearFilters: () => void;
    isLoading: boolean;
}

const regions = [
    'All Regions',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania'
]

function SearchAndFilter({ onSearch, onRegionFilter, onClearFilters, isLoading }: SearchAndFilterProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedRegion, setSelectedRegion] = useState("")

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(searchQuery)
    }

    const handleRegionChange = (region: string) => {
        setSelectedRegion(region)
        if (region === 'All Regions') {
            onRegionFilter('')
        } else {
            onRegionFilter(region)
        }
    }

    const handleClearFilters = () => {
        setSearchQuery("")
        setSelectedRegion("")
        onClearFilters()
    }

    return (
        <div className="mb-8 flex flex-col md:flex-row gap-4 p-8 border border-main-dark rounded-lg">
            <form onSubmit={handleSearchSubmit} className="flex gap-4 w-full">
                <div className="relative text-white w-full">
                    <Icon icon="mdi:search" className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400' width={20} height={20} />
                    <Input
                        placeholder="Search countries..."
                        className="pl-10 text-white bg-transparent border-gray-600 focus:border-main-light"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        disabled={isLoading}
                    />
                </div>
                <Button
                    type="submit"
                    className="bg-main-dark hover:bg-main-light whitespace-nowrap"
                    disabled={isLoading}
                >

                    {isLoading ? <Icon icon="mdi:loading" width={20} height={20} /> : <Icon icon="mdi:search" width={20} height={20} />}
                </Button>
            </form>

            <div className="flex gap-4 items-center">
                <div className="w-full">
                    <Select value={selectedRegion} onValueChange={handleRegionChange}>
                        <SelectTrigger className="w-full text-white bg-transparent border-gray-600 focus:border-main-light">
                            <SelectValue placeholder="Filter by Region" />
                        </SelectTrigger>
                        <SelectContent
                            className="bg-gray-800 border-gray-600 text-white"
                            position="popper"
                            align="start"
                        >
                            {regions.map((region) => (
                                <SelectItem
                                    key={region}
                                    value={region}
                                    className="hover:bg-main-dark focus:bg-main-dark"
                                >
                                    {region}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {(searchQuery || selectedRegion) && (
                    <Button
                        onClick={handleClearFilters}
                        className="bg-main-dark text-white hover:bg-main-light cursor-pointer"
                        disabled={isLoading}
                    >
                        <Icon icon="mdi:close" width={20} height={20} />
                        Clear
                    </Button>
                )}
            </div>
        </div>
    )
}

export default SearchAndFilter