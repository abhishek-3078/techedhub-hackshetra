import './TutorialUnit.css';

const TutorialUnit = () =>{
    const TutorialName = 'Dsa by Love Babbar';
    const isVerified = true;
    const profession = "Youtuber"
    var upVoteCount = 0;
    var downVoteCount = 0;
    const discription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita temporibus";
    return(
        <div className="courseUnitBox w-full h-50px flex text-black bg-gray-300 relative"> 
            <div className='w-[70%]'>
                <h5 className='font-bold'>{TutorialName}  </h5>
                <p>{discription}</p>
            </div>
            <div className='flex-col ml-32 h-50px space-y-7'>
                {isVerified && <img src="https://cdn-icons-png.flaticon.com/128/1828/1828640.png" alt="here" className='h-7 w-7'/>}
                <div className='flex space-x-5'>
                <img src="https://cdn-icons-png.flaticon.com/128/3148/3148312.png" alt="up" className='h-5 w-5'/> 
                <img src="https://cdn-icons-png.flaticon.com/128/5548/5548112.png" alt="down" className='h-5 w-5'/>
                </div>
            </div>
        </div>
    )
}
export default TutorialUnit;