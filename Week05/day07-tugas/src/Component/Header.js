import {
    CheckIcon
} from '@heroicons/react/solid'

export default function Header(props) {
    return (
        <div className="lg:flex lg:items-center lg:justify-between mb-5">
            <div className="min-w-0 flex-1 col-6">
                <h2 className="text-5xl text-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight py-3">
                    {props.name}
                </h2>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="sm:ml-3">
                    <button
                        onClick={() => {
                            props.setDisplay(true)
                            props.setId(0)
                        }}
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add
                    </button>
                </span>
            </div>
        </div>
    )
}