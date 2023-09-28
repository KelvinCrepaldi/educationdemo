import { SectionHeader } from "@/components";
import { ISubscription } from "@/interfaces/SubscriptionPlan/subscription.interface";
import SubscriptionCard from "../../components/SubscriptionCard";

const subscriptionList: ISubscription[] = [
  {
    benefits: [
      { active: true, name: "Course Learning Checks" },
      { active: true, name: "Course Discussions" },
      { active: true, name: "Exercise Files" },
      { active: false, name: "Offline Viewing" },
      { active: false, name: "Certificate of Completion" },
      { active: false, name: "Full Lifetime Access" },
    ],
    period: "Month",
    price: 49,
    purchaseUrl: "",
    title: "Monthly",
  },
  {
    benefits: [
      { active: true, name: "Course Learning Checks" },
      { active: true, name: "Course Discussions" },
      { active: true, name: "Exercise Files" },
      { active: true, name: "Offline Viewing" },
      { active: true, name: "Certificate of Completion" },
      { active: false, name: "Full Lifetime Access" },
    ],
    period: "Year",
    price: 485,
    purchaseUrl: "",
    title: "Annual",
  },
  {
    benefits: [
      { active: true, name: "Course Learning Checks" },
      { active: true, name: "Course Discussions" },
      { active: true, name: "Exercise Files" },
      { active: true, name: "Offline Viewing" },
      { active: true, name: "Certificate of Completion" },
      { active: true, name: "Full Lifetime Access" },
    ],
    period: "Month",
    price: 99,
    purchaseUrl: "",
    title: "Extended",
  },
];

const PricingInfo = (): JSX.Element => {
  return (
    <section className="max-w-[1200px] mx-auto my-20 p-5 ">
      <SectionHeader
        subtitle="Become a Member"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
        title="Membership"
      />
      <div className="grid lg:grid-cols-3 gap-5 mt-20">
        {subscriptionList.map((subscription: ISubscription, index: number) => (
          <SubscriptionCard subscription={subscription} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PricingInfo;
