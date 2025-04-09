
import { Link } from "react-router-dom";

const LocalContentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Vancouver's Premier Flooring Solution</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Since 2005, FlooringQuotesVancouver has been the trusted name in flooring installation throughout Clark County. Our team of licensed, insured professionals specializes in transforming Vancouver WA homes with premium flooring solutions that stand the test of time.
            </p>
            <p className="mb-4">
              Located just minutes from downtown Vancouver, we serve homeowners and businesses across the entire region, including Camas, Battle Ground, Ridgefield, and Washougal. The unique Pacific Northwest climate presents specific challenges for flooring—from the persistent winter rain to summer humidity—and our local expertise ensures you'll receive recommendations perfectly suited to your property's specific needs.
            </p>
            <p className="mb-4">
              Whether you're renovating a historic home in Uptown Village, updating a commercial space near Vancouver Mall, or building a new construction in Fishers Landing, our comprehensive <Link to="/flooring-installation-vancouver-wa" className="text-primary hover:underline">flooring installation services</Link> deliver exceptional results at competitive rates.
            </p>
            <p className="mb-4">
              Compare <Link to="/vinyl-flooring-vancouver-wa" className="text-primary hover:underline">vinyl flooring</Link>, <Link to="/hardwood-flooring-vancouver-wa" className="text-primary hover:underline">hardwood</Link>, <Link to="/laminate-flooring-vancouver-wa" className="text-primary hover:underline">laminate</Link>, and <Link to="/tile-flooring-vancouver-wa" className="text-primary hover:underline">tile options</Link> with our free, no-obligation quotes. Our Vancouver WA flooring specialists are ready to help you find the perfect solution for your home, lifestyle, and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalContentSection;
