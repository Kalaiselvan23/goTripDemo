import { Input } from './ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { useForm } from "react-hook-form";
import { Button } from './ui/button';

type formValues = {
    property: string,
    deals: {
        deal1:boolean,
        deal2: string,
        deal3: string,
    },
    popularFilters: {
        popularFilter1: string,
        popularFilter2: string,
        popularFilter3: string,
    }
    nightlyPrice: number,
}

const FilterBox = () => {
    const { register, handleSubmit, watch } = useForm<formValues>({ defaultValues: { property: "", deals: [], popularFilters: [], nightlyPrice: 0 } });
    const onSubmit=(data)=>{
        console.log(data)
    }
    console.log(watch("property"))
    console.log(watch('popularFilters.popularFilter1'))
    console.log(watch('popularFilters.popularFilter2'))
    console.log(watch('popularFilters.popularFilter3'))
    return (
        <form className='border-r-2 px-5' onSubmit={handleSubmit(onSubmit)}>
            <div className='border-b-2'>
                <Input {...register("property")} placeholder='Search here..' />
            </div>
            <div className="filter-div">
                <h2 className="filter-head">Deals</h2>
                <ul>
                    <li>
                        <Checkbox  {...register('deals.deal1')} className='outline-2' id="freeCancel" />
                        <label htmlFor="freeCancel">Free cancellation</label>
                    </li>  <li>
                        <Checkbox {...register('deals.deal2')} id="reserve" />
                        <label htmlFor="reserve">Reserve now,and pay at stay</label>
                    </li>
                    <li>
                        <Checkbox  {...register('deals.deal3')} id="splOffer" />
                        <label htmlFor="splOffer">Speacial Offers</label>
                    </li>
                </ul>
            </div>
            <div className="filter-div">
                <h2 className="filter-head">Star Rating</h2>
                <ul className='flex'>
                    <li>
                        <input type='radio' id='1' name='rating' />
                        <label htmlFor='1'> &gt; than 1</label>
                    </li>  <li>
                        <input type='radio' id='2' name='rating'/>
                        <label htmlFor='2'> &gt; than 2</label>
                    </li>  <li>
                        <input type='radio' id='3' name='rating'/>
                        <label htmlFor='3'> &gt; than 3</label>
                    </li>  <li>
                        <input type='radio' id='4' name='rating'/>
                        <label htmlFor='4'> &gt; than 4</label>
                    </li> 
                </ul>
            </div>
            <div className="filter-div">
                <h2 className="filter-head">Popular Filters</h2>
                <ul>
                    <li>
                        <Checkbox {...register("popularFilters.popularFilter1")} id="breakfast" />
                        <label htmlFor="breakfast">Breakfast included</label>
                    </li>  <li>
                        <Checkbox {...register("popularFilters.popularFilter2")} id="romantic" />
                        <label htmlFor="romantic">Reserve now,and pay at stay</label>
                    </li>  <li>
                        <Checkbox {...register("popularFilters.popularFilter3")} id="wifi"  />
                        <label htmlFor="wifi">Wifi included</label>
                    </li>
                </ul>
            </div>
            <div className="filter-div">
                <h3 className="filter-head">Nightly Price</h3>
                <p>Less than ${watch('nightlyPrice')}</p>
                <input type='range' max={500000} {...register('nightlyPrice')} min={5000} defaultValue={5000} className='my-3' />
            <Button className='bg-blue-500 rounded-[0.2rem] text-white font-semibold mx-auto hover:bg-blue-400'>Update Filter</Button>
            </div>
        </form>
    )
}

export default FilterBox
