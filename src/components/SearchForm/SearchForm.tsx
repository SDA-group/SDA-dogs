import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

interface SearchFormValues {
    name: string;
}

interface SearchFormProps {
    setName: (val: string) => void;
}

const SearchForm = ({ setName }: SearchFormProps) => {
    const { register, handleSubmit} = useForm<SearchFormValues>();
    const updateName = (data: SearchFormValues) => {
        setName(data.name);
    }
    return (
        <form onSubmit={handleSubmit (updateName)}
        style={{ display: "flex", flexDirection: "column"}}>
            <TextField 
            placeholder="name"
            sx={{ my: ".5rem", display: "block", mx: "auto"}}
            {...register("name", { required: true})}
            />
            <Button
            variant="contained"
            type="submit"
            sx={{display: "block", mx: "auto"}}
            >Search</Button>

        </form>

    );
};

export default SearchForm;