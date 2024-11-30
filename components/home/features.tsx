import React from "react";

const Features = () => {
  return (
    <section>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl">
          <div className="relative">
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-2 rounded-3xl border h-60">
                <div className="p-4">
                  <h2 className="text-2xl font-bold">Feature 1</h2>
                  <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec odio ipsum. Suspendisse cursus malesuada
                    turpis.
                  </p>
                </div>
              </div>
              <div className="col-span-2 rounded-3xl border h-60"></div>
              <div className="col-span-2 rounded-3xl border h-60"></div>
              <div className="col-span-3 rounded-3xl border h-60"></div>
              <div className="col-span-3 rounded-3xl border h-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
