


import { useParams} from 'react-router-dom'
import img from '../images/t-shirt-png.webp'
import { useGetProductByIdQuery, useGetProductsQuery } from '../features/user/apiProductSlice';
import { Order, Product } from './types';
import { useAppSelector } from '../app/hooks';
import { useDispatch } from 'react-redux';
import { addOrder } from '../features/user/ordersStateSlice';
import { v4 as uuidv4 } from 'uuid';

const OneProduct=()=>{
    const dispatch = useDispatch();
    const params = useParams();
    const orders = useAppSelector((state)=>state.orders);


    const handleAddNewOrder=(data:any)=>{
        const newOrder:Order = {id:uuidv4(), name:data.name,product_id:data.id};
        dispatch(addOrder(newOrder));

        console.log(uuidv4());
    }

    console.log(orders);

    
    // const { data, isSuccess } = useGetProductByIdQuery({ Id: params.productId });
    
    const { data, isSuccess }: { data?: { payload: Product }, isSuccess: boolean } = useGetProductByIdQuery({ Id: params.productId });


    // Now you can access the payload directly

    return <>
        {isSuccess?
        <>
        
        <div className='pl-40 pr-40 mt-10'>
            <div className='grid grid-cols-12 gap-2 '>
                <div className=' w-full col-span-5'>
                    <img src={img} />
                </div>
                <div className='w-full col-span-5 flex flex-col'>
                    <span className=" text-xl">{data?.payload.name}</span>
                    <hr className='my-3' />
                    <p><span className=' text-sm'>€</span> <span className=" text-lg font-medium">{data?.payload.price}</span></p>
                    <span className='text-sm font-medium'>About this item</span>  
                    <div>
                        
                    </div>
                </div>
                <div className=' bg-slate-900 w-full  col-span-2'>
                    asdas
                    asdas
                    asdas
                </div>
            </div>
            <span className=" text-xl">{data?.payload.name}</span>
            <div className=' flex '>
                <div>
                    <img src={img} className='h-20'/>
                </div>
                <div>
                    <p>id: {data?.payload.id}</p>
                    <p>name:  {data?.payload.name}</p>
                    <p>price: {data?.payload.price}</p>
                    <p>discount:  {data?.payload.discount}</p>
                    <p>description: {data?.payload.description}</p>
                    <p>quantity: {data?.payload.quantity}</p>
                    <p>isInTheStock: {data?.payload.isInTheStock}</p>
                    <p>numberOfDaysForDelivery: {data?.payload.numberOfDaysForDelivery}</p>
                    <p>address: {data?.payload.address}</p>
                </div>
                <div>
                    <button className=' bg-green-300 p-2' onClick={()=>{handleAddNewOrder(data?.payload)}}>
                        Add To Basket
                    </button>
                </div>
            </div>
        </div>
        </>
        :""}
    </>
}
    
export default OneProduct