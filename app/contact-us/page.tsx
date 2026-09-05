import ContactForm from '@/components/ContactForm';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Contact Us | Schedule a Conversation | LBrown Learning',
  description:
    'Contact us to schedule a discovery conversation and start developing your team today.',
};

export default function ContactUsPage() {
  return (
    <main>
      <section className="bg-[#004e83] pt-20 pb-32">
        <div className="w-[80%] max-w-[1080px] mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl font-medium">Contact Us</h1>
        </div>
      </section>

      <section className="bg-white -mt-16 pb-20">
        <div className="w-[80%] max-w-[1080px] mx-auto bg-white rounded-md shadow-md p-6 md:p-12">
          <ContactForm />
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-16">
        <div className="w-[80%] max-w-[1080px] mx-auto text-center">
          <h3 className="text-[#112337] text-2xl mb-2">Stay Up to Date</h3>
          <p className="text-[#686e77] mb-8">
            Sign up to receive occasional training tips and resources from LBrown Learning.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <section className="hidden">
        <iframe src="about:blank" title="hidden-frame-1" />
        <iframe src="about:blank" title="hidden-frame-2" />
        <iframe
          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcfpCctAAAAAOKymTsTOG-emU3-MHjF7i2JYGks&co=aHR0cHM6Ly9sYnJvd25sZWFybmluZy5jb206NDQz&hl=en&v=8x-4t2pegToiW8KmThtO4AQt&size=invisible&anchor-ms=20000&execute-ms=30000&cb=7a0j4bfoa3g2"
          title="recaptcha"
        />
      </section>
    </main>
  );
}
