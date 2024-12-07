const PersonalDetailPreview = ({ resumeInfo }) => {

    return (
        <div>
            <h2 className=" font-bold text-xl text-center"
                style={{
                    color: resumeInfo?.headingColor
                }}
            >
                {resumeInfo?.firstName}  {resumeInfo?.lastName}
            </h2>
            <h2 className="text-center text-sm font-medium"
                style={{ color: resumeInfo?.subHeadingColor }}>

                {resumeInfo?.jobTitle}
            </h2>
            <h2 className="text-xs text-center font-normal">
                {resumeInfo?.address}
            </h2>
            <div className="flex justify-between">
                <h2 className="font-normal text-xs">
                    {resumeInfo?.phone}
                </h2>
                <h2 className="font-normal text-xs">{resumeInfo?.email}</h2>
            </div>
            <hr className=" border-[1.5px] my-2" />
        </div>
    )
}

export default PersonalDetailPreview