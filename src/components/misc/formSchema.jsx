import * as yup from "yup";

const formSchema = yup.object().shape({
	username: yup
		.string()
		.trim()
		.min(2, "Your name must be at least two characters long")
		.required("The name is a required field"),
	passwd: yup.string(),
	email: yup
		.string()
		.email("The email must be a valid email address")
		.required("The email is a required field"),
	tos: yup.boolean().required("You must agree to the Terms of Service"),
});

export default formSchema;
