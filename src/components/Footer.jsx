const Footer = () => {
  return (
    <footer className="border-t py-16 p-4 ">
      <div className="container mx-auto lg:max-w-[80%]">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-12 max-lg:text-center">
          {/* BRAND */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-xl font-semibold">Panto</h2>
            <p className="text-muted-foreground md:max-w-md max-lg:mx-auto">
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </div>

          {/* SERVICES */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:col-span-2">
            <div className="space-y-4">
              <h4 className="text-orange-500 font-medium">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
              </ul>
            </div>

            {/* FURNITURE */}
            <div className="space-y-4">
              <h4 className="text-orange-500 font-medium">Furniture</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Beds</li>
                <li>Chair</li>
                <li>All</li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="space-y-4">
              <h4 className="text-orange-500 font-medium ">Follow Us</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2 max-lg:justify-center">
                  Facebook
                </li>
                <li className="flex items-center gap-2 max-lg:justify-center">
                  Twitter
                </li>
                <li className="flex items-center gap-2 max-lg:justify-center">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>Copyright © 2021</p>

          <div className="flex gap-6">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
