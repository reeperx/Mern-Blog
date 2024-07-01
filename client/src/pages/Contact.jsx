import {
  Alert,
  Button,
  Label,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.user_name ||
      !formData.user_email ||
      !formData.user_subject ||
      !formData.user_message
    ) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const emailParams = {
        from_name: formData.user_name,
        from_email: formData.user_email,
        subject: formData.user_subject,
        message: formData.user_message,
      };

      console.log("Sending email with params:", emailParams); // Debugging log

      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      console.log("EmailJS response:", result); // Debugging log

      if (result.status === 200) {
        setLoading(false);
        navigate("/");
      } else {
        setErrorMessage("Failed to send email. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <img src="/logo.svg" alt="logo" />
          </Link>
          <p className="text-sm mt-5">
            Fill out the form here and we will get back to you as soon as
            possible.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Name" />
              <TextInput
                name="user_name"
                type="text"
                placeholder="your full name here"
                onChange={handleChange}
                value={formData.user_name}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                name="user_email"
                type="email"
                placeholder="test@test.com"
                onChange={handleChange}
                value={formData.user_email}
              />
            </div>
            <div>
              <Label value="Your Subject" />
              <TextInput
                name="user_subject"
                type="text"
                placeholder="your subject here"
                onChange={handleChange}
                value={formData.user_subject}
              />
            </div>
            <div>
              <Label value="Your Message" />
              <Textarea
                name="user_message"
                placeholder="your message here"
                rows={6}
                onChange={handleChange}
                value={formData.user_message}
              />
            </div>
            <Button color={"dark"} type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Send"
              )}
            </Button>
          </form>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
