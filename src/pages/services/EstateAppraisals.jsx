const EstateAppraisals = () => {
  return (
    <div>
      <div className="block bg-[url('/estate-appraisal.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 pt-64 pb-60">
        <div className="bg-[rgb(52,52,52)] opacity-50 -z-10 absolute top-0 left-0 h-full w-full"></div>
        <div className="text left-0 right-0 top-[50%] mcom:top-[50px] font-[Syne] text-center translate-x-0 stroke-white opacity-10 -z-10 com:text-[300px] absolute font-bold fill-transparent stroke-1 mcom:text-[150px] tab:text-[100px] sm:text-[70px]">
          Services
        </div>
        <div className="w-full px-4 mx-auto max-w-[1200px]  ">
          <h1 className="text-white mcom:text-[120px] text-[90px] text-center mt-0  mb-2 font-semibold font-[Syne] leading-[0.833]">
            Estate Appraisals
          </h1>
        </div>
      </div>
      <div className="pt-[145px] pb-32 mcom:px-40 overflow-hidden block">
        <div className="  px-4 mx-auto">
          <div className="w-full basis-full shrink-0 grow-0">
            <div className="pl-10 mr-12">
              <div className="mb-8 pb-5 border-b-2 relative">
                <h2 className="text-5xl font-semibold uppercase">
                  Estate Appraisals
                </h2>
              </div>
              <div>
                <p className="mt-o mb-4 text-base">
                  We work closely with many attorneys handling probate cases. We
                  understand the sensitive circumstances surrounding estate
                  appraisals and work quickly to document the fair market value
                  of the items. When the estate is settled, we can assist in the
                  equitable distribution to heirs, or the liquidation of the
                  assets.
                </p>
                <p className="mt-o mb-4 text-base">
                  <strong>Equitable Distribution:</strong>
                </p>
                <p className="mt-o mb-4 text-base">
                  When a collection of jewellery must be split among heirs, it
                  is often necessary to have a fair market evaluation performed
                  to facilitate the division. Carola Kemp Gems will prepare a
                  report documenting the value of each piece. After the
                  distribution of the items, that report can be converted into
                  individual insurance appraisals for the heirs.
                </p>
                <p className="mt-o mb-4 text-base">
                  <strong>Donation Appraisals:</strong>
                </p>
                <p className="mt-o mb-4 text-base">
                  If you are planning to make a large (in excess of $5,000)
                  donation of jewellery to your favourite charity, you will need
                  a donation appraisal report to file with your Federal Income
                  Tax Return. We can prepare an accurate appraisal and determine
                  the fair market value of the donated jewellery items.
                  Additionally, we will help fill out the IRS form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateAppraisals;
