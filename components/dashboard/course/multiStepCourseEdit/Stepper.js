import { useState, useEffect, useRef } from "react";


const Stepper = ({ steps, currStep }) => {
    const [newStep, setNewStep] = useState([])
    const stepRef = useRef()
    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps]
        let count = 0

        while (count < newSteps.length) {
            //current step
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                }
                count++
            }
            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                }
                count++

            }
            //pending step
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                }
                count++
            }
        }
        return newSteps
    }
    useEffect(() => {
        //create object for each step
        const stepsState = steps.map((step, index) =>
            Object.assign({},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false
                }
            )
        )
        //get hold of the previous state
        stepRef.current = stepsState
        const current = updateStep(currStep - 1, stepRef.current)
        setNewStep(current)

    }, [steps, currStep])

    const displaySteps = newStep.map((step, index) => (
        <div key={index} className={` w-full flex items-center`} >
            <div className="relative flex flex-col items-center text-teal-600">
                <div className={`rounded-full transition duration-200 ease-in-out border-2 border-gray-300 h-7 w-7 flex items-center justify-center py-3 ${step.selected ? "bg-green-600 text-white font-bold border border-pink-600" : ""}`}>
                    {/**Display Numbers */}
                    {(step.completed) ? (
                        <span className="text-white text-xl font-bold">&#10003;</span>
                    ) : (
                        <span>{index + 1}</span>
                    )
                    }

                </div>
                <div className={`absolute top-0 text-center mt-12 w-32 text-xs fontmedium uppercase ${step.highlighted ? "text-white" : "text-gray-400"}`}>
                    {/**Display Description  */}
                    {step.description}
                </div>
            </div>
            <div className={`flex-auto border-t-2  transition duration-500 ease-in-out ${(step.completed) ? "border-green-900" : "border-gray-00"}`}>
                {/**Display Line */}
            </div>
        </div>
    ))


    return (
        <div className="p-4 mx-4 flex justify-between items-center">
            {displaySteps}
        </div>
    );
};
export default Stepper;