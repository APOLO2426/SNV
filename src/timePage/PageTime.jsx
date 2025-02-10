import Card from "../Components/Card";
import Timer from "../Components/Timer";

const Page=()=>{
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col ">
                <h1 className="text-2xl font-bold">
                    Que crees que hay al final de este contador?
                </h1>
                <Timer/>
            </div>
            <div className="mt-5">
                <Card/>
            </div>
        </div>
    );
}
export default Page