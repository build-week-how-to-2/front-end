import React from "react";
import useForm from "../../hooks/useForm";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function Contact() {
	const [contactForm, setContactForm] = useForm("contactForm", {
		name: "",
		email: "",
		message: "",
	});
	return (
		<div>
			<Form
				onSubmit={event => {
					event.preventDefault();
					localStorage.removeItem("contactForm");
				}}>
				<FormGroup>
					<Label>
						Your Name:{"  "}
						<Input
							type="text"
							name="name"
							value={contactForm.name}
							onChange={setContactForm}
						/>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label>
						Your Email:{"  "}
						<Input
							type="text"
							name="email"
							value={contactForm.email}
							onChange={setContactForm}
						/>
					</Label>
				</FormGroup>
				<FormGroup>
					<Label>
						Your Message:{"  "}
						<Input
							type="textarea"
							name="message"
							value={contactForm.message}
							onChange={setContactForm}
						/>
					</Label>
				</FormGroup>
				<Button color="primary">Submit</Button>
			</Form>
		</div>
	);
}
