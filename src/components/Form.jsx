import React from "react";




const Form=({formData,setFormData})=>{
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });
    };

    const fields =[
        {name: "title",placeholder:"Project Title"},
        {name: "description",placeholder:"Description"},
        {name: "techStack",placeholder:"Tech Stack (React,Node...)"},
        {name: "features",placeholder:"Features"},
        {name: "installation",placeholder:"Installation steps"},
        {name: "usage",placeholder:"Usage"},
        {name: "contributing",placeholder:"Contributing"},
        {name: "license",placeholder:"License (MIT,etc)"},
    ];

    return (
        <div className="space-y-3">
            {fields.map((field)=>(
                <textarea
                   key={field.name}
                   name={field.name}
                   placeholder={field.placeholder}
                   onChange={handleChange}
                   className="w-full p-2 border rounded"
                />
            ))}
        </div>
    );
};

export default Form;