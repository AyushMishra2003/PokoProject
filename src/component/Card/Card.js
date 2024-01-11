import Icon from '../Icon/Icon';
import isWinner from '../../Helper/Helper';
function Card({player ,onPLay,index}){
    // let icon=<Icon/>
    let icon=<Icon/>
    if(player === 'X')
    {
        // console.log("I AM PLAYER ", {player});
        icon=<Icon name="cross"/>
    }
    else if(player ==='O'){
        // console.log("I AM PLAYER ", {player});
        icon=<Icon name="circle"/>
    }
    return(
        <div className='border border-black  p-[0.1rem] flex flex-row items-center justify-center w-[140px] h-[140px] rounded-[0.2rem] bg-yellow-500' onClick={()=>onPLay(index)}>
             {icon}
        </div>
    )
}
export default Card