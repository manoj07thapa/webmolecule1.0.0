import { CheckIcon } from "@heroicons/react/outline";

const Stepper = ({ steps, step }) => {
    const displaySteps = steps.map((currentStep, index) => (
        <div key={index} className="w-full  flex  items-center justify-between ">
            <div className=" flex justify-center items-center border border-white w-full py-2 px-1">
                <div className={`rounded-full transition duration-200 ease-in-out border-2 border-indigo-500 ${(step === index || step > index) ? "bg-green-900 " : "bg-gray-700"} h-7 w-7 flex items-center justify-center py-3 ${step.selected ? "bg-green-600 text-white font-bold border border-pink-600" : ""}`}>
                    {/**Display Numbers */}
                    {(step > index) ? (
                        <span className="text-white text-xl font-bold"><CheckIcon className="h-5 w-5" /></span>
                    ) : (
                        <span>{index + 1}</span>
                    )
                    }

                </div>
                <div className={` text-gray-200 font-semibold text-sm mt-12 w-32  fontmedium uppercase ${step > index ? "text-gray-900" : "text-gray-400"}`}>
                    {/**Display Description  */}
                    {currentStep.props.label}
                </div>
            </div>
            {/**Display Line */}
            {/* <div className={`flex-auto ${index === steps.length - 1 ? " " : "border-t-4"} transition duration-500 ease-in-out ${(step > index) ? "border-green-900" : "border-red-900"}`}>

            </div> */}
        </div>
    ))


    return <div className="p-4 mx-4 flex justify-between items-center ">{displaySteps}</div>;
};
export default Stepper;