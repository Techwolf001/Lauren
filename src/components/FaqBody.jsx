/* eslint-disable react/no-unescaped-entities */
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function FaqBody() {
  return (
    <div className="w-full md:px-20 pt-[145px] pb-[120px]">
      <div className="mx-auto w-full  rounded-2xl bg-white p-2">
        {/* <Disclosure>

          {({ open }) => (

            <>
            {DisclosureMap.map((DisclosureMap) => {
              const { span, text } = DisclosureMap;
                    return(
                        <><Disclosure.Button className={`${open ? 'border-none mb-3' : ""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
                        >
                            <PlusIcon
                                className={`${open ? 'rotate-45 transform' : ''} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`} />
                            <span>{span}</span>

                        </Disclosure.Button><Transition
                            enter="transition duration-400 ease-in-out"
                            enterFrom="transform scale-95 opacity-40"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-200 ease-in-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                                    {text}
                                </Disclosure.Panel>
                            </Transition></>
                    );
            })}

            </>
          )}
        </Disclosure> */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>What is an Appraisal?</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Appraisal documents may be necessary when insuring your
                  belongings against loss, theft, or damage, or during legal
                  proceedings following the event of a divorce, annulment, or
                  death. In addition, federal law requires appraisals by
                  “qualified appraisers” on certain charitable contributions to
                  qualifying non-profit institutions. Additionally, many clients
                  choose to request an appraisal is to protect their assets and
                  interests when contemplating the sale of their belongings or
                  the acquisition of new items for their collections.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>Why might I need an appraisal?</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Appraisal documents may be necessary when insuring your
                  belongings against loss, theft, or damage, or during legal
                  proceedings following the event of a divorce, annulment, or
                  death. In addition, federal law requires appraisals by
                  “qualified appraisers” on certain charitable contributions to
                  qualifying non-profit institutions. Additionally, many clients
                  choose to request an appraisal is to protect their assets and
                  interests when contemplating the sale of their belongings or
                  the acquisition of new items for their collections.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  What makes your appraisals better than other appraisers?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  I provide higher quality appraisals, service, and overall
                  experience. I do the appraisal work white you sit with me and
                  watch the process. I am one of the few gemologists anywhere
                  that have the GIA iD 100 Spectrometer that can distinguish
                  between a natural-mined diamond and a manmade diamond or the
                  rare type IIa diamond. With my machine, I don’t need to remove
                  the diamond from the setting and send it off to the GIA for
                  testing. Appointments with me take about 45 minutes.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>How long does the appraisal process takes?</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Each appointment takes 30 to 45 minutes for me to take my
                  notes and pictures of your item while you wait and watch. Your
                  official written appraisal will be ready in 5 to 7 business
                  days. I email your appraisal to you and then put your original
                  paper appraisal in the mail to your address. You always leave
                  our appointment with your jewellery and I use my notes and
                  pictures to make your appraisal.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>What method of payment do you offer?</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Payment is made by company check or wire transfer.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  Once I give you my jewelry, how long does it takes to receive
                  payment?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Once we have examined the jewelry and a price has been
                  accepted, payment will be made immediately.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>What kind of documents do I need?</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Your GIA or other certificates if you have it and a form of
                  identification. We will also ask you to sign a document
                  confirming that you are the owner of the item.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  Would your company un-mount my diamonds for me, or do I have
                  to un-mount them myself?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  If necessary, our company may un-mount the diamonds for you,
                  but only with your permission.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  When I bring my jewelry, will it be examined in front of me?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Jewellery is always examined in your presence.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  Do I need to make an appointment, or do I just walk in?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-pink-900">
                  We highly encourage making an appointment prior to coming in:
                  <a href="mailto:fawasrufai09@gmail.com">
                    fawasrufai09@gmail.com
                  </a>{" "}
                  however we do accept walk-ins.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  Do I need to come in or can I email or fax over a picture of
                  the jewelry I want to sell?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  You may send us an email or a fax, but if we are interested,
                  the piece must be examined in person to ensure you are offered
                  the best price.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>How do we determine the value? </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  <ul className="ml-7">
                    <li className="list-disc">
                      INTRINSIC VALUE: Diamonds, colored gemstones and precious
                      metals have value based on the size, quality and rarity of
                      the gems and the weight and purity of the gold or
                      platinum. Intrinsic value generally represents the minimum
                      a piece is worth and we generally pay much, much more.
                    </li>
                    <li className="list-disc">
                      CRAFTSMANSHIP AND DESIGN Jewelry from the past is executed
                      with many techniques, usually hand fabricated, with great
                      attention to detail. The more unique and intricate the
                      design the higher the value.
                    </li>
                    <li className="list-disc">
                      DESIRABILITY Signed jewelry, fine colored stone rings,
                      exquisite examples of period jewelry and larger antique
                      and estate diamond engagement rings are highly prized
                      today. As always, ever changing fashion trends influence
                      the demand for certain periods, materials and gemstones..
                    </li>
                    <li className="list-disc">
                      RARITY: Most high-quality antique, vintage and estate
                      jewels are one-of-a-kind. In addition to being
                      individually hand crafted, some antique and estate jewels
                      are made by famous jewelers such as Cartier, Tiffany, Van
                      Cleef & Arpels and many others. We happily pay a large
                      premium for fine signed pieces.Often rarity and
                      collectability is predicated solely on the unique
                      character of the piece.
                    </li>
                    <li className="list-disc">
                      LARGE DIAMONDS AND GEMS: If large diamonds and gemstones
                      are highlighted in a fine piece of jewelry they make it
                      even more rare and valuable.
                    </li>
                    <li className="list-disc">
                      CONDITION: We expect to see some signs of wear on antique
                      and estate jewelry. Jewelry in pristine original condition
                      is rare and commands a premium. Jewelry with apparent
                      alterations, repairs and restoration can be devalued.
                    </li>
                  </ul>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>What types of jewelry do we buy?</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  We specialize in Fine antique, estate, and signed jewelry,
                  large diamonds and gemstones, watches, and precious metals. We
                  also purchase other fine antiques, paintings, and furniture.
                  We do not purchase costume jewelry.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  I'm not sure if I want to sell my jewelry, can I come in for a
                  Consultation?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Yes, you may make an appointment for a consultation. Verbal
                  appraisals are free, but written appraisals are subject to a
                  fee.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  What is the process that takes place once I decide I want to
                  sell the jewelry to your company?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  Upon arriving at our offices, you the seller will be shown to
                  a private consultation room, where you will meet a member of
                  our team in complete confidentiality. The item, be it a piece
                  of jewellery, a diamond, or coloured stone, will be examined
                  with a variety of gemological instruments. If we are
                  interested in purchasing the piece or stone, we will make you
                  an offer, and if you accept, payment will be made immediately
                  via company check or wire transfer. If we do not wish to
                  purchase the item or believe we are not the best avenue for
                  you, we will try to direct you to the next best avenue.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "border-none mb-3" : ""
                } flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`}
              >
                <PlusIcon
                  className={`${
                    open ? "rotate-45 transform" : ""
                  } h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}
                />
                <span>
                  What is the Difference Between Fair Market Value and
                  Marketable Cash Value?
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-40"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[17px] text-gray-900">
                  <div className="faq-body">
                    <p className="">
                      <strong>
                        <em>Fair Market Value:</em>
                      </strong>
                      &nbsp;If you are a willing seller and selling your jewelry
                      by yourself and not paying any commissions, advertising
                      costs, etc. then the money you sell it for is called the
                      Fair Market Value.
                    </p>
                    <p className="">
                      <strong>
                        <em>Marketable Cash Value:</em>
                      </strong>
                      &nbsp;If you need help selling the jewelry items you would
                      then be paying a commission or fee to someone who has
                      experience and contacts in selling the types of jewelry
                      you have for sale. Your take home price is the selling
                      price less any commission and advertising fees that have
                      been incurred.
                    </p>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
