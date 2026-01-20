const Problem = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">The Problem</h3>
        <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
          Merchants struggled to complete onboarding because the KYC process
          treated all businesses the same. Starter businesses and registered
          businesses were forced through a single, rigid flow, leading to
          confusion, incomplete submissions, and delays in account activation.
          This slowed merchant acquisition and increased admin review time.
        </p>
      </div>

      {/* Image Container */}
      <div
        className="relative flex bg-green-400 rounded-3xl p-8 md:p-12 bg-cover bg-center"
        style={{ backgroundImage: `url('')` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src=""
            alt="KYC Screenshot 1"
            className="w-full rounded-lg shadow-xl"
          />
          <img
            src=""
            alt="KYC Screenshot 2"
            className="w-full rounded-lg shadow-xl"
          />
          <img
            src=""
            alt="KYC Screenshot 3"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Problem;
