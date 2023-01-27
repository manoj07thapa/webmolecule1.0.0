const StepperControl = ({ handleClick, steps, currStep }) => {
    return (
        <div className="container flex justify-around mt-24 mb-8 ">
            {/**Back button */}
            <button disabled={currStep === 1} onClick={() => handleClick()} type="" className={`bg-white text-slate-400 uppercase px-4 py-2 rounded-md font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currStep === 1 ? "opacity-50 cursor-not-allowed" : ""} `}>Previous</button>

            {/**Next button */}
            <button onClick={() => handleClick("next")} type="" className="bg-green-500 text-white uppercase px-4 py-2 rounded-md font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ">{currStep === steps.length - 1 ? "Confirm" : "Next"}</button>

        </div>
    );
};
export default StepperControl;