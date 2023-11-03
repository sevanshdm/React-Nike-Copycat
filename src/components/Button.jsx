const Button = ({ label, iconURL}) => {
    return (    // make items appear one next to another, center items horizontally, center items vertically...
        <div className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
            {label}

            <img 
                src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />
        </div>
    )
}

export default Button