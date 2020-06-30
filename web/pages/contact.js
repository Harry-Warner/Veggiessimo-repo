import React, { useState } from "react";
import styled from "styled-components";
import TitleComponent from "../components/titleComponent.jsx";
import Colors from "../styled/colors";
import { Instagram } from "@styled-icons/entypo-social/Instagram";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { PinterestWithCircle } from "@styled-icons/entypo-social/PinterestWithCircle";
import { Email } from "@styled-icons/material/Email";
import MetaTags from "../components/metatags";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    $subject: "",
    message: "",
    honeypot: "",
    replyTo: "@",
    accessKey: "a4f1a0d4-6b13-41c8-bea7-02003dc51b20",
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(true);
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us.",
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <>
      <MetaTags
        description="Drop us an email, all enquiries are sent to veggiessimorecipes@gmail.com"
        type="object"
        title="Contact | Veggiessimo"
        url="contact"
        imageSrc="https://veggiessimo.com.au/images/cook-with-us-1-sm.png"
      />
      <TitleComponent title="Contact" />
      <StyledResponse
        open={open}
        className="fixed z-50 flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0"
      >
        <div
          open={open}
          onClick={() => setOpen(false)}
          className="fixed z-0 top-0 right-0 bottom-0 left-0 bg-blackT"
        />
        <div className="fixed w-11/12 md:w-7/12 lg:w-4/12 p-4 bg-lightPink">
          <h2 className="text-xxl text-center">{response.message}</h2>
          <StyledClose
            onClick={() => setOpen(false)}
            className="absolute right-0"
          >
            <HighlightOffIcon style={{ fontSize: 30, color: "#efe1e8" }} />
          </StyledClose>
        </div>
      </StyledResponse>
      <div className="flex flex-col w-full mx-auto relative mt-2 md:mt-16">
        <picture className="w-full z-0">
          <source
            media="(min-width: 48rem) and (max-width: 63rem)"
            srcSet={require("../images/contact768.jpg")}
          />
          <source
            media="(min-width: 64rem)"
            srcSet={require("../images/contact1024.jpg")}
          />
          <img
            src={require("../images/contact640.jpg")}
            alt="Array of ground spices in bowls"
          />
        </picture>
        <StyledTitle className="absolute text-big md:text-huge lg:text-vhuge font-script left-0 ml-4 md:ml-6 lg:ml-12 mt-8 md:mt-24 lg:mt-10">
          Get in Touch
        </StyledTitle>
        <StyledForm
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}
          className="absolute self-center  justify-between flex flex-col md:items-start py-4"
        >
          <input
            onChange={(e) => {
              handleChange(e);
              setName(e.target.value);
            }}
            required
            type="text"
            name="name"
            value={name}
            className="name w-68 lg:w-108 lg:h-12 my-2 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
            placeholder="Name"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              handleChange(e);
              setEmail(e.target.value);
            }}
            required
            className="email w-68 lg:w-108 lg:h-12 my-2 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
          />
          <input
            type="text"
            name="$subject"
            value={subject}
            onChange={(e) => {
              handleChange(e);
              setSubject(e.target.value);
            }}
            className="subject w-68 lg:w-108 lg:h-12 my-2 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
            placeholder="Subject"
            required
          />
          <div style={{ display: "none" }}>
            <label>Title</label>
            <div>
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end py-1">
            <textarea
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={(e) => {
                handleChange(e);
                setMessage(e.target.value);
              }}
              required
              className="message h-full w-full md:w-68 lg:w-108 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
            />
            <button
              type="submit"
              className="hidden md:block bg-lightBlue text-white uppercase font-bold w-16 ml-6 lg:ml-10 self-end rounded-xl"
            >
              Send
            </button>
            <button
              type="submit"
              className="md:hidden bg-lightBlue text-white uppercase font-bold w-16 ml-5 self-end rounded-xl"
            >
              Send
            </button>
          </div>
        </StyledForm>

        <div className="w-full bg-lightBlueT flex flex-col lg:my-2">
          <div className="w-full flex justify-center">
            <a href="https://www.facebook.com/veggiessimo/">
              <StyledFace />
            </a>
            <a href="https://www.instagram.com/veggiessimo.au/">
              <StyledInst />
            </a>
            <StyledPin />
          </div>
          <div className="flex justify-center items-center">
            <StyledEmail />
            <p className="text-xl md:text-xxl lg:text-xxxl pb-3 md:pb-4 font-sans">
              veggiessimorecipes@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const StyledResponse = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
`;
const StyledClose = styled.div`
  cursor: pointer;
  top: -1.4375rem;
  right: -1.4375rem;
`;

const StyledTitle = styled.h1`
  @media (max-width: 47.9rem) {
    top: 35vw;
  }
`;

const StyledForm = styled.form`
  bottom: 5.875rem;
  width: 90%;
  height: 70vw;

  .name,
  .subject,
  .email {
    width: 100%;
    height: 7.5vw;
    padding-bottom: 0.25rem;
  }

  div {
    height: 27.5vw;
  }
  button {
    height: fit-content;
    width: fit-content;
    padding: 1vw 2vw 1vw;
    font-size: 4vw;

    &:hover {
      background: white;
      color: ${Colors.lightBlue};
    }
  }

  @media (min-width: 48rem) {
    width: 95%;
    height: 55%;
    bottom: 8.3125rem;
    div {
      font-size: 1.5625rem;
      height: 12.5rem;
    }
    button {
      font-size: 1.5625rem;
      padding: 0.45rem 0.625rem 0.3125rem;
    }
    .name,
    .email,
    .subject {
      font-size: 1.5625rem;
      width: 19rem;
      height: 3.125rem;
      padding-bottom: 0.625rem;
    }
  }
  @media (min-width: 64rem) {
    bottom: 10rem;
    .name,
    .email,
    .subject {
      font-size: 1.5625rem;
      width: 27rem;
      height: 3.125rem;
      padding-bottom: 0.625rem;
    }
  }
`;

const StyledInst = styled(Instagram)`
  width: 2rem;
  height: 2rem;
  margin: 0.625rem;

  @media (min-width: 48rem) {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }
`;
const StyledFace = styled(Facebook)`
  width: 2rem;
  height: 2rem;
  margin: 0.625rem;

  @media (min-width: 48rem) {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }
`;
const StyledPin = styled(PinterestWithCircle)`
  width: 2rem;
  height: 2rem;
  margin: 0.625rem;

  @media (min-width: 48rem) {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }
`;

const StyledEmail = styled(Email)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.3125rem 0.625rem;

  @media (min-width: 48rem) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.625rem 1rem;
  }
`;

export default Contact;
