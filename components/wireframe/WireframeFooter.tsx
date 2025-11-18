export default function WireframeFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">For Candidates</h3>
            <ul className="space-y-2">
              <li className="border border-gray-700 px-2 py-1 text-sm">Browse Jobs</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Companies</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Premium Plans</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Career Resources</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">For Employers</h3>
            <ul className="space-y-2">
              <li className="border border-gray-700 px-2 py-1 text-sm">Post a Job</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Find Candidates</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Pricing</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Resources</h3>
            <ul className="space-y-2">
              <li className="border border-gray-700 px-2 py-1 text-sm">Blog</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Help Center</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Affiliate Program</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">For Recruiters</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Company</h3>
            <ul className="space-y-2">
              <li className="border border-gray-700 px-2 py-1 text-sm">About Us</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Contact</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Privacy Policy</li>
              <li className="border border-gray-700 px-2 py-1 text-sm">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">LiveRec</div>
              <p className="text-sm text-gray-400">
                Your next career move starts here
              </p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 border-2 border-gray-700 bg-gray-800">[FB]</div>
              <div className="w-8 h-8 border-2 border-gray-700 bg-gray-800">[TW]</div>
              <div className="w-8 h-8 border-2 border-gray-700 bg-gray-800">[LI]</div>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-400 border-t border-gray-800 pt-4">
            <p>&copy; {new Date().getFullYear()} LiveRec. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

