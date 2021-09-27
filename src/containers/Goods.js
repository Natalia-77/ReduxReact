import { useDispatch } from "react-redux";
import { addGoods } from "../action";


const Goods=()=>{
const dispatch=useDispatch();

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(event.target.elements);
        var data=event.target.elements;
        dispatch(addGoods(data.id,data.title,data.image));

    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input type="text" 
                    name="id"
                    value="7dfs8"
                    />
                </div>
                <div>
                    <input type="text" 
                    name="title"
                    value="Green coffee"
                    />
                </div>
                <div>
                    <input type="text" 
                    name="image"
                    value="https://static.wixstatic.com/media/4d73de_e3349dc9343647c189cda225dc0f6b4c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
                    />
                </div>
                <div>
                   <button type="submit">Add new position</button>
                </div>

            </form>

        </div>
    )

    
}

export default Goods;