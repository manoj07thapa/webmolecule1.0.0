const StepControl = ({ step, setStep, isSubmitting, isLastStep }) => {
    return (

        <div className=" flex justify-around mt-24 mb-8 ">
            <div>
                {step > 0 ? (
                    <button
                        className="bg-pink-900 px-4 py-2 rounded-md text-gray-300"
                        disabled={isSubmitting}
                        onClick={() => setStep((s) => s - 1)}
                        type="button"
                    >Back </button>
                ) : null}
            </div>
            <div>
                <button
                    className="bg-blue-900 px-4 py-2 rounded-md text-gray-300"
                    disabled={isSubmitting}
                    type="submit"
                >
                    {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
                </button>
            </div>

        </div >
    )
};
export default StepControl;