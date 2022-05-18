export default function AccomplishmentItem(props) {
    return (
        <div className="my-2 flex flex-col hover:bg-gradient-to-br from-indigo-50 to-transparent rounded-lg pl-4 pr-8 py-4 group border border-gray-50">
            
            <div className="my-1 flex flex-col justify-start items-start">
                
                <a href={ props.titleLink } target="_blank" rel="noopener noreferrer">
                    <div className="text-xl text-gray-500 font-semibold group-hover:text-indigo-900">
                        { props.title }
                    </div>
                </a>

            </div>

            <div className="my-1 flex flex-row justify-between items-start">
                
                <div className="text-lg text-gray-600 font-medium">
                    { props.university }
                </div>

            </div>

            <div className="my-1 flex flex-row justify-between items-start">
                
                <div className="italic text-sm text-gray-600 font-normal">
                    { props.period }
                </div>

            </div>

            <div className="my-1 flex flex-row justify-between items-start">

                <div className="text-sm text-gray-600 font-medium group-hover:text-indigo-900">
                    <a href={ props.certificateLink } target="_blank" rel="noopener noreferrer">
                        { props.certificate }
                    </a>
                </div>

                <div className="text-sm text-gray-600 font-medium">
                    { props.platform }
                </div>

            </div>

        </div>
    );
}