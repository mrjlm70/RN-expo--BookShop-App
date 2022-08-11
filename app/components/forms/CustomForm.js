import React from "react";
import { Formik } from "formik";

const CustomForm = ({
    initialValues,
    onSubmit,
    validationSchema,
    children,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
};

export default CustomForm;
