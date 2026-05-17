export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Want to find out where AI could save your business time?
        </h2>
        <p className="text-lg text-green-100 mb-10">
          If your business deals with repetitive emails, customer inquiries,
          follow-ups, or admin handoffs — I can help identify one workflow worth
          automating.
        </p>
        <a
          href="mailto:evanramasra@gmail.com?subject=Free Workflow Review"
          className="inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-green-50 transition-colors"
        >
          Book a Free Workflow Review
        </a>
        <div className="mt-10 text-green-100 text-sm space-y-1">
          <p className="font-medium text-white">Evan Ramasra</p>
          <p>
            <a
              href="mailto:evanramasra@gmail.com"
              className="hover:text-white transition-colors"
            >
              evanramasra@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:4373460706"
              className="hover:text-white transition-colors"
            >
              437-346-0706
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
