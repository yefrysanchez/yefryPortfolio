const ContactPage = () => {
  let url =
    "https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <main className="px-4 lg:px-8">
      <div className="pt-28 text-shade1 mb-12">
        <h1 className="tracking-tighter uppercase text-8xl lg:text-[140px] xl:text-[240px] font-semibold mb-8">
          get in touch.
        </h1>
        <div className="h-[350px] lg:h-[550px] rounded-3xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={url}
            alt="contact image"
          />
        </div>
      </div>

      <div className="lg:flex gap-8 max-w-[1300px] lg:mx-auto mb-12">
        <div className="mb-8 lg:flex-1">
          <p className="text-shade1/70 text-xl xl:text-2xl">
            Do you have a question about my work or a project in mind? I'd love
            to hear from you! Feel free to use the contact form below, send me
            an email directly, or connect with me on social media. I'm always
            open to collaborating on creative projects.
          </p>
        </div>

        <div className="text-shade1 flex flex-col  gap-4 lg:flex-1">
          <a href="mailto:">
          <div className=" bg-shade2/15 rounded-3xl flex justify-center items-center p-6 gap-4">
           <span className="text-xl font-medium">yefrymsp@gmail.com</span> <span><i className="fa-solid fa-envelope text-3xl"></i></span>
          </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/yefrysanchez/">
          <div className=" bg-shade2/15 rounded-3xl flex justify-center items-center p-6 gap-4">
            <span className="text-xl font-medium">LinkedIn</span> <span><i className="fa-brands fa-linkedin text-3xl"></i></span>
          </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
