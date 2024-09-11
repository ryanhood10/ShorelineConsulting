import React from 'react';

const CompanyStory = () => {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto py-12 lg:py-16 px-4">
        {/* Title */}
        <h2 className="text-center text-3xl lg:text-4xl font-light text-navy">
          Origin Story
        </h2>

        {/* Story Content */}
        <div className="mt-8 lg:mt-12 flex flex-col gap-6 text-sm md:text-base text-gray-600 lg:gap-8">
          <p>
            Pinecone was founded in 2019 by Edo Liberty. As a research director
            at AWS and at Yahoo! before that, Edo saw the tremendous power of
            combining AI models and vector search to dramatically improve
            applications such as spam detectors and recommendation systems.
          </p>
          <p>
            While he was working on custom vector search systems at enormous
            scales, he assumed there was already a packaged solution out there
            for everyone else who didn’t have the same engineering and
            data-science resources available. To his surprise, there wasn’t.
            Thus Pinecone and the{' '}
            <a
              href="/learn/vector-database/"
              className="text-blue-500 transition-colors duration-300 hover:text-blue-400"
            >
              vector database
            </a>{' '}
            category of solutions was born.
          </p>
          <p>
            Pinecone was created to provide the critical storage and retrieval
            infrastructure needed for building and running state-of-the-art AI
            applications. The founding principle was to make the solution
            accessible to engineering teams of all sizes and levels of AI
            expertise, which led to the fully managed service and ease of use
            that Pinecone is known for today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
