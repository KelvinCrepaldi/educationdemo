import { GiCheckMark } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import CustomLink from "@/components/CustomLink/CustomLink";
import {
  IBenefit,
  SubscriptionCardProps,
} from "@/interfaces/SubscriptionPlan/subscription.interface";
const SubscriptionCard = ({
  subscription,
}: SubscriptionCardProps): JSX.Element => {
  return (
    <article className="p-10 bg-white my-2 rounded-lg shadow-lg odd:bg-white odd:text-black even:bg-cyan-700 even:text-white">
      <div className="flex justify-center flex-col items-center space-y-3">
        <h6>{subscription.title}</h6>
        <p className=" font-bold">
          <span className="text-3xl mr-4">${subscription.price}</span>/
          {subscription.period}
        </p>
      </div>
      <ul className="mt-14">
        {subscription.benefits.map((benefit: IBenefit, index: number) => (
          <li key={index}>
            <p
              className={`flex items-center py-1 ${
                !benefit.active && "opacity-40"
              }`}
            >
              {benefit.active ? <GiCheckMark /> : <AiOutlineClose />}
              <span className="ml-1">{benefit.name}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-14">
        <CustomLink href={subscription.purchaseUrl}>PURCHASE</CustomLink>
      </div>
    </article>
  );
};

export default SubscriptionCard;
