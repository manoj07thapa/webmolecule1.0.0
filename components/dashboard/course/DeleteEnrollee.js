
import { Dialog } from "@headlessui/react";
import DialogBox from "../../utils/DialogBox";

const DeleteEnrollee = () => {

    return
    (<DialogBox>
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
            >
                Are you sure?
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    Deleting the course will permanently remove the course
                    from database!!
                </p>
            </div>
            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {
                        removeCourse(courseId);
                        closeModal();
                    }}
                >
                    Delete Anyway
                </button>
            </div>
        </Dialog.Panel>;
    </DialogBox>
    )
};
export default DeleteEnrollee;